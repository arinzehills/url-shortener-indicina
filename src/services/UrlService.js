const IdGenerator = require("../utils/IdGenerator");

class UrlService {
  constructor() {
    this.urls = new Map();
  }

  encodeService(longUrl) {
    const id = IdGenerator.generate();
    this.urls.set(id, { longUrl, visits: 0 });
    return `http://short.est/${id}`;
  }
  decodeService(shortUrl) {
    const id = shortUrl.split("/").pop();
    const urlData = this.urls.get(id);
    if (!urlData) {
      const error = new Error("URL not found");
      error.statusCode = 404;
      throw error;
    }
    urlData.visits += 1;
    return urlData.longUrl;
  }
}

module.exports = UrlService;
