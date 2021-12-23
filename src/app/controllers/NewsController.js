class NewsController {

  // [GET] / login
  login(req, res) {
    res.render('login')
  }

  // [GET] / news/:slug
  show(req, res) {
    res.send('news detal!')
  }
}

export default new NewsController;
