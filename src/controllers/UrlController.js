const UrlService = require("../services/UrlService");
const urlService = new UrlService();

class UrlController {
  static async encode(req, res, next) {
    try {
      const { longUrl } = req.body;
      const shortUrl = urlService.encodeService(longUrl);
      res.status(200).json({ shortUrl });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UrlController;
