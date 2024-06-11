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
  static async decode(req, res, next) {
    try {
      const { shortUrl } = req.body;
      const longUrl = urlService.decodeService(shortUrl);
      res.status(200).json({ longUrl });
    } catch (error) {
      next(error);
    }
  }
  static async getStatistic(req, res, next) {
    try {
      const { url_path } = req.params;

      if (!url_path) {
        return res.status(400).json({ message: "url_path is required" });
      }
      const stats = urlService.getStatisticService(url_path);
      res.status(200).json(stats);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UrlController;
