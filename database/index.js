const { Pool } = require('pg');

const pool = new Pool({
  user: 'lenoraesquenazi',
  host: 'localhost',
  database: 'q_and_a',
  password: '',
  port: 5432,
});

const getQuestions = (req, callback) => {
  pool.query('(SELECT json_agg(results) FROM (SELECT * FROM questions WHERE product_id=$1) results)', [40351])
    .then((data) => {
      console.log('DATA:', data);
      callback(null, data.rows);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      callback(error, null);
    });
};

const getAnswers = (req, callback) => {
  pool.query('(SELECT json_agg(results) FROM(SELECT * FROM answers WHERE question_id=$1) results)', [28])
    .then((data) => {
      console.log('DATA:', data);
      callback(null, data);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      callback(error, null);
    });
};

const postQuestions = (req, callback) => {
  pool.query('(INSERT INTO questions VALUES ())', [])
    .then((data) => {
      console.log('DATA:', data);
      callback(null, data);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      callback(error, null);
    });
};

const postAnswers = (req, callback) => {

};

const putQuestionsHelpful = (req, callback) => {

};

const putQuestionsReport = (req, callback) => {

};

module.exports = {
  getQuestions,
  getAnswers,
  postQuestions,
  postAnswers,
  putQuestionsHelpful,
  putQuestionsReport,
};
