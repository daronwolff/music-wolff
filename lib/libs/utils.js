/**
 * Executes simple console.log
 * @param {any} text
 */
const log = (text) => console.log(text)

/**
* Execute console.log with separators
* @param {string} text string to show
* @param {string} [title='-']
*/
const logger = (text, title = '-') => {
  console.log(`|---------------------------${title}------------------------------|`);
  console.log(text);
  console.log('|----------------------------------------------------------|');
}

module.exports = {
  log, logger
};