const msgSuccess = [
  "Bienvenue XXXXX, vous êtes maintenant connecté à notre application!",
  "Félicitations XXXXX, votre identification a réussi avec succès!",
  "XXXXX, votre identification a été effectuée avec succès.",
  "Merci de vous être identifié, XXXXX. Vous pouvez maintenant accéder à tous les avantages de notre application.",
  "Bonjour XXXXX, vous êtes maintenant connecté à notre application.",
  "Félicitations XXXXX, votre connexion a réussi avec succès!",
  "XXXXX, votre connexion a été établie avec succès. ",
];

const operationChoix = [
  "Choisissez l'opération que vous allez effectuer.",
  "Sélectionnez l'opération à effectuer.",
  "Faites votre choix pour l'opération à effectuer.",
  "Que souhaitez-vous faire? Choisissez une opération.",
  "Quelle opération souhaitez-vous effectuer? Faites votre choix.",
  "Veuillez choisir l'opération que vous allez effectuer.",
  "Choisissez l'opération à réaliser.",
  "Sélectionnez une opération à effectuer.",
  "Choisissez une opération parmi les disponibles.",
  "Veuillez choisir parmi les opérations disponibles.",
  "Quelle opération souhaitez-vous exécuter? Choisissez.",
  "Choisissez parmi les opérations proposées.",
  "Veuillez sélectionner l'opération que vous allez effectuer.",
  "Choisissez une opération pour poursuivre.",
  "Faites votre sélection pour l'opération à accomplir.",
];

const AccountChoix = [
  "Veuillez cliquer sur le numéro de compte concerné.",
  "Cliquez sur le numéro de compte correspondant s'il vous plaît.",
  "Merci de cliquer sur le numéro de compte en question.",
  "Veuillez sélectionner le numéro de compte approprié en cliquant dessus.",
  "Cliquez sur le numéro de compte correspondant pour poursuivre.",
  "S'il vous plaît, cliquez sur le numéro de compte en lien avec votre demande.",
  "Veuillez cliquer sur le bon numéro de compte.",
  "Cliquez sur le numéro de compte associé à votre requête.",
  "Merci de sélectionner le numéro de compte adéquat en cliquant dessus.",
  "Veuillez cliquer sur le numéro de compte correspondant à votre dossier.",
  "Cliquez sur le numéro de compte lié à votre demande s'il vous plaît.",
  "Merci de cliquer sur le numéro de compte approprié.",
  "Veuillez sélectionner le numéro de compte en rapport avec votre requête en cliquant dessus.",
  "S'il vous plaît, cliquez sur le numéro de compte correspondant.",
  "Veuillez cliquer sur le numéro de compte associé à votre situation.",
  "Cliquez sur le numéro de compte en lien avec votre demande pour poursuivre.",
  "Merci de sélectionner le numéro de compte adéquat en cliquant dessus.",
  "Veuillez cliquer sur le numéro de compte lié à votre requête.",
];

const soldeInfo = [
  "Votre compte en banque affiche un solde de XXXXX YYYYY.",
  "Vous avez XXXXX YYYYY disponibles sur votre compte.",
  "Votre solde actuel est de XXXXX YYYYY, merci de vérifier votre compte régulièrement.",
  "Votre compte affiche un solde de XXXXX YYYYY.",
  "Le montant de votre solde est de XXXXX YYYYY.",
  "Vous disposez actuellement de XXXXX YYYYY.",
  "Votre solde bancaire est de XXXXX YYYYY.",
  "Vous avez un crédit de XXXXX YYYYY sur votre compte.",
];

const authEchec = [
  "Désolé, les informations fournies ne nous ont pas permis de vous identifier. Nous ne pouvons pas continuer la transaction. Voulez-vous recommencer le processus d'identification ?",
  "Malheureusement, nous n'avons pas été en mesure de vous identifier avec les informations reçues. Nous ne pouvons pas poursuivre. Désirez-vous refaire la procédure d'identification ?",
  "Nos systèmes n'ont pas été en mesure de vérifier votre identité avec les informations fournies. La transaction ne peut pas être poursuivie. Souhaitez-vous recommencer l'identification ?",
  "Les informations que vous avez fournies ne correspondent pas à nos enregistrements. Nous ne pouvons pas continuer la transaction. Voulez-vous redémarrer le processus d'identification ?",
  "Les informations fournies ne correspondent pas à nos données. Nous ne pouvons pas continuer la transaction. Souhaitez-vous redémarrer le processus d'identification ?",
  "Malheureusement, nous n'avons pas pu vous identifier avec les informations que vous avez fournies. La transaction ne peut pas se poursuivre. Voulez-vous reprendre l'identification ?",
  "Nous n'avons pas pu vérifier votre identité en utilisant les informations que vous avez fournies. La transaction ne peut pas se poursuivre. Désirez-vous redémarrer le processus d'identification ?",
  "Les informations que vous avez fournies ne sont pas suffisantes pour nous permettre de vous identifier. Nous ne pouvons pas poursuivre la transaction. Voulez-vous recommencer l'identification ?",
];

const EchecSoldeVirement = [
  "Désolé, nous n'avons pas pu traiter votre demande. Veuillez réessayer plus tard.",
  "Malheureusement, nous n'avons pas été en mesure de prendre en compte votre demande. Veuillez réessayer ultérieurement.",
  "Nous sommes désolés, votre demande n'a pas pu être traitée. Veuillez essayer à nouveau plus tard.",
  "Malheureusement, il y a eu une erreur lors du traitement de votre demande. Veuillez réessayer plus tard.",
  "Nous sommes désolés, votre demande ne peut être traitée pour le moment. Veuillez réessayer ultérieurement.",
  "Malheureusement, votre demande n'a pas pu être prise en compte. Veuillez essayer à nouveau plus tard.",
  "Désolé, le traitement de votre demande a échoué. Veuillez réessayer ultérieurement.",
  "Malheureusement, nous n'avons pas pu satisfaire votre demande. Veuillez réessayer plus tard.",
  "Nous sommes désolés, nous n'avons pas été en mesure de traiter votre requête. Veuillez réessayer plus tard.",
  "Malheureusement, il y a eu un problème lors du traitement de votre demande. Veuillez essayer à nouveau plus tard.",
];

const AutreServices = [
  "Souhaitez-vous accéder à d'autres services ?",
  "Aimeriez-vous découvrir nos autres services ?",
  "Aimeriez-vous accéder à d'autres options de service ?",
];

export {
  msgSuccess,
  operationChoix,
  AccountChoix,
  soldeInfo,
  authEchec,
  EchecSoldeVirement,
  AutreServices,
};
