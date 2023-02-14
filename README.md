# Dialogflow-ES-Banking-System

### GOAL

The goal of this application was design a chatbot using <a href="https://dialogflow.cloud.google.com/#/getStarted">Dialogflow ES</a> which would assist customers in their daily request made to the bank. In this project, We designed two main features : Transaction request and Balance inquiry.

In order to proceed with these two features, the user will have to be authenticated first.
When the user asks for one of these features, the intent that contains the authentication flow will automatically be triggered.

#### Balance inquiry
When the user is authenticated, a list of services will be shown to him and will be asked to chose the service he wants as shown in the figure below
<img src"./images/auth.png">

#### Transaction

### NOTES
You will notice that in the .gitignore file, the folder model which contains the chatBotModel.js has been ignored because, this file contains a lot of sensitive data that cannot be shared. The file also contains code to call external endpoint as this project requires a user authentification.