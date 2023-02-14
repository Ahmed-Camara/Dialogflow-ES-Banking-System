import express from "express";
const app = express();
import bodyParser from "body-parser";
import dialogflow from "dialogflow-fulfillment";
import logger, { compile } from "morgan";
import {
  msgSuccess,
  operationChoix,
  AccountChoix,
  soldeInfo,
  authEchec,
  EchecSoldeVirement,
  AutreServices,
} from "./variables.js";
import {
  consulterSolde,
  userAuthentication,
  getAllComptes,
} from "./model/chatBotModel.js";

app.use(bodyParser.json({ strict: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("test");
});

app.post("/", express.json(), (req, res) => {
  if (!req.body.queryResult.fulfillmentMessages) return;
  req.body.queryResult.fulfillmentMessages =
    req.body.queryResult.fulfillmentMessages.map((m) => {
      if (!m.platform) m.platform = "PLATFORM_UNSPECIFIED";
      return m;
    });

  const agent = new dialogflow.WebhookClient({ request: req, response: res });

  const welcome = (agent) => {
    agent.add(
      `Bonjour je  suis l'assistant virtuel que puis-je faire pour vous ?`
    );
  };

  const fallback = (agent) => {
    agent.add(`Je n'ai pas saisi ce que vous avez dit.`);
  };

  const getRandomSuccessMessage = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const authentification = async (agent) => {
    const AccNum = agent.parameters.banque;
    const dateNaiss = agent.parameters.dateNaiss;
    const montantDernTrans = agent.parameters.montantDernTrans;
    const dateDernTrans = agent.parameters.dateDernTrans;
    const dernierChiffres = agent.parameters.dernierChiffres;

    const res = await userAuthentication(
      AccNum,
      dateNaiss,
      montantDernTrans,
      dateDernTrans,
      dernierChiffres
    );
    console.log("RESPONSE : " + res);
    const userName = res.STR_CLIENT;
    if (res.code_statut === "1") {
      agent.add(getRandomSuccessMessage(msgSuccess).replace("XXXXX", userName));

      agent.add(getRandomSuccessMessage(operationChoix));
      const payloadData = {
        richContent: [
          [
            {
              type: "chips",
              options: [
                {
                  text: "Virements.",
                },
                {
                  text: "Consultation de solde.",
                },
              ],
            },
          ],
        ],
      };

      const LG_CLIID = res.LG_CLIID;
      agent.context.set({
        name: "client_id",
        lifespan: 3,
        parameters: { LG_CLIID },
      });

      return agent.add(
        new dialogflow.Payload(agent.UNSPECIFIED, payloadData, {
          sendAsMessage: true,
          rawPayload: true,
        })
      );
    }

    agent.add(getRandomSuccessMessage(authEchec));
  };

  const authConsultationSolde = async (agent) => {
    const clientContext = agent.context.get("client_id");
    const LG_CLIID = clientContext.parameters.LG_CLIID;
    //get la liste de tous les comptes
    const res = await getAllComptes(LG_CLIID);
    console.log(res.STR_COMPTES);

    if (res.code_statut === "1") {
      agent.add(getRandomSuccessMessage(AccountChoix));
      const payloadData = {
        richContent: [
          [
            {
              type: "chips",
              options: [],
            },
          ],
        ],
      };

      const accountNumbers = res.STR_COMPTES;
      accountNumbers.forEach((accountNumber) => {
        payloadData.richContent[0][0].options.push({
          text: accountNumber,
        });
      });

      return agent.add(
        new dialogflow.Payload(agent.UNSPECIFIED, payloadData, {
          sendAsMessage: true,
          rawPayload: true,
        })
      );
    }

    agent.add(getRandomSuccessMessage(EchecSoldeVirement));
  };

  const SoldeSpecificCompte = async (agent) => {
    const AccNum = agent.parameters.banque;
    const res = await consulterSolde(AccNum);
    //soldeInfo

    if (res.code_statut === "1") {
      agent.add(
        getRandomSuccessMessage(soldeInfo)
          .replace("XXXXX", res.SOLDE)
          .replace("YYYYY", res.DEVIS)
      );

      return agent.add(getRandomSuccessMessage(AutreServices));
    }

    agent.add(getRandomSuccessMessage(EchecSoldeVirement));
  };

  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", welcome);
  intentMap.set("Default Fallback Intent", fallback);
  intentMap.set("authentification", authentification);
  intentMap.set("auth-consultation-solde", authConsultationSolde);
  intentMap.set("solde-data-auth", SoldeSpecificCompte);
  agent.handleRequest(intentMap);
});

app.listen(3000, () => console.log("application has started at port 3000"));
