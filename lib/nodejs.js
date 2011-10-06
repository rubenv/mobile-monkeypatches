/* Some mobile clients (Android 2.2.x, iOS 4.x) are not capable of parsing ISO
 * 8601 date stamps using the Date constructor.
 *
 * Example:
 *      new Date("2011-10-05T10:23:40.158Z") -> Invalid Date
 *
 * This is a problem when combining Node.JS with Sencha touch, as the default
 * Date.toJSON implementation in V8 outputs ISO 8601. The line below switches
 * serialization to a more verbose, yet generally parseable "Wed Oct 05 2011
 * 12:28:33 GMT+0200 (CEST)".
 */
Date.prototype.toJSON = Date.prototype.toString;
