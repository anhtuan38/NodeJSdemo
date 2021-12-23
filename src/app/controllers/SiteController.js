import Item from "../models/Item.js";
class SiteController {

  // [GET] / search
  register(req, res) {
    res.render('register')
  }
  // [GET] /
  home(req, res, next) {
    Item.find({})
      .then(Items => {
        Items = Items.map(Item => Item.toObject())
        res.render('home', { Items })
      })
      .catch(next);
  }

}

export default new SiteController;
