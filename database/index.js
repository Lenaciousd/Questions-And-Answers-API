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
      console.log('DATA:', data.rows);
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
  pool.query('SELECT * FROM questions WHERE id=$1', [3518965])
    .then((results) => {
      const question = results.rows[0];
      const helpful = question.helpful || 0;
      return pool.query('UPDATE questions SET helpful = $1 + 1 WHERE id=$2', [helpful, question.id]);
    })
    .then((data) => {
      console.log('DATA:', data);
      callback(null, data);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      callback(error, null);
    });
};

const putQuestionsReport = (req, callback) => {
  pool.query('SELECT * FROM questions WHERE id=$1', [3518965])
    .then((results) => {
      const question = results.rows[0];
      const reported = (Number(question.reported) + 1).toString() || '1';
      return pool.query('UPDATE questions SET reported = $1 WHERE id=$2', [reported, question.id]);
    })
    .then((data) => {
      console.log('DATA:', data);
      callback(null, data);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      callback(error, null);
    });
};

const putAnswersHelpful = (req, callback) => {
  pool.query('SELECT * FROM answers WHERE id=$1', [6879308])
    .then((results) => {
      const answer = results.rows[0];
      const helpful = answer.helpfullness || 0;
      return pool.query('UPDATE answers SET helpfullness = $1 + 1 WHERE id=$2', [helpful, answer.id]);
    })
    .then((data) => {
      console.log('DATA:', data);
      callback(null, data);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      callback(error, null);
    });
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
