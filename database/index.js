const { Pool } = require('pg');

const pool = new Pool({
  user: 'lenoraesquenazi',
  host: 'localhost',
  database: 'q_and_a',
  password: '',
  port: 5432,
});

const getQuestions = (req, callback) => {
  pool.query('SELECT * FROM questions WHERE id=$1', [40351])
    .then((data) => {
      console.log('DATA:', data);
      callback(null, data);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      callback(error, null);
    });
};

const getAnswers = () => {

};

const postQuestions = () => {

};

const postAnswers = () => {

};

const putQuestionsHelpful = () => {

};

const putQuestionsReport = () => {

};

module.exports = {
  getQuestions,
  getAnswers,
  postQuestions,
  postAnswers,
  putQuestionsHelpful,
  putQuestionsReport,
};
