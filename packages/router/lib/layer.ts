import pathRegexp from "path-to-regexp";

function Layer(path, options, fn) {
  if (!(this instanceof Layer)) {
    return new Layer(path, options, fn);
  }
}
