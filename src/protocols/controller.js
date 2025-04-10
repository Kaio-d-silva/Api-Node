/**
 * @typedef {Object} HttpRequest
 * @property {Object} body
 */

/**
 * @typedef {Object} HttpResponse
 * @property {Number} statusCode
 * @property {Object} body
 */

/**
 * @typedef {Object} Controller
 * @property {(httpRequest: HttpRequest) => Promise<HttpResponse} handle
 */

module.exports = {};
