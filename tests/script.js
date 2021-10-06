import http from 'k6/http';
import { sleep } from 'k6';

// export const options = {
//   vus: 20,
//   duration: '30s',
// };

export default function () {
  http.get(`
  http://localhost:3002/qa/questions
  `);
  sleep(1);
}

// export default function () {
//   const id = Math.floor(Math.random() * 100);
//   http.get(`http://localhost:3002/qa/questions/${id}/answers`);
//   sleep(1);
// }

// export default function () {
//   http.post(`http://localhost:3002/qa/questions`);
//   sleep(1);
// }

// export default function () {
//   const id = Math.floor(Math.random() * 1000000);
//   http.post(`http://localhost:3002/qa/questions/${id}/answers`);
//   sleep(1);
// }

// export default function () {
//   const id = Math.floor(Math.random() * 100);
//   http.put(`http://localhost:3002/qa/questions/${id}/helpful`);
//   sleep(1);
// }

// export default function () {
//   const id = Math.floor(Math.random() * 100);
//   http.put(`http://localhost:3002/qa/questions/${id}/report`);
//   sleep(1);
// }

// export default function () {
//   const id = Math.floor(Math.random() * 100);
//   http.put(`http://localhost:3002/qa/questions/${id}/helpful`);
//   sleep(1);
// }

// export default function () {
//   const id = Math.floor(Math.random() * 100);
//   http.put(`http://localhost:3002/qa/questions/${id}/report`);
//   sleep(1);
// }
