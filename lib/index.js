const app = (function(){
// Dependencies
  const program = require('commander');

  // App
  const app = require('./app');
  
  // Run commander
  program
    .version('0.0.1')
    .usage('-a "pink floyd" -s "hey you"')
    .option('-a, --artist [artist]', 'An optional artist')
    .option('-s, --song [type]', 'Add song name')
    .parse(process.argv);
  
  // Getting parameters
  const song = program.song;
  const artist = program.artist;
  
  // Check if information is present
  if(!artist || !song) {
    // Showing help
    program.help();
  } else {
    // Executing app
    app(artist, song);
  }
});

// Exporting module
module.exports = app;
