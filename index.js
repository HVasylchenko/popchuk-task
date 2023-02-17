const express = require("express");
const { google } = require("googleapis");
// require('dotenv').config()

const app = express();

app.get("/", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1u78QOSGec1uMTBi0MGDu75kow8WQzYianQNxeYE95no";

  fetch(
    "https://api.crunchbase.com/api/v4/entities/organizations/uber?card_ids=founders",
    {
      headers: {
        "X-cb-user-key": "9a4e1eb5cca8a97f74eead2fcea10951",
        // "X-cb-user-key": key,
        accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      // Write row(s) to spreadsheet
      googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Лист1!A:B",
        // range: range,
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [
            [
              response.properties.identifier.uuid,
              response.properties.identifier.value,
            ],
          ],
        },
      });
    });

  res.send("Successfully submitted! Thank you!");
});

app.listen(5000, (req, res) => console.log("running on 5000"));