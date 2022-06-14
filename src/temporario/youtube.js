const express = require('express');
const state = require('./state.js');

const robot = async () => {
  const content = state.load();

  await authenticateWithOAuth();
  // await uploadVideo();
  // await uploadThumbnail();

  const authenticateWithOAuth = async () => {
    const webServer = await startWebServer();
    // await createOAthClient();
    // await requestUserConsent();
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
    }
  }
};

module.exports = robot;