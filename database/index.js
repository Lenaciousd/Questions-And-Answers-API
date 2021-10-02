const { Pool } = require('pg');

const pool = new Pool({
  user: 'lenoraesquenazi',
  host: 'localhost',
  database: 'q_and_a',
  password: '',
  port: 5432,
});

const getQuestions = (req, callback) => {
  pool.query('(SELECT json_agg(results) AS results FROM (SELECT * FROM questions WHERE product_id=$1) results)', [40351])
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
  pool.query('(SELECT json_agg(results) AS results FROM(SELECT * FROM answers WHERE question_id=$1) results)', [28])
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
  const questionPost = ['Hate those. They suck.', 'Hat', 'hat700@example.com', 40351, 1605427915063];
  pool.query('INSERT INTO questions(body, asker_name, asker_email, product_id, date_written) VALUES ($1, $2, $3, $4, $5)', questionPost)
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
  const answerPost = ['Not a good idea.', 'Bob', 'Bobarino5000@example.com', 28, 1605427915063];
  pool.query('INSERT INTO answers(body, answerer_name, answerer_email, question_id, date_written) VALUES ($1, $2, $3, $4, $5)', answerPost)
    .then((data) => {
      console.log('DATA:', data);
      callback(null, data);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      callback(error, null);
    });
};

const putQuestionsHelpful = (req, callback) => {

};

const putQuestionsReport = (req, callback) => {

};

const putAnswersHelpful = (req, callback) => {

};

const putAnswersReport = (req, callback) => {

};

module.exports = {
  getQuestions,
  getAnswers,
  postQuestions,
  postAnswers,
  putQuestionsHelpful,
  putQuestionsReport,
  putAnswersHelpful,
  putAnswersReport,
};
