import posts from './posts';

export default (app) => {
  app.use('/posts', posts);
};