const MongoClient = require("mongodb").MongoClient;

const state = {
  db: null,
};

module.exports.connect = (done) => {
  const url = process.env.MONGO_URL;
  const dbname = process.env.DB_NAME;

  MongoClient.connect(url, (err, client) => {
    if (err) {
      return done(err);
    } else {
      state.db = client.db(dbname);
      done();
    }
  });
};

module.exports.get = () => {
  return state.db;
};
