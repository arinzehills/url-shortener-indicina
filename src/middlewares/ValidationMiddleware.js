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
}

module.exports = ValidationMiddleware;
