const express = require('express');
const google = require('googleapis').google;
const OAuth2 = google.auth.OAuth2;
const state = require('./state.js');

const robot = async () => {
  const content = state.load();

  await authenticateWithOAuth();
  // await uploadVideo();
  // await uploadThumbnail();

  const authenticateWithOAuth = async () => {
    const webServer = await startWebServer();
    const OAuthClient = await createOAthClient();
    requestUserConsent(OAuthClient);
    // await setGlobalGoogleAuthentication();
    // await stopWebServer();

    const startWebServer = async () => {
      return new Promise((resolve, reject) => {
        const port = 3000
        const app = express();

        const server = app.listen(port, () => {
          console.log(`> Listening on http://localhost:${port}`);

          resolve({
            app,
            server,
          });
        });
      });
    };

    const createOAthClient = async () => {
      const credencials = require('../credenciais/google-yt-credencial.json');

      const OAuthClient = new OAuth2(
        credencials.web.client_id,
        credencials.web.client_secret,
        credencials.web.redirect_uris[0]
      );

      return OAuthClient;
    };

    const requestUserConsent = (OAuthClient) => {
      const consentUrl = OAuthClient.generateAuthUrl({
        acess_type: 'offline',
        scope: ['https://www.googleapis.com/auth/youtube']
      });

      console.log(`> Please give your consent: ${consentUrl}`);
    };
  }
};

module.exports = robot;