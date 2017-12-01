const app = (function(artist, song){
  // Dependencies
  const request = require('request');
  const colors = require('colors');
  const ora = require('ora');

  // Libs
  const utils = require('./libs/utils');

  // Configuration
  const { APIURL, APIKEY } = require('./config');

  // Endpoint to get track_id
  const trackEndpoint = `${APIURL}track.search?apikey=${APIKEY}&q_artist=${artist}&q_track=${song}`;

  // Definitions
  const spinner = ora('Loading your lyrics').start();
  const requestConfig = { json: true };

  // Getting track_id
  request(trackEndpoint, requestConfig, function (error, response, body) {
    if(body.message.body.track_list.length === 0) {
      spinner.stop();
      return utils.log('No results to show, check the entered values'.red);
    }

    const trackId = body.message.body.track_list[0].track.track_id;
    const lyricEndpoint = `${APIURL}track.lyrics.get?apikey=${APIKEY}&track_id=${trackId}`

    request(lyricEndpoint, requestConfig, (error, response, body) => {
      utils.logger(body.message.body.lyrics.lyrics_body, 'Lyric');
      spinner.stop();
    });
  });
})

// Exporting module
module.exports = app;
