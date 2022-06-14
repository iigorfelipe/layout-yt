const robots = {
  input: require('./robots.js'),
  text: require('./text.js'),
  stage: require('./stage.js'),
  image: require('./image.js'),
  video: require('./video.js'),
  youtube: require('./youtube.js'),
};

const start = async () => {
  // robots.input();
  // await robots.stage();
  // await robots.image();
  // await robots.video();
  await robots.youtube();
};

start();
