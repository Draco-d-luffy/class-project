class HomePageController {
  async displayHompage(req, res) {
    try {
      res.render("index");
    } catch (err) {
      res.render("<h1>Eroor</h1>");
    }
  }
  async displayAboutPage(req, res) {
    try {
      res.render("about");
    } catch (err) {
      res.render("<h1>Eroor</h1>");
    }
  }
  async displayServicePage(req, res) {
    try {
      res.render("service");
    } catch (err) {
      res.render("<h1>Eroor</h1>");
    }
  }
  async displayContactpage(req, res) {
    try {
      res.render("contact");
    } catch (err) {
      res.render("<h1>Eroor</h1>");
    }
  }
}

module.exports = new HomePageController();
