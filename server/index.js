const express = require('express');

const app = express();
const port = 3000;
const db = require('../database/index');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/qa/questions', (req, res) => {
  db.getQuestions(req, (error, data) => {
    if (error) {
      console.log('ERROR in server GET questions request ', error);
      res.json('unable to access database');
    } else {
      res.json(data);
    }
  });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  // db.getAnswers(req, (error, data) => {
  //   if (error) {
  //     console.log('ERROR in server GET answers request ', error);
  //     res.status(404).send('unable to access database');
  //   } else {
  // res.status(200).send(data);
  // res.json({ endpoint: 'list of answers for 1 question' });
  //   }
  // });
});

app.post('/qa/questions', (req, res) => {
  // db.postQuestions(req, (error, data) => {
  //   if (error) {
  //     console.log('ERROR in server POST questions request ', error);
  //     res.status(404).send('unable to post to database');
  //   } else {
  // res.status(200).send(data);
  //   res.json({ endpoint: 'post a question for 1 product' });
  //   }
  // });
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  // db.postAnswers(req, (error, data) => {
  //   if (error) {
  //     console.log('ERROR in server POST answers request ', error);
  //     res.status(404).send('unable to post to database');
  //   } else {
  // res.status(200).send(data);
  // res.json({ endpoint: 'post an answer for 1 question' });
  //   }
  // });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  // db.putQuestionsHelpful(req, (error, data) => {
  //   if (error) {
  //     console.log('ERROR in server put questions helpful request ', error);
  //     res.status(404).send('unable to access database');
  //   } else {
  // res.status(200).send(data);
  // res.json({ endpoint: 'mark question helpful' });
  //   }
  // });
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  // db.putQuestionsReport(req, (error, data) => {
  //   if (error) {
  //     console.log('ERROR in server put questions report request ', error);
  //     res.status(404).send('unable to access database');
  //   } else {
  // res.status(200).send(data);
  // res.json({ endpoint: 'report question' });
  //   }
  // });
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  // db.putAnswersHelpful(req, (error, data) => {
  //   if (error) {
  //     console.log('ERROR in server put answers helpful request ', error);
  //     res.status(404).send('unable to access database');
  //   } else {
  // res.status(200).send(data);
  // res.json({ endpoint: 'mark answer helpful' });
  //   }
  // });
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  // db.putAnswersReport(req, (error, data) => {
  //   if (error) {
  //     console.log('ERROR in server put answers report request ', error);
  //     res.status(404).send('unable to access database');
  //   } else {
  // res.status(200).send(data);
  // res.json({ endpoint: 'report answer' });
  //   }
  // });
});

app.listen(port, () => {
  console.log('listening at localhost ', port);
});
