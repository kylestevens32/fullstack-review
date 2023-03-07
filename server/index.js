const express = require('express');
const github = require('../helpers/github');
const db = require('../database');
const cors = require('cors');
const path = require('path');
let app = express();

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.

app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/repos', function (req, res) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var username = req.body.username;
  github.getReposByUsername(username, (err, response) => {
    if (err) {
      res.sendStatus(404);
    } else {
      db.save(response, (err) => {
        if (err) {
          res.sendStatus(404);
        } else {
          res.sendStatus(201);
        }
      });
    }
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getTopRepos((err, repos) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(repos);
    }
  })
});

let port = process.env.PORT || 1128;



app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

