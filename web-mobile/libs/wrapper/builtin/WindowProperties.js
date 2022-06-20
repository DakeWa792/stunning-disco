"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ontouchend = exports.ontouchmove = exports.ontouchstart = exports.performance = exports.screen = exports.devicePixelRatio = exports.innerHeight = exports.innerWidth = void 0;

var _tt$getSystemInfoSync = tt.getSystemInfoSync(),
    screenWidth = _tt$getSystemInfoSync.screenWidth,
    screenHeight = _tt$getSystemInfoSync.screenHeight,
    devicePixelRatio = _tt$getSystemInfoSync.devicePixelRatio;

exports.devicePixelRatio = devicePixelRatio;
var innerWidth = screenWidth;
exports.innerWidth = innerWidth;
var innerHeight = screenHeight;
exports.innerHeight = innerHeight;
var screen = {
  width: screenWidth,
  height: screenHeight,
  availWidth: innerWidth,
  availHeight: innerHeight,
  availLeft: 0,
  availTop: 0
};
exports.screen = screen;
var performance = {
  now: Date.now
};
exports.performance = performance;
var ontouchstart = null;
exports.ontouchstart = ontouchstart;
var ontouchmove = null;
exports.ontouchmove = ontouchmove;
var ontouchend = null;
exports.ontouchend = ontouchend;