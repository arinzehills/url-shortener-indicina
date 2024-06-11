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
}

module.exports = UrlService;
