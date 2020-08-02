import bodyParser from "body-parser";
import { EventEmitter } from "events";

/** Creates a new avenor application.
 *
 * @returns {Function}
 * @api public
 */

export function createCore() {
  const instance = function (req, res, next) {
    instance.handle(req, res, next);
  };
}
