
require('dotenv').config();

const { google } = require("googleapis");


const REDIRECT_URI = "https://localhost:5000/red";

const CLIENT_SECRET = process.env.C_SECRET;
const CLIENT_ID = process.env.C_ID;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: ["https://www.googleapis.com/auth/calendar"],
});

console.log("Authorize this app by visiting this URL:", authUrl);
