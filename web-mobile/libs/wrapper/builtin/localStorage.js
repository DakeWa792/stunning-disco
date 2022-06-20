"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var localStorage = {
  get length() {
    var _tt$getStorageInfoSyn = tt.getStorageInfoSync(),
        keys = _tt$getStorageInfoSyn.keys;

    return keys.length;
  },

  key: function key(n) {
    var _tt$getStorageInfoSyn2 = tt.getStorageInfoSync(),
        keys = _tt$getStorageInfoSyn2.keys;

    return keys[n];
  },
  getItem: function getItem(key) {
    return tt.getStorageSync(key);
  },
  setItem: function setItem(key, value) {
    return tt.setStorageSync(key, value);
  },
  removeItem: function removeItem(key) {
    tt.removeStorageSync(key);
  },
  clear: function clear() {
    tt.clearStorageSync();
  }
};
var _default = localStorage;
exports["default"] = _default;
module.exports = exports.default;