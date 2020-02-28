import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  const body = {
    title: 'Hello, folks!',
    message: 'Still implementing',
  };
  res.send(body);
});

export { router };
