"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/lappview.ts":
/*!*************************!*\
  !*** ./src/lappview.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppView = void 0;
var cubismmatrix44_1 = __webpack_require__(/*! @framework/math/cubismmatrix44 */ "../../../Framework/src/math/cubismmatrix44.ts");
var cubismviewmatrix_1 = __webpack_require__(/*! @framework/math/cubismviewmatrix */ "../../../Framework/src/math/cubismviewmatrix.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lapplive2dmanager_1 = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
var lappsprite_1 = __webpack_require__(/*! ./lappsprite */ "./src/lappsprite.ts");
var touchmanager_1 = __webpack_require__(/*! ./touchmanager */ "./src/touchmanager.ts");
var LAppView = (function () {
    function LAppView() {
        this.angleX = 0;
        this.angleY = 0;
        this.angleZ = 0;
        this.eyeLOpen = 0;
        this.eyeLSmile = 0;
        this.eyeROpen = 0;
        this.eyeRSmile = 0;
        this.eyeBallX = 0;
        this.eyeBallY = 0;
        this.eyeBallForm = 0;
        this.browLY = 0;
        this.browRY = 0;
        this.browLX = 0;
        this.browRX = 0;
        this.browLAngle = 0;
        this.browRAngle = 0;
        this.browLForm = 0;
        this.browRForm = 0;
        this.mouthForm = 0;
        this.mouthOpenY = 0;
        this.cheek = 0;
        this.bodyAngleX = 0;
        this.bodyAngleY = 0;
        this.bodyAngleZ = 0;
        this.breath = 0;
        this.armLA = 0;
        this.armRA = 0;
        this.armLB = 0;
        this.armRB = 0;
        this.handL = 0;
        this.handR = 0;
        this.hairFront = 0;
        this.hairSide = 0;
        this.hairBack = 0;
        this.hairFluffy = 0;
        this.shoulderY = 0;
        this.bustX = 0;
        this.bustY = 0;
        this.baseX = 0;
        this.baseY = 0;
        this._programId = null;
        this._back = null;
        this._gear = null;
        this._touchManager = new touchmanager_1.TouchManager();
        this._deviceToScreen = new cubismmatrix44_1.CubismMatrix44();
        this._viewMatrix = new cubismviewmatrix_1.CubismViewMatrix();
    }
    LAppView.prototype.initialize = function () {
        var width = lappdelegate_1.canvas.width, height = lappdelegate_1.canvas.height;
        var ratio = width / height;
        var left = -ratio;
        var right = ratio;
        var bottom = LAppDefine.ViewLogicalLeft;
        var top = LAppDefine.ViewLogicalRight;
        this._viewMatrix.setScreenRect(left, right, bottom, top);
        this._viewMatrix.scale(LAppDefine.ViewScale, LAppDefine.ViewScale);
        this._deviceToScreen.loadIdentity();
        if (width > height) {
            var screenW = Math.abs(right - left);
            this._deviceToScreen.scaleRelative(screenW / width, -screenW / width);
        }
        else {
            var screenH = Math.abs(top - bottom);
            this._deviceToScreen.scaleRelative(screenH / height, -screenH / height);
        }
        this._deviceToScreen.translateRelative(-width * 0.5, -height * 0.5);
        this._viewMatrix.setMaxScale(LAppDefine.ViewMaxScale);
        this._viewMatrix.setMinScale(LAppDefine.ViewMinScale);
        this._viewMatrix.setMaxScreenRect(LAppDefine.ViewLogicalMaxLeft, LAppDefine.ViewLogicalMaxRight, LAppDefine.ViewLogicalMaxBottom, LAppDefine.ViewLogicalMaxTop);
    };
    LAppView.prototype.release = function () {
        this._viewMatrix = null;
        this._touchManager = null;
        this._deviceToScreen = null;
        this._gear.release();
        this._gear = null;
        this._back.release();
        this._back = null;
        lappdelegate_1.gl.deleteProgram(this._programId);
        this._programId = null;
    };
    LAppView.prototype.render = function () {
        lappdelegate_1.gl.useProgram(this._programId);
        if (this._back) {
            this._back.render(this._programId);
        }
        if (this._gear) {
            this._gear.render(this._programId);
        }
        lappdelegate_1.gl.flush();
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        live2DManager.setViewMatrix(this._viewMatrix);
        live2DManager.angleX = this.angleX;
        live2DManager.angleY = this.angleY;
        live2DManager.angleZ = this.angleZ;
        live2DManager.eyeLOpen = this.eyeLOpen;
        live2DManager.eyeLSmile = this.eyeLSmile;
        live2DManager.eyeROpen = this.eyeROpen;
        live2DManager.eyeRSmile = this.eyeRSmile;
        live2DManager.eyeBallX = this.eyeBallX;
        live2DManager.eyeBallY = this.eyeBallY;
        live2DManager.eyeBallForm = this.eyeBallForm;
        live2DManager.browLY = this.browLY;
        live2DManager.browRY = this.browRY;
        live2DManager.browLX = this.browLX;
        live2DManager.browRX = this.browRX;
        live2DManager.browLAngle = this.browLAngle;
        live2DManager.browRAngle = this.browRAngle;
        live2DManager.browLForm = this.browLForm;
        live2DManager.browRForm = this.browRForm;
        live2DManager.mouthForm = this.mouthForm;
        live2DManager.mouthOpenY = this.mouthOpenY;
        live2DManager.cheek = this.cheek;
        live2DManager.bodyAngleX = this.bodyAngleX;
        live2DManager.bodyAngleY = this.bodyAngleY;
        live2DManager.bodyAngleZ = this.bodyAngleZ;
        live2DManager.breath = this.breath;
        live2DManager.armLA = this.armLA;
        live2DManager.armRA = this.armRA;
        live2DManager.armLB = this.armLB;
        live2DManager.armRB = this.armRB;
        live2DManager.handL = this.handL;
        live2DManager.handR = this.handR;
        live2DManager.hairFront = this.hairFront;
        live2DManager.hairSide = this.hairSide;
        live2DManager.hairBack = this.hairBack;
        live2DManager.hairFluffy = this.hairFluffy;
        live2DManager.shoulderY = this.shoulderY;
        live2DManager.bustX = this.bustX;
        live2DManager.bustY = this.bustY;
        live2DManager.baseX = this.baseX;
        live2DManager.baseY = this.baseY;
    };
    LAppView.prototype.initializeSprite = function () {
        var _this = this;
        var width = lappdelegate_1.canvas.width;
        var height = lappdelegate_1.canvas.height;
        var textureManager = lappdelegate_1.LAppDelegate.getInstance().getTextureManager();
        var resourcesPath = LAppDefine.ResourcesPath;
        var imageName = '';
        imageName = LAppDefine.BackImageName;
        var initBackGroundTexture = function (textureInfo) {
            var x = width * 0.5;
            var y = height * 0.5;
            var fwidth = textureInfo.width * 2.0;
            var fheight = height * 0.95;
            _this._back = new lappsprite_1.LAppSprite(x, y, fwidth, fheight, textureInfo.id);
        };
        textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initBackGroundTexture);
        imageName = LAppDefine.GearImageName;
        var initGearTexture = function (textureInfo) {
            var x = width - textureInfo.width * 0.5;
            var y = height - textureInfo.height * 0.5;
            var fwidth = textureInfo.width;
            var fheight = textureInfo.height;
            _this._gear = new lappsprite_1.LAppSprite(x, y, fwidth, fheight, textureInfo.id);
        };
        textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initGearTexture);
        if (this._programId == null) {
            this._programId = lappdelegate_1.LAppDelegate.getInstance().createShader();
        }
    };
    LAppView.prototype.onTouchesBegan = function (pointX, pointY) {
        this._touchManager.touchesBegan(pointX, pointY);
    };
    LAppView.prototype.onTouchesMoved = function (pointX, pointY) {
        var viewX = this.transformViewX(this._touchManager.getX());
        var viewY = this.transformViewY(this._touchManager.getY());
        this._touchManager.touchesMoved(pointX, pointY);
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        live2DManager.onDrag(viewX, viewY);
    };
    LAppView.prototype.onTouchesEnded = function (pointX, pointY) {
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        live2DManager.onDrag(0.0, 0.0);
        {
            var x = this._deviceToScreen.transformX(this._touchManager.getX());
            var y = this._deviceToScreen.transformY(this._touchManager.getY());
            if (LAppDefine.DebugTouchLogEnable) {
                lapppal_1.LAppPal.printMessage("[APP]touchesEnded x: ".concat(x, " y: ").concat(y));
            }
            live2DManager.onTap(x, y);
            if (this._gear.isHit(pointX, pointY)) {
                live2DManager.nextScene();
            }
        }
    };
    LAppView.prototype.transformViewX = function (deviceX) {
        var screenX = this._deviceToScreen.transformX(deviceX);
        return this._viewMatrix.invertTransformX(screenX);
    };
    LAppView.prototype.transformViewY = function (deviceY) {
        var screenY = this._deviceToScreen.transformY(deviceY);
        return this._viewMatrix.invertTransformY(screenY);
    };
    LAppView.prototype.transformScreenX = function (deviceX) {
        return this._deviceToScreen.transformX(deviceX);
    };
    LAppView.prototype.transformScreenY = function (deviceY) {
        return this._deviceToScreen.transformY(deviceY);
    };
    return LAppView;
}());
exports.LAppView = LAppView;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "51104e3e41c434618f4c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jY2M3MWMwMmNhNDI1ZTI3N2JiNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0Esa0lBQWdFO0FBQ2hFLHdJQUFvRTtBQUVwRSw4RkFBMkM7QUFDM0Msd0ZBQTBEO0FBQzFELHVHQUF3RDtBQUN4RCx5RUFBb0M7QUFDcEMsa0ZBQTBDO0FBRTFDLHdGQUE4QztBQUs5QztJQUlFO1FBdVNPLFdBQU0sR0FBVSxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFVLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQVUsQ0FBQyxDQUFDO1FBQ2xCLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFDcEIsY0FBUyxHQUFVLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBQ3BCLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFVLENBQUMsQ0FBQztRQUNwQixhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFXLEdBQVEsQ0FBQyxDQUFDO1FBQ3JCLFdBQU0sR0FBUSxDQUFDLENBQUM7UUFDaEIsV0FBTSxHQUFRLENBQUMsQ0FBQztRQUNoQixXQUFNLEdBQVEsQ0FBQyxDQUFDO1FBQ2hCLFdBQU0sR0FBUSxDQUFDLENBQUM7UUFDaEIsZUFBVSxHQUFRLENBQUMsQ0FBQztRQUNwQixlQUFVLEdBQVEsQ0FBQyxDQUFDO1FBQ3BCLGNBQVMsR0FBUSxDQUFDLENBQUM7UUFDbkIsY0FBUyxHQUFRLENBQUMsQ0FBQztRQUVuQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsVUFBSyxHQUFRLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBVSxDQUFDLENBQUM7UUFDdEIsZUFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixlQUFVLEdBQVUsQ0FBQyxDQUFDO1FBQ3RCLFdBQU0sR0FBUSxDQUFDLENBQUM7UUFDaEIsVUFBSyxHQUFRLENBQUMsQ0FBQztR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Q0FBQztJQU9NLG1DQUFnQixHQUF2QixVQUF3QixPQUFlO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQXNESCxlQUFDO0FBQUQsQ0FBQztBQXJWWSw0QkFBUTs7Ozs7Ozs7O1VDckJyQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGFwcHZpZXcudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBDdWJpc21NYXRyaXg0NCB9IGZyb20gJ0BmcmFtZXdvcmsvbWF0aC9jdWJpc21tYXRyaXg0NCc7XG5pbXBvcnQgeyBDdWJpc21WaWV3TWF0cml4IH0gZnJvbSAnQGZyYW1ld29yay9tYXRoL2N1YmlzbXZpZXdtYXRyaXgnO1xuXG5pbXBvcnQgKiBhcyBMQXBwRGVmaW5lIGZyb20gJy4vbGFwcGRlZmluZSc7XG5pbXBvcnQgeyBjYW52YXMsIGdsLCBMQXBwRGVsZWdhdGUgfSBmcm9tICcuL2xhcHBkZWxlZ2F0ZSc7XG5pbXBvcnQgeyBMQXBwTGl2ZTJETWFuYWdlciB9IGZyb20gJy4vbGFwcGxpdmUyZG1hbmFnZXInO1xuaW1wb3J0IHsgTEFwcFBhbCB9IGZyb20gJy4vbGFwcHBhbCc7XG5pbXBvcnQgeyBMQXBwU3ByaXRlIH0gZnJvbSAnLi9sYXBwc3ByaXRlJztcbmltcG9ydCB7IFRleHR1cmVJbmZvIH0gZnJvbSAnLi9sYXBwdGV4dHVyZW1hbmFnZXInO1xuaW1wb3J0IHsgVG91Y2hNYW5hZ2VyIH0gZnJvbSAnLi90b3VjaG1hbmFnZXInO1xuXG4vKipcbiAqIOaPj+eUu+OCr+ODqeOCueOAglxuICovXG5leHBvcnQgY2xhc3MgTEFwcFZpZXcge1xuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9wcm9ncmFtSWQgPSBudWxsO1xuICAgIHRoaXMuX2JhY2sgPSBudWxsO1xuICAgIHRoaXMuX2dlYXIgPSBudWxsO1xuXG4gICAgLy8g44K/44OD44OB6Zai5L+C44Gu44Kk44OZ44Oz44OI566h55CGXG4gICAgdGhpcy5fdG91Y2hNYW5hZ2VyID0gbmV3IFRvdWNoTWFuYWdlcigpO1xuXG4gICAgLy8g44OH44OQ44Kk44K55bqn5qiZ44GL44KJ44K544Kv44Oq44O844Oz5bqn5qiZ44Gr5aSJ5o+b44GZ44KL44Gf44KB44GuXG4gICAgdGhpcy5fZGV2aWNlVG9TY3JlZW4gPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcblxuICAgIC8vIOeUu+mdouOBruihqOekuuOBruaLoeWkp+e4ruWwj+OChOenu+WLleOBruWkieaPm+OCkuihjOOBhuihjOWIl1xuICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBuZXcgQ3ViaXNtVmlld01hdHJpeCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMluOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXM7XG5cbiAgICBjb25zdCByYXRpbzogbnVtYmVyID0gd2lkdGggLyBoZWlnaHQ7XG4gICAgY29uc3QgbGVmdDogbnVtYmVyID0gLXJhdGlvO1xuICAgIGNvbnN0IHJpZ2h0OiBudW1iZXIgPSByYXRpbztcbiAgICBjb25zdCBib3R0b206IG51bWJlciA9IExBcHBEZWZpbmUuVmlld0xvZ2ljYWxMZWZ0O1xuICAgIGNvbnN0IHRvcDogbnVtYmVyID0gTEFwcERlZmluZS5WaWV3TG9naWNhbFJpZ2h0O1xuXG4gICAgdGhpcy5fdmlld01hdHJpeC5zZXRTY3JlZW5SZWN0KGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCk7IC8vIOODh+ODkOOCpOOCueOBq+WvvuW/nOOBmeOCi+eUu+mdouOBruevhOWbsuOAgiBY44Gu5bem56uv44CBWOOBruWPs+err+OAgVnjga7kuIvnq6/jgIFZ44Gu5LiK56uvXG4gICAgdGhpcy5fdmlld01hdHJpeC5zY2FsZShMQXBwRGVmaW5lLlZpZXdTY2FsZSwgTEFwcERlZmluZS5WaWV3U2NhbGUpO1xuXG4gICAgdGhpcy5fZGV2aWNlVG9TY3JlZW4ubG9hZElkZW50aXR5KCk7XG4gICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgICBjb25zdCBzY3JlZW5XOiBudW1iZXIgPSBNYXRoLmFicyhyaWdodCAtIGxlZnQpO1xuICAgICAgdGhpcy5fZGV2aWNlVG9TY3JlZW4uc2NhbGVSZWxhdGl2ZShzY3JlZW5XIC8gd2lkdGgsIC1zY3JlZW5XIC8gd2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY3JlZW5IOiBudW1iZXIgPSBNYXRoLmFicyh0b3AgLSBib3R0b20pO1xuICAgICAgdGhpcy5fZGV2aWNlVG9TY3JlZW4uc2NhbGVSZWxhdGl2ZShzY3JlZW5IIC8gaGVpZ2h0LCAtc2NyZWVuSCAvIGhlaWdodCk7XG4gICAgfVxuICAgIHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zbGF0ZVJlbGF0aXZlKC13aWR0aCAqIDAuNSwgLWhlaWdodCAqIDAuNSk7XG5cbiAgICAvLyDooajnpLrnr4Tlm7Ljga7oqK3lrppcbiAgICB0aGlzLl92aWV3TWF0cml4LnNldE1heFNjYWxlKExBcHBEZWZpbmUuVmlld01heFNjYWxlKTsgLy8g6ZmQ55WM5ouh5by1546HXG4gICAgdGhpcy5fdmlld01hdHJpeC5zZXRNaW5TY2FsZShMQXBwRGVmaW5lLlZpZXdNaW5TY2FsZSk7IC8vIOmZkOeVjOe4ruWwj+eOh1xuXG4gICAgLy8g6KGo56S644Gn44GN44KL5pyA5aSn56+E5ZuyXG4gICAgdGhpcy5fdmlld01hdHJpeC5zZXRNYXhTY3JlZW5SZWN0KFxuICAgICAgTEFwcERlZmluZS5WaWV3TG9naWNhbE1heExlZnQsXG4gICAgICBMQXBwRGVmaW5lLlZpZXdMb2dpY2FsTWF4UmlnaHQsXG4gICAgICBMQXBwRGVmaW5lLlZpZXdMb2dpY2FsTWF4Qm90dG9tLFxuICAgICAgTEFwcERlZmluZS5WaWV3TG9naWNhbE1heFRvcFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICog6Kej5pS+44GZ44KLXG4gICAqL1xuICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkIHtcbiAgICB0aGlzLl92aWV3TWF0cml4ID0gbnVsbDtcbiAgICB0aGlzLl90b3VjaE1hbmFnZXIgPSBudWxsO1xuICAgIHRoaXMuX2RldmljZVRvU2NyZWVuID0gbnVsbDtcblxuICAgIHRoaXMuX2dlYXIucmVsZWFzZSgpO1xuICAgIHRoaXMuX2dlYXIgPSBudWxsO1xuXG4gICAgdGhpcy5fYmFjay5yZWxlYXNlKCk7XG4gICAgdGhpcy5fYmFjayA9IG51bGw7XG5cbiAgICBnbC5kZWxldGVQcm9ncmFtKHRoaXMuX3Byb2dyYW1JZCk7XG4gICAgdGhpcy5fcHJvZ3JhbUlkID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmj4/nlLvjgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgZ2wudXNlUHJvZ3JhbSh0aGlzLl9wcm9ncmFtSWQpO1xuXG4gICAgaWYgKHRoaXMuX2JhY2spIHtcbiAgICAgIHRoaXMuX2JhY2sucmVuZGVyKHRoaXMuX3Byb2dyYW1JZCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9nZWFyKSB7XG4gICAgICB0aGlzLl9nZWFyLnJlbmRlcih0aGlzLl9wcm9ncmFtSWQpO1xuICAgIH1cblxuICAgIGdsLmZsdXNoKCk7XG5cbiAgICBjb25zdCBsaXZlMkRNYW5hZ2VyOiBMQXBwTGl2ZTJETWFuYWdlciA9IExBcHBMaXZlMkRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5cbiAgICBsaXZlMkRNYW5hZ2VyLnNldFZpZXdNYXRyaXgodGhpcy5fdmlld01hdHJpeCk7XG5cbiAgICAvL2xpdmUyRE1hbmFnZXIub25VcGRhdGUoKTtcblxuICAgIC8v57aB5a6a5Y+D5pW4XG4gICAgbGl2ZTJETWFuYWdlci5hbmdsZVggPSB0aGlzLmFuZ2xlWDtcbiAgICBsaXZlMkRNYW5hZ2VyLmFuZ2xlWSA9IHRoaXMuYW5nbGVZO1xuICAgIGxpdmUyRE1hbmFnZXIuYW5nbGVaID0gdGhpcy5hbmdsZVo7XG4gICAgbGl2ZTJETWFuYWdlci5leWVMT3BlbiA9IHRoaXMuZXllTE9wZW47XG4gICAgbGl2ZTJETWFuYWdlci5leWVMU21pbGUgPSB0aGlzLmV5ZUxTbWlsZTtcbiAgICBsaXZlMkRNYW5hZ2VyLmV5ZVJPcGVuID0gdGhpcy5leWVST3BlbjtcbiAgICBsaXZlMkRNYW5hZ2VyLmV5ZVJTbWlsZSA9IHRoaXMuZXllUlNtaWxlO1xuICAgIGxpdmUyRE1hbmFnZXIuZXllQmFsbFggPSB0aGlzLmV5ZUJhbGxYO1xuICAgIGxpdmUyRE1hbmFnZXIuZXllQmFsbFkgPSB0aGlzLmV5ZUJhbGxZO1xuICAgIGxpdmUyRE1hbmFnZXIuZXllQmFsbEZvcm0gPSB0aGlzLmV5ZUJhbGxGb3JtO1xuICAgIGxpdmUyRE1hbmFnZXIuYnJvd0xZID0gdGhpcy5icm93TFk7XG4gICAgbGl2ZTJETWFuYWdlci5icm93UlkgPSB0aGlzLmJyb3dSWTtcbiAgICBsaXZlMkRNYW5hZ2VyLmJyb3dMWCA9IHRoaXMuYnJvd0xYO1xuICAgIGxpdmUyRE1hbmFnZXIuYnJvd1JYID0gdGhpcy5icm93Ulg7XG4gICAgbGl2ZTJETWFuYWdlci5icm93TEFuZ2xlID0gdGhpcy5icm93TEFuZ2xlO1xuICAgIGxpdmUyRE1hbmFnZXIuYnJvd1JBbmdsZSA9IHRoaXMuYnJvd1JBbmdsZTtcbiAgICBsaXZlMkRNYW5hZ2VyLmJyb3dMRm9ybSA9IHRoaXMuYnJvd0xGb3JtO1xuICAgIGxpdmUyRE1hbmFnZXIuYnJvd1JGb3JtID0gdGhpcy5icm93UkZvcm07XG4gICAgLy9tb3V0aCBmb3JtXG4gICAgbGl2ZTJETWFuYWdlci5tb3V0aEZvcm0gPSB0aGlzLm1vdXRoRm9ybTtcbiAgICAvL21vdXRoIG9wZW5ZXG4gICAgbGl2ZTJETWFuYWdlci5tb3V0aE9wZW5ZID0gdGhpcy5tb3V0aE9wZW5ZO1xuICAgIGxpdmUyRE1hbmFnZXIuY2hlZWsgPSB0aGlzLmNoZWVrO1xuICAgIGxpdmUyRE1hbmFnZXIuYm9keUFuZ2xlWCA9IHRoaXMuYm9keUFuZ2xlWDtcbiAgICBsaXZlMkRNYW5hZ2VyLmJvZHlBbmdsZVkgPSB0aGlzLmJvZHlBbmdsZVk7XG4gICAgbGl2ZTJETWFuYWdlci5ib2R5QW5nbGVaID0gdGhpcy5ib2R5QW5nbGVaO1xuICAgIGxpdmUyRE1hbmFnZXIuYnJlYXRoID0gdGhpcy5icmVhdGg7XG4gICAgbGl2ZTJETWFuYWdlci5hcm1MQSA9IHRoaXMuYXJtTEE7XG4gICAgbGl2ZTJETWFuYWdlci5hcm1SQSA9IHRoaXMuYXJtUkE7XG4gICAgbGl2ZTJETWFuYWdlci5hcm1MQiA9IHRoaXMuYXJtTEI7XG4gICAgbGl2ZTJETWFuYWdlci5hcm1SQiA9IHRoaXMuYXJtUkI7XG4gICAgbGl2ZTJETWFuYWdlci5oYW5kTCA9IHRoaXMuaGFuZEw7XG4gICAgbGl2ZTJETWFuYWdlci5oYW5kUiA9IHRoaXMuaGFuZFI7XG4gICAgbGl2ZTJETWFuYWdlci5oYWlyRnJvbnQgPSB0aGlzLmhhaXJGcm9udDtcbiAgICBsaXZlMkRNYW5hZ2VyLmhhaXJTaWRlID0gdGhpcy5oYWlyU2lkZTtcbiAgICBsaXZlMkRNYW5hZ2VyLmhhaXJCYWNrID0gdGhpcy5oYWlyQmFjaztcbiAgICBsaXZlMkRNYW5hZ2VyLmhhaXJGbHVmZnkgPSB0aGlzLmhhaXJGbHVmZnk7XG4gICAgbGl2ZTJETWFuYWdlci5zaG91bGRlclkgPSB0aGlzLnNob3VsZGVyWTtcbiAgICBsaXZlMkRNYW5hZ2VyLmJ1c3RYID0gdGhpcy5idXN0WDtcbiAgICBsaXZlMkRNYW5hZ2VyLmJ1c3RZID0gdGhpcy5idXN0WTtcbiAgICBsaXZlMkRNYW5hZ2VyLmJhc2VYID0gdGhpcy5iYXNlWDtcbiAgICBsaXZlMkRNYW5hZ2VyLmJhc2VZID0gdGhpcy5iYXNlWTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnlLvlg4/jga7liJ3mnJ/ljJbjgpLooYzjgYbjgIJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplU3ByaXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHdpZHRoOiBudW1iZXIgPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0OiBudW1iZXIgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgY29uc3QgdGV4dHVyZU1hbmFnZXIgPSBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5nZXRUZXh0dXJlTWFuYWdlcigpO1xuICAgIGNvbnN0IHJlc291cmNlc1BhdGggPSBMQXBwRGVmaW5lLlJlc291cmNlc1BhdGg7XG5cbiAgICBsZXQgaW1hZ2VOYW1lID0gJyc7XG5cbiAgICAvLyDog4zmma/nlLvlg4/liJ3mnJ/ljJZcbiAgICBpbWFnZU5hbWUgPSBMQXBwRGVmaW5lLkJhY2tJbWFnZU5hbWU7XG5cbiAgICAvLyDpnZ7lkIzmnJ/jgarjga7jgafjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDjgpLkvZzmiJBcbiAgICBjb25zdCBpbml0QmFja0dyb3VuZFRleHR1cmUgPSAodGV4dHVyZUluZm86IFRleHR1cmVJbmZvKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCB4OiBudW1iZXIgPSB3aWR0aCAqIDAuNTtcbiAgICAgIGNvbnN0IHk6IG51bWJlciA9IGhlaWdodCAqIDAuNTtcblxuICAgICAgY29uc3QgZndpZHRoID0gdGV4dHVyZUluZm8ud2lkdGggKiAyLjA7XG4gICAgICBjb25zdCBmaGVpZ2h0ID0gaGVpZ2h0ICogMC45NTtcbiAgICAgIHRoaXMuX2JhY2sgPSBuZXcgTEFwcFNwcml0ZSh4LCB5LCBmd2lkdGgsIGZoZWlnaHQsIHRleHR1cmVJbmZvLmlkKTtcbiAgICB9O1xuXG4gICAgdGV4dHVyZU1hbmFnZXIuY3JlYXRlVGV4dHVyZUZyb21QbmdGaWxlKFxuICAgICAgcmVzb3VyY2VzUGF0aCArIGltYWdlTmFtZSxcbiAgICAgIGZhbHNlLFxuICAgICAgaW5pdEJhY2tHcm91bmRUZXh0dXJlXG4gICAgKTtcblxuICAgIC8vIOatr+i7iueUu+WDj+WIneacn+WMllxuICAgIGltYWdlTmFtZSA9IExBcHBEZWZpbmUuR2VhckltYWdlTmFtZTtcbiAgICBjb25zdCBpbml0R2VhclRleHR1cmUgPSAodGV4dHVyZUluZm86IFRleHR1cmVJbmZvKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCB4ID0gd2lkdGggLSB0ZXh0dXJlSW5mby53aWR0aCAqIDAuNTtcbiAgICAgIGNvbnN0IHkgPSBoZWlnaHQgLSB0ZXh0dXJlSW5mby5oZWlnaHQgKiAwLjU7XG4gICAgICBjb25zdCBmd2lkdGggPSB0ZXh0dXJlSW5mby53aWR0aDtcbiAgICAgIGNvbnN0IGZoZWlnaHQgPSB0ZXh0dXJlSW5mby5oZWlnaHQ7XG4gICAgICB0aGlzLl9nZWFyID0gbmV3IExBcHBTcHJpdGUoeCwgeSwgZndpZHRoLCBmaGVpZ2h0LCB0ZXh0dXJlSW5mby5pZCk7XG4gICAgfTtcblxuICAgIHRleHR1cmVNYW5hZ2VyLmNyZWF0ZVRleHR1cmVGcm9tUG5nRmlsZShcbiAgICAgIHJlc291cmNlc1BhdGggKyBpbWFnZU5hbWUsXG4gICAgICBmYWxzZSxcbiAgICAgIGluaXRHZWFyVGV4dHVyZVxuICAgICk7XG5cbiAgICAvLyDjgrfjgqfjg7zjg4Djg7zjgpLkvZzmiJBcbiAgICBpZiAodGhpcy5fcHJvZ3JhbUlkID09IG51bGwpIHtcbiAgICAgIHRoaXMuX3Byb2dyYW1JZCA9IExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLmNyZWF0ZVNoYWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgr/jg4Pjg4HjgZXjgozjgZ/mmYLjgavlkbzjgbDjgozjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIHBvaW50WCDjgrnjgq/jg6rjg7zjg7NY5bqn5qiZXG4gICAqIEBwYXJhbSBwb2ludFkg44K544Kv44Oq44O844OzWeW6p+aomVxuICAgKi9cbiAgcHVibGljIG9uVG91Y2hlc0JlZ2FuKHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3RvdWNoTWFuYWdlci50b3VjaGVzQmVnYW4ocG9pbnRYLCBwb2ludFkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODg+ODgeOBl+OBpuOBhOOCi+OBqOOBjeOBq+ODneOCpOODs+OCv+OBjOWLleOBhOOBn+OCieWRvOOBsOOCjOOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gcG9pbnRYIOOCueOCr+ODquODvOODs1jluqfmqJlcbiAgICogQHBhcmFtIHBvaW50WSDjgrnjgq/jg6rjg7zjg7NZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgb25Ub3VjaGVzTW92ZWQocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgdmlld1g6IG51bWJlciA9IHRoaXMudHJhbnNmb3JtVmlld1godGhpcy5fdG91Y2hNYW5hZ2VyLmdldFgoKSk7XG4gICAgY29uc3Qgdmlld1k6IG51bWJlciA9IHRoaXMudHJhbnNmb3JtVmlld1kodGhpcy5fdG91Y2hNYW5hZ2VyLmdldFkoKSk7XG5cbiAgICB0aGlzLl90b3VjaE1hbmFnZXIudG91Y2hlc01vdmVkKHBvaW50WCwgcG9pbnRZKTtcblxuICAgIGNvbnN0IGxpdmUyRE1hbmFnZXI6IExBcHBMaXZlMkRNYW5hZ2VyID0gTEFwcExpdmUyRE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICBsaXZlMkRNYW5hZ2VyLm9uRHJhZyh2aWV3WCwgdmlld1kpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODg+ODgeOBjOe1guS6huOBl+OBn+OCieWRvOOBsOOCjOOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gcG9pbnRYIOOCueOCr+ODquODvOODs1jluqfmqJlcbiAgICogQHBhcmFtIHBvaW50WSDjgrnjgq/jg6rjg7zjg7NZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgb25Ub3VjaGVzRW5kZWQocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8g44K/44OD44OB57WC5LqGXG4gICAgY29uc3QgbGl2ZTJETWFuYWdlcjogTEFwcExpdmUyRE1hbmFnZXIgPSBMQXBwTGl2ZTJETWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIGxpdmUyRE1hbmFnZXIub25EcmFnKDAuMCwgMC4wKTtcblxuICAgIHtcbiAgICAgIC8vIOOCt+ODs+OCsOODq+OCv+ODg+ODl1xuICAgICAgY29uc3QgeDogbnVtYmVyID0gdGhpcy5fZGV2aWNlVG9TY3JlZW4udHJhbnNmb3JtWChcbiAgICAgICAgdGhpcy5fdG91Y2hNYW5hZ2VyLmdldFgoKVxuICAgICAgKTsgLy8g6KuW55CG5bqn5qiZ5aSJ5o+b44GX44Gf5bqn5qiZ44KS5Y+W5b6X44CCXG4gICAgICBjb25zdCB5OiBudW1iZXIgPSB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1ZKFxuICAgICAgICB0aGlzLl90b3VjaE1hbmFnZXIuZ2V0WSgpXG4gICAgICApOyAvLyDoq5bnkIbluqfmqJnlpInljJbjgZfjgZ/luqfmqJnjgpLlj5blvpfjgIJcblxuICAgICAgaWYgKExBcHBEZWZpbmUuRGVidWdUb3VjaExvZ0VuYWJsZSkge1xuICAgICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShgW0FQUF10b3VjaGVzRW5kZWQgeDogJHt4fSB5OiAke3l9YCk7XG4gICAgICB9XG4gICAgICBsaXZlMkRNYW5hZ2VyLm9uVGFwKHgsIHkpO1xuXG4gICAgICAvLyDmra/ou4rjgavjgr/jg4Pjg5fjgZfjgZ/jgYtcbiAgICAgIGlmICh0aGlzLl9nZWFyLmlzSGl0KHBvaW50WCwgcG9pbnRZKSkge1xuICAgICAgICBsaXZlMkRNYW5hZ2VyLm5leHRTY2VuZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBY5bqn5qiZ44KSVmlld+W6p+aomeOBq+WkieaPm+OBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gZGV2aWNlWCDjg4fjg5DjgqTjgrlY5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtVmlld1goZGV2aWNlWDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY3JlZW5YOiBudW1iZXIgPSB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1YKGRldmljZVgpOyAvLyDoq5bnkIbluqfmqJnlpInmj5vjgZfjgZ/luqfmqJnjgpLlj5blvpfjgIJcbiAgICByZXR1cm4gdGhpcy5fdmlld01hdHJpeC5pbnZlcnRUcmFuc2Zvcm1YKHNjcmVlblgpOyAvLyDmi6HlpKfjgIHnuK7lsI/jgIHnp7vli5Xlvozjga7lgKTjgIJcbiAgfVxuXG4gIC8qKlxuICAgKiBZ5bqn5qiZ44KSVmlld+W6p+aomeOBq+WkieaPm+OBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gZGV2aWNlWSDjg4fjg5DjgqTjgrlZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtVmlld1koZGV2aWNlWTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY3JlZW5ZOiBudW1iZXIgPSB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1ZKGRldmljZVkpOyAvLyDoq5bnkIbluqfmqJnlpInmj5vjgZfjgZ/luqfmqJnjgpLlj5blvpfjgIJcbiAgICByZXR1cm4gdGhpcy5fdmlld01hdHJpeC5pbnZlcnRUcmFuc2Zvcm1ZKHNjcmVlblkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFjluqfmqJnjgpJTY3JlZW7luqfmqJnjgavlpInmj5vjgZnjgovjgIJcbiAgICogQHBhcmFtIGRldmljZVgg44OH44OQ44Kk44K5WOW6p+aomVxuICAgKi9cbiAgcHVibGljIHRyYW5zZm9ybVNjcmVlblgoZGV2aWNlWDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlVG9TY3JlZW4udHJhbnNmb3JtWChkZXZpY2VYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBZ5bqn5qiZ44KSU2NyZWVu5bqn5qiZ44Gr5aSJ5o+b44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBkZXZpY2VZIOODh+ODkOOCpOOCuVnluqfmqJlcbiAgICovXG4gIHB1YmxpYyB0cmFuc2Zvcm1TY3JlZW5ZKGRldmljZVk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zZm9ybVkoZGV2aWNlWSk7XG4gIH1cblxuICBfdG91Y2hNYW5hZ2VyOiBUb3VjaE1hbmFnZXI7IC8vIOOCv+ODg+ODgeODnuODjeODvOOCuOODo+ODvFxuICBfZGV2aWNlVG9TY3JlZW46IEN1YmlzbU1hdHJpeDQ0OyAvLyDjg4fjg5DjgqTjgrnjgYvjgonjgrnjgq/jg6rjg7zjg7Pjgbjjga7ooYzliJdcbiAgX3ZpZXdNYXRyaXg6IEN1YmlzbVZpZXdNYXRyaXg7IC8vIHZpZXdNYXRyaXhcbiAgX3Byb2dyYW1JZDogV2ViR0xQcm9ncmFtOyAvLyDjgrfjgqfjg7zjg4BJRFxuICBfYmFjazogTEFwcFNwcml0ZTsgLy8g6IOM5pmv55S75YOPXG4gIF9nZWFyOiBMQXBwU3ByaXRlOyAvLyDjgq7jgqLnlLvlg49cbiAgX2NoYW5nZU1vZGVsOiBib29sZWFuOyAvLyDjg6Ljg4fjg6vliIfjgormm7/jgYjjg5Xjg6njgrBcbiAgX2lzQ2xpY2s6IGJvb2xlYW47IC8vIOOCr+ODquODg+OCr+S4rVxuXG4gIC8vIOWPg+aVuOaVuOWAvOWIneWni1xuICBwdWJsaWMgYW5nbGVYOm51bWJlciA9IDA7XG4gIHB1YmxpYyBhbmdsZVk6bnVtYmVyID0gMDtcbiAgcHVibGljIGFuZ2xlWjpudW1iZXIgPSAwO1xuICBwdWJsaWMgZXllTE9wZW46bnVtYmVyID0gMDtcbiAgcHVibGljIGV5ZUxTbWlsZTpudW1iZXIgPSAwO1xuICBwdWJsaWMgZXllUk9wZW46bnVtYmVyID0gMDtcbiAgcHVibGljIGV5ZVJTbWlsZTpudW1iZXIgPSAwO1xuICBwdWJsaWMgZXllQmFsbFg6bnVtYmVyID0gMDtcbiAgcHVibGljIGV5ZUJhbGxZOm51bWJlciA9IDA7XG4gIHB1YmxpYyBleWVCYWxsRm9ybTpudW1iZXI9MDtcbiAgcHVibGljIGJyb3dMWTpudW1iZXI9MDtcbiAgcHVibGljIGJyb3dSWTpudW1iZXI9MDtcbiAgcHVibGljIGJyb3dMWDpudW1iZXI9MDtcbiAgcHVibGljIGJyb3dSWDpudW1iZXI9MDtcbiAgcHVibGljIGJyb3dMQW5nbGU6bnVtYmVyPTA7XG4gIHB1YmxpYyBicm93UkFuZ2xlOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd0xGb3JtOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd1JGb3JtOm51bWJlcj0wO1xuICAvL21vdXRoIGZvcm1cbiAgcHVibGljIG1vdXRoRm9ybTogbnVtYmVyID0gMDtcbiAgLy9tb3V0aCBvcGVuWVxuICBwdWJsaWMgbW91dGhPcGVuWTogbnVtYmVyID0gMDtcbiAgcHVibGljIGNoZWVrOm51bWJlcj0wO1xuICBwdWJsaWMgYm9keUFuZ2xlWDpudW1iZXIgPSAwO1xuICBwdWJsaWMgYm9keUFuZ2xlWTpudW1iZXIgPSAwO1xuICBwdWJsaWMgYm9keUFuZ2xlWjpudW1iZXIgPSAwO1xuICBwdWJsaWMgYnJlYXRoOm51bWJlcj0wO1xuICBwdWJsaWMgYXJtTEE6bnVtYmVyPTA7XG4gIHB1YmxpYyBhcm1SQTpudW1iZXI9MDtcbiAgcHVibGljIGFybUxCOm51bWJlcj0wO1xuICBwdWJsaWMgYXJtUkI6bnVtYmVyPTA7XG4gIHB1YmxpYyBoYW5kTDpudW1iZXI9MDtcbiAgcHVibGljIGhhbmRSOm51bWJlcj0wO1xuICBwdWJsaWMgaGFpckZyb250Om51bWJlcj0wO1xuICBwdWJsaWMgaGFpclNpZGU6bnVtYmVyPTA7XG4gIHB1YmxpYyBoYWlyQmFjazpudW1iZXI9MDtcbiAgcHVibGljIGhhaXJGbHVmZnk6bnVtYmVyPTA7XG4gIHB1YmxpYyBzaG91bGRlclk6bnVtYmVyPTA7XG4gIHB1YmxpYyBidXN0WDpudW1iZXI9MDtcbiAgcHVibGljIGJ1c3RZOm51bWJlcj0wO1xuICBwdWJsaWMgYmFzZVg6bnVtYmVyPTA7XG4gIHB1YmxpYyBiYXNlWTpudW1iZXI9MDtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI1MTEwNGUzZTQxYzQzNDYxOGY0Y1wiOyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9