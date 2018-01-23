import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  return res.send('posts').end();
});

router.get('/comments', (req, res, next) => {
  return res.send('comments').end();
});

router.get('/comments/:id', (req, res, next) => {
  const commentId = req.params.id;
  return res.send(`${commentId}`).end();
});


export default router;