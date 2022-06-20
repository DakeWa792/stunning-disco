"use strict";

if (cc && cc.LabelComponent) {
  // const gfx = cc.gfx;
  var Label = cc.LabelComponent;
  var isDevTool = __globalAdapter.isDevTool; // shared label canvas

  var _sharedLabelCanvas = document.createElement('canvas');

  var _sharedLabelCanvasCtx = _sharedLabelCanvas.getContext('2d');

  var canvasData = {
    canvas: _sharedLabelCanvas,
    context: _sharedLabelCanvasCtx
  };
  cc.game.on(cc.Game.EVENT_ENGINE_INITED, function () {
    Object.assign(Label._canvasPool, {
      get: function get() {
        return canvasData;
      },
      put: function put() {// do nothing
      }
    });
  }); // need to fix ttf font black border at the sdk verion lower than 2.0.0

  var sysInfo = tt.getSystemInfoSync();

  if (Number.parseInt(sysInfo.SDKVersion[0]) < 2) {
    var _originUpdateBlendFunc = Label.prototype._updateBlendFunc;
    var gfxBlendFactor = cc.gfx.BlendFactor;
    Object.assign(Label.prototype, {
      _updateBlendFunc: function _updateBlendFunc() {
        _originUpdateBlendFunc.call(this); // only fix when srcBlendFactor is SRC_ALPHA


        if (this.srcBlendFactor !== gfxBlendFactor.SRC_ALPHA || isDevTool || this.font instanceof cc.BitmapFont) {
          return;
        } // Premultiplied alpha on runtime when sdk verion is lower than 2.0.0


        this.srcBlendFactor = gfxBlendFactor.ONE;
      }
    });
  }
}