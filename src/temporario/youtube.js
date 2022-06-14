const state = require('./state.js');

const robot = async () => {
  const content = state.load();

  await authenticateWithOAuth();
  // await uploadVideo();
  // await uploadThumbnail();

  const authenticateWithOAuth = async () => {
    await startWebServer();
    // await createOAthClient();
    // await requestUserConsent();
    // await setGlobalGoogleAuthentication();
    // await stopWebServer();
  }
};

module.exports = robot;