const validator = require("validator");

class ValidationMiddleware {
  static validateUrl(req, res, next) {
    const { longUrl } = req.body;

    if (!longUrl) {
      return res.status(400).json({ message: "URL to encode is required" });
    }
    if (!validator.isURL(longUrl)) {
      return res.status(400).json({ message: "Invalid URL" });
    }
    next();
  }
  static validateShortUrl(req, res, next) {
    const { shortUrl } = req.body;

    if (!shortUrl) {
      return res
        .status(400)
        .json({ message: "Short URL to decode is required" });
    }
    const id = shortUrl.split("/").pop();
    console.log("ID", id);
    if (!id || !validator.isURL(shortUrl)) {
      return res.status(400).json({ message: "Invalid URL" });
    }
    next();
  }
}

module.exports = ValidationMiddleware;
