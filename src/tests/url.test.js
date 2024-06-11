describe("URL Shortener API", () => {
  it("should encode a URL", async () => {
    const res = await request(app)
      .post("/api/encode")
      .send({ longUrl: "https://indicina.co" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("shortUrl");
    expect(resDecode.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
  it("should decode a URL", async () => {});
  it("should return statistics for a URL", async () => {});
});
