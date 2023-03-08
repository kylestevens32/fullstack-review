const axios = require('axios');
const config = require('../config.js');

module.exports = getReposByUsername = (username, cb) => {
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url, options.headers)
    .then((response) => {
      cb(null, response);
    })
    .catch((err) => {
      cb(err);
    })

}

// module.exports.getReposByUsername = getReposByUsername;