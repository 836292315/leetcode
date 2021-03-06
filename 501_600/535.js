/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var urls = {};
var encode = function (longUrl) {
    let uniqueKey = Date.now().toString(36);
    urls[uniqueKey] = longUrl;
    return "http://tinyurl.com/" + uniqueKey;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    return urls[shortUrl.split("com/")[1]];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */