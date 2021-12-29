import Items from "../models/Item.js";
class SiteController {
  // [GET] / search
  register(req, res) {
    res.render("register");
  }
  // [GET] /
  home(req, res, next) {
    Items.find({})
      .then((item) => {
        item = item.map((index) => index.toObject());
        res.render("home", { item });
      })
      .catch(next);
  }
}

export default new SiteController();
