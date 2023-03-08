const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  _id: Number, // automatically unique
  name: String,
  owner: String,
  url: String,
  forks: Number,
  // size: Number,
  // language: String,
  // description: String,
  // createdAt: Date
});

let Repo = mongoose.model('Repo', repoSchema);

// Repo.deleteMany({})
//   .then(() => {
//     Repo.find({})
//       .then((results) => {
//         console.log('Finding repo', results);
//       })
//   })


exports.save = (data, cb) => {
  // This function should save a repo or repos to
  // the MongoDB
  var newRepos = [];
  data.forEach((repo) => {
    var newRepo = new Repo({
      _id: repo.id,
      name: repo.name,
      owner: repo.owner.login,
      url: repo.html_url,
      forks: repo.forks
    })
    newRepos.push(newRepo);
  })
  Repo.create(newRepos)
    .then((docs) => {
      cb(null);
    }).catch((err) => {
      cb(err);
    });
}

exports.getTopRepos = (cb) => {
  Repo.find({})
    .sort('-forks')
    .limit(25)
    .exec()
    .then((data) => {
      cb(null, data);
    })
    .catch((err) => {
      cb(err);
    })
}

// module.exports.save = save;
// module.exports.getTopRepos = getTopRepos;