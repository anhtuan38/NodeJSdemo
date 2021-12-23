import newsRouter from './news.js';
import siteRouter from './site.js';

function route(app) {

  app.use('/login', newsRouter);

  app.use('/register', (req, res, next) => {
    res.render('register')
  });

  app.use('/', siteRouter);

}

export default route;
