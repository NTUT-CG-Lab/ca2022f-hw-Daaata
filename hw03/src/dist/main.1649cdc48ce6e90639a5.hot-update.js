"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/lappmodel.ts":
/*!**************************!*\
  !*** ./src/lappmodel.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.LAppModel = void 0;
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
var cubismdefaultparameterid_1 = __webpack_require__(/*! @framework/cubismdefaultparameterid */ "../../../Framework/src/cubismdefaultparameterid.ts");
var cubismmodelsettingjson_1 = __webpack_require__(/*! @framework/cubismmodelsettingjson */ "../../../Framework/src/cubismmodelsettingjson.ts");
var cubismbreath_1 = __webpack_require__(/*! @framework/effect/cubismbreath */ "../../../Framework/src/effect/cubismbreath.ts");
var cubismeyeblink_1 = __webpack_require__(/*! @framework/effect/cubismeyeblink */ "../../../Framework/src/effect/cubismeyeblink.ts");
var live2dcubismframework_1 = __webpack_require__(/*! @framework/live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var cubismusermodel_1 = __webpack_require__(/*! @framework/model/cubismusermodel */ "../../../Framework/src/model/cubismusermodel.ts");
var acubismmotion_1 = __webpack_require__(/*! @framework/motion/acubismmotion */ "../../../Framework/src/motion/acubismmotion.ts");
var cubismmotionqueuemanager_1 = __webpack_require__(/*! @framework/motion/cubismmotionqueuemanager */ "../../../Framework/src/motion/cubismmotionqueuemanager.ts");
var csmmap_1 = __webpack_require__(/*! @framework/type/csmmap */ "../../../Framework/src/type/csmmap.ts");
var csmvector_1 = __webpack_require__(/*! @framework/type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismdebug_1 = __webpack_require__(/*! @framework/utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
var lappwavfilehandler_1 = __webpack_require__(/*! ./lappwavfilehandler */ "./src/lappwavfilehandler.ts");
var LoadStep;
(function (LoadStep) {
    LoadStep[LoadStep["LoadAssets"] = 0] = "LoadAssets";
    LoadStep[LoadStep["LoadModel"] = 1] = "LoadModel";
    LoadStep[LoadStep["WaitLoadModel"] = 2] = "WaitLoadModel";
    LoadStep[LoadStep["LoadExpression"] = 3] = "LoadExpression";
    LoadStep[LoadStep["WaitLoadExpression"] = 4] = "WaitLoadExpression";
    LoadStep[LoadStep["LoadPhysics"] = 5] = "LoadPhysics";
    LoadStep[LoadStep["WaitLoadPhysics"] = 6] = "WaitLoadPhysics";
    LoadStep[LoadStep["LoadPose"] = 7] = "LoadPose";
    LoadStep[LoadStep["WaitLoadPose"] = 8] = "WaitLoadPose";
    LoadStep[LoadStep["SetupEyeBlink"] = 9] = "SetupEyeBlink";
    LoadStep[LoadStep["SetupBreath"] = 10] = "SetupBreath";
    LoadStep[LoadStep["LoadUserData"] = 11] = "LoadUserData";
    LoadStep[LoadStep["WaitLoadUserData"] = 12] = "WaitLoadUserData";
    LoadStep[LoadStep["SetupEyeBlinkIds"] = 13] = "SetupEyeBlinkIds";
    LoadStep[LoadStep["SetupLipSyncIds"] = 14] = "SetupLipSyncIds";
    LoadStep[LoadStep["SetupLayout"] = 15] = "SetupLayout";
    LoadStep[LoadStep["LoadMotion"] = 16] = "LoadMotion";
    LoadStep[LoadStep["WaitLoadMotion"] = 17] = "WaitLoadMotion";
    LoadStep[LoadStep["CompleteInitialize"] = 18] = "CompleteInitialize";
    LoadStep[LoadStep["CompleteSetupModel"] = 19] = "CompleteSetupModel";
    LoadStep[LoadStep["LoadTexture"] = 20] = "LoadTexture";
    LoadStep[LoadStep["WaitLoadTexture"] = 21] = "WaitLoadTexture";
    LoadStep[LoadStep["CompleteSetup"] = 22] = "CompleteSetup";
})(LoadStep || (LoadStep = {}));
var LAppModel = (function (_super) {
    __extends(LAppModel, _super);
    function LAppModel() {
        var _this = _super.call(this) || this;
        _this.angleX = 0;
        _this.angleY = 0;
        _this.angleZ = 0;
        _this.eyeLOpen = 0;
        _this.eyeLSmile = 0;
        _this.eyeROpen = 0;
        _this.eyeRSmile = 0;
        _this.eyeBallX = 0;
        _this.eyeBallY = 0;
        _this.eyeBallForm = 0;
        _this.browLY = 0;
        _this.browRY = 0;
        _this.browLX = 0;
        _this.browRX = 0;
        _this.browLAngle = 0;
        _this.browRAngle = 0;
        _this.browLForm = 0;
        _this.browRForm = 0;
        _this.mouthForm = 0;
        _this.mouthOpenY = 0;
        _this.cheek = 0;
        _this.bodyAngleX = 0;
        _this.bodyAngleY = 0;
        _this.bodyAngleZ = 0;
        _this.breath = 0;
        _this.armLA = 0;
        _this.armRA = 0;
        _this.armLB = 0;
        _this.armRB = 0;
        _this.handL = 0;
        _this.handR = 0;
        _this.hairFront = 0;
        _this.hairSide = 0;
        _this.hairBack = 0;
        _this.hairFluffy = 0;
        _this.shoulderY = 0;
        _this.bustX = 0;
        _this.bustY = 0;
        _this.baseX = 0;
        _this.baseY = 0;
        _this._motionSounds = new Map();
        _this._modelSetting = null;
        _this._modelHomeDir = null;
        _this._userTimeSeconds = 0.0;
        _this._eyeBlinkIds = new csmvector_1.csmVector();
        _this._lipSyncIds = new csmvector_1.csmVector();
        _this._motions = new csmmap_1.csmMap();
        _this._expressions = new csmmap_1.csmMap();
        _this._hitArea = new csmvector_1.csmVector();
        _this._userArea = new csmvector_1.csmVector();
        _this._idParamAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleX);
        _this._idParamAngleY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleY);
        _this._idParamAngleZ = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleZ);
        _this._idParamEyeBallX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeBallX);
        _this._idParamEyeBallY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeBallY);
        _this._idParamBodyAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBodyAngleX);
        _this._idParamEyeLOpen = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeLOpen);
        _this._idParamEyeLSmile = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeLSmile);
        _this._idParamEyeROpen = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeROpen);
        _this._idParamEyeRSmile = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeRSmile);
        _this._idParamEyeBallForm = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeBallForm);
        _this._idParamBrowLY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBrowLY);
        _this._idParamBrowRY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBrowRY);
        _this._idParamBrowLX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBrowLX);
        _this._idParamBrowRX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBrowRX);
        _this._idParamBrowLAngle = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBrowLAngle);
        _this._idParamBrowRAngle = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBrowRAngle);
        _this._idParamBrowLForm = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBrowLForm);
        _this._idParamBrowRForm = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBrowRForm);
        _this._idParamMouthForm = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamMouthForm);
        _this._idParamMouthOpenY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamMouthOpenY);
        _this._idParamCheek = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamCheek);
        _this._idParamBodyAngleY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBodyAngleY);
        _this._idParamBodyAngleZ = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBodyAngleZ);
        _this._idParamBreath = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBreath);
        _this._idParamArmLA = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamArmLA);
        _this._idParamArmRA = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamArmRA);
        _this._idParamArmLB = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamArmLB);
        _this._idParamArmRB = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamArmRB);
        _this._idParamHandL = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamHandL);
        _this._idParamHandR = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamHandR);
        _this._idParamHairFront = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamHairFront);
        _this._idParamHairSide = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamHairSide);
        _this._idParamHairBack = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamHairBack);
        _this._idParamHairFluffy = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamHairFluffy);
        _this._idParamShoulderY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamShoulderY);
        _this._idParamBustX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBustX);
        _this._idParamBustY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBustY);
        _this._idParamBaseX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBaseX);
        _this._idParamBaseY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBaseY);
        _this._state = LoadStep.LoadAssets;
        _this._expressionCount = 0;
        _this._textureCount = 0;
        _this._motionCount = 0;
        _this._allMotionCount = 0;
        _this._wavFileHandler = new lappwavfilehandler_1.LAppWavFileHandler();
        return _this;
    }
    LAppModel.prototype.loadAssets = function (dir, fileName) {
        var _this = this;
        this._modelHomeDir = dir;
        fetch("".concat(this._modelHomeDir).concat(fileName))
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (arrayBuffer) {
            var setting = new cubismmodelsettingjson_1.CubismModelSettingJson(arrayBuffer, arrayBuffer.byteLength);
            _this._state = LoadStep.LoadModel;
            _this.setupModel(setting);
        });
    };
    LAppModel.prototype.setupModel = function (setting) {
        var _this = this;
        this._updating = true;
        this._initialized = false;
        this._modelSetting = setting;
        if (this._modelSetting.getModelFileName() != '') {
            var modelFileName = this._modelSetting.getModelFileName();
            fetch("".concat(this._modelHomeDir).concat(modelFileName))
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                _this.loadModel(arrayBuffer);
                _this._state = LoadStep.LoadExpression;
                loadCubismExpression();
            });
            this._state = LoadStep.WaitLoadModel;
        }
        else {
            lapppal_1.LAppPal.printMessage('Model data does not exist.');
        }
        var loadCubismExpression = function () {
            if (_this._modelSetting.getExpressionCount() > 0) {
                var count_1 = _this._modelSetting.getExpressionCount();
                var _loop_1 = function (i) {
                    var expressionName = _this._modelSetting.getExpressionName(i);
                    var expressionFileName = _this._modelSetting.getExpressionFileName(i);
                    fetch("".concat(_this._modelHomeDir).concat(expressionFileName))
                        .then(function (response) { return response.arrayBuffer(); })
                        .then(function (arrayBuffer) {
                        var motion = _this.loadExpression(arrayBuffer, arrayBuffer.byteLength, expressionName);
                        if (_this._expressions.getValue(expressionName) != null) {
                            acubismmotion_1.ACubismMotion.delete(_this._expressions.getValue(expressionName));
                            _this._expressions.setValue(expressionName, null);
                        }
                        _this._expressions.setValue(expressionName, motion);
                        _this._expressionCount++;
                        if (_this._expressionCount >= count_1) {
                            _this._state = LoadStep.LoadPhysics;
                            loadCubismPhysics();
                        }
                    });
                };
                for (var i = 0; i < count_1; i++) {
                    _loop_1(i);
                }
                _this._state = LoadStep.WaitLoadExpression;
            }
            else {
                _this._state = LoadStep.LoadPhysics;
                loadCubismPhysics();
            }
        };
        var loadCubismPhysics = function () {
            if (_this._modelSetting.getPhysicsFileName() != '') {
                var physicsFileName = _this._modelSetting.getPhysicsFileName();
                fetch("".concat(_this._modelHomeDir).concat(physicsFileName))
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadPhysics(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.LoadPose;
                    loadCubismPose();
                });
                _this._state = LoadStep.WaitLoadPhysics;
            }
            else {
                _this._state = LoadStep.LoadPose;
                loadCubismPose();
            }
        };
        var loadCubismPose = function () {
            if (_this._modelSetting.getPoseFileName() != '') {
                var poseFileName = _this._modelSetting.getPoseFileName();
                fetch("".concat(_this._modelHomeDir).concat(poseFileName))
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadPose(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.SetupEyeBlink;
                    setupEyeBlink();
                });
                _this._state = LoadStep.WaitLoadPose;
            }
            else {
                _this._state = LoadStep.SetupEyeBlink;
                setupEyeBlink();
            }
        };
        var setupEyeBlink = function () {
            if (_this._modelSetting.getEyeBlinkParameterCount() > 0) {
                _this._eyeBlink = cubismeyeblink_1.CubismEyeBlink.create(_this._modelSetting);
                _this._state = LoadStep.SetupBreath;
            }
            setupBreath();
        };
        var setupBreath = function () {
            _this._breath = cubismbreath_1.CubismBreath.create();
            var breathParameters = new csmvector_1.csmVector();
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleX, 0.0, 15.0, 6.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleY, 0.0, 8.0, 3.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleZ, 0.0, 10.0, 5.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamBodyAngleX, 0.0, 4.0, 15.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBreath), 0.5, 0.5, 3.2345, 1));
            _this._breath.setParameters(breathParameters);
            _this._state = LoadStep.LoadUserData;
            loadUserData();
        };
        var loadUserData = function () {
            if (_this._modelSetting.getUserDataFile() != '') {
                var userDataFile = _this._modelSetting.getUserDataFile();
                fetch("".concat(_this._modelHomeDir).concat(userDataFile))
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadUserData(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.SetupEyeBlinkIds;
                    setupEyeBlinkIds();
                });
                _this._state = LoadStep.WaitLoadUserData;
            }
            else {
                _this._state = LoadStep.SetupEyeBlinkIds;
                setupEyeBlinkIds();
            }
        };
        var setupEyeBlinkIds = function () {
            var eyeBlinkIdCount = _this._modelSetting.getEyeBlinkParameterCount();
            for (var i = 0; i < eyeBlinkIdCount; ++i) {
                _this._eyeBlinkIds.pushBack(_this._modelSetting.getEyeBlinkParameterId(i));
            }
            _this._state = LoadStep.SetupLipSyncIds;
            setupLipSyncIds();
        };
        var setupLipSyncIds = function () {
            var lipSyncIdCount = _this._modelSetting.getLipSyncParameterCount();
            for (var i = 0; i < lipSyncIdCount; ++i) {
                _this._lipSyncIds.pushBack(_this._modelSetting.getLipSyncParameterId(i));
            }
            _this._state = LoadStep.SetupLayout;
            setupLayout();
        };
        var setupLayout = function () {
            var layout = new csmmap_1.csmMap();
            if (_this._modelSetting == null || _this._modelMatrix == null) {
                (0, cubismdebug_1.CubismLogError)('Failed to setupLayout().');
                return;
            }
            _this._modelSetting.getLayoutMap(layout);
            _this._modelMatrix.setupFromLayout(layout);
            _this._state = LoadStep.LoadMotion;
            loadCubismMotion();
        };
        var loadCubismMotion = function () {
            _this._state = LoadStep.WaitLoadMotion;
            _this._model.saveParameters();
            _this._allMotionCount = 0;
            _this._motionCount = 0;
            var group = [];
            var motionGroupCount = _this._modelSetting.getMotionGroupCount();
            for (var i = 0; i < motionGroupCount; i++) {
                group[i] = _this._modelSetting.getMotionGroupName(i);
                _this._allMotionCount += _this._modelSetting.getMotionCount(group[i]);
            }
            for (var i = 0; i < motionGroupCount; i++) {
                _this.preLoadMotionGroup(group[i]);
            }
            if (motionGroupCount == 0) {
                _this._state = LoadStep.LoadTexture;
                _this._motionManager.stopAllMotions();
                _this._updating = false;
                _this._initialized = true;
                _this.createRenderer();
                _this.setupTextures();
                _this.getRenderer().startUp(lappdelegate_1.gl);
            }
        };
    };
    LAppModel.prototype.setupTextures = function () {
        var _this = this;
        var usePremultiply = true;
        if (this._state == LoadStep.LoadTexture) {
            var textureCount_1 = this._modelSetting.getTextureCount();
            var _loop_2 = function (modelTextureNumber) {
                if (this_1._modelSetting.getTextureFileName(modelTextureNumber) == '') {
                    console.log('getTextureFileName null');
                    return "continue";
                }
                var texturePath = this_1._modelSetting.getTextureFileName(modelTextureNumber);
                texturePath = this_1._modelHomeDir + texturePath;
                var onLoad = function (textureInfo) {
                    _this.getRenderer().bindTexture(modelTextureNumber, textureInfo.id);
                    _this._textureCount++;
                    if (_this._textureCount >= textureCount_1) {
                        _this._state = LoadStep.CompleteSetup;
                    }
                };
                lappdelegate_1.LAppDelegate.getInstance()
                    .getTextureManager()
                    .createTextureFromPngFile(texturePath, usePremultiply, onLoad);
                this_1.getRenderer().setIsPremultipliedAlpha(usePremultiply);
            };
            var this_1 = this;
            for (var modelTextureNumber = 0; modelTextureNumber < textureCount_1; modelTextureNumber++) {
                _loop_2(modelTextureNumber);
            }
            this._state = LoadStep.WaitLoadTexture;
        }
    };
    LAppModel.prototype.reloadRenderer = function () {
        this.deleteRenderer();
        this.createRenderer();
        this.setupTextures();
    };
    LAppModel.prototype.update = function () {
        if (this._state != LoadStep.CompleteSetup)
            return;
        var deltaTimeSeconds = lapppal_1.LAppPal.getDeltaTime();
        this._userTimeSeconds += deltaTimeSeconds;
        this._dragManager.update(deltaTimeSeconds);
        this._dragX = this._dragManager.getX();
        this._dragY = this._dragManager.getY();
        var motionUpdated = false;
        this._model.loadParameters();
        if (this._motionManager.isFinished()) {
            this.startRandomMotion(LAppDefine.MotionGroupIdle, LAppDefine.PriorityIdle);
        }
        else {
            motionUpdated = this._motionManager.updateMotion(this._model, deltaTimeSeconds);
        }
        this._model.saveParameters();
        this._model.setParameterValueById(this._idParamAngleX, this.angleX);
        this._model.setParameterValueById(this._idParamAngleY, this.angleY);
        this._model.setParameterValueById(this._idParamAngleZ, this.angleZ);
        this._model.setParameterValueById(this._idParamEyeLOpen, this.eyeLOpen);
        this._model.setParameterValueById(this._idParamEyeLSmile, this.eyeLSmile);
        this._model.setParameterValueById(this._idParamEyeROpen, this.eyeROpen);
        this._model.setParameterValueById(this._idParamEyeRSmile, this.eyeRSmile);
        this._model.setParameterValueById(this._idParamEyeBallX, this.eyeBallX);
        this._model.setParameterValueById(this._idParamEyeBallY, this.eyeBallY);
        this._model.setParameterValueById(this._idParamEyeBallForm, this.eyeBallForm);
        this._model.setParameterValueById(this._idParamBrowLY, this.browLY);
        this._model.setParameterValueById(this._idParamBrowRY, this.browRY);
        this._model.setParameterValueById(this._idParamBrowLX, this.browLX);
        this._model.setParameterValueById(this._idParamBrowRX, this.browRX);
        this._model.setParameterValueById(this._idParamBrowLAngle, this.browLAngle);
        this._model.setParameterValueById(this._idParamBrowRAngle, this.browRAngle);
        this._model.setParameterValueById(this._idParamBrowLForm, this.browLForm);
        this._model.setParameterValueById(this._idParamBrowRForm, this.browLAngle);
        this._model.setParameterValueById(this._idParamMouthForm, this.mouthForm);
        this._model.setParameterValueById(this._idParamMouthOpenY, this.mouthOpenY);
        this._model.setParameterValueById(this._idParamCheek, this.cheek);
        this._model.setParameterValueById(this._idParamCheek, this.cheek);
        this._model.setParameterValueById(this._idParamBodyAngleX, this.bodyAngleX);
        this._model.setParameterValueById(this._idParamBodyAngleY, this.bodyAngleY);
        this._model.setParameterValueById(this._idParamBodyAngleZ, this.bodyAngleZ);
        this._model.setParameterValueById(this._idParamBreath, this.breath);
        this._model.setParameterValueById(this._idParamArmLA, this.armLA);
        this._model.setParameterValueById(this._idParamArmRA, this.armRA);
        this._model.setParameterValueById(this._idParamArmLB, this.armLB);
        this._model.setParameterValueById(this._idParamArmRB, this.armRB);
        this._model.setParameterValueById(this._idParamHandL, this.handL);
        this._model.setParameterValueById(this._idParamHandR, this.handR);
        this._model.setParameterValueById(this._idParamHairFront, this.hairFront);
        this._model.setParameterValueById(this._idParamHairSide, this.hairSide);
        this._model.setParameterValueById(this._idParamHairBack, this.hairBack);
        this._model.setParameterValueById(this._idParamHairFluffy, this.hairFluffy);
        this._model.setParameterValueById(this._idParamShoulderY, this.shoulderY);
        this._model.setParameterValueById(this._idParamBustX, this.bustX);
        this._model.setParameterValueById(this._idParamBustY, this.bustY);
        this._model.setParameterValueById(this._idParamBaseX, this.baseX);
        this._model.setParameterValueById(this._idParamBaseY, this.baseY);
        if (!motionUpdated) {
            if (this._eyeBlink != null) {
                this._eyeBlink.updateParameters(this._model, deltaTimeSeconds);
            }
        }
        if (this._expressionManager != null) {
            this._expressionManager.updateMotion(this._model, deltaTimeSeconds);
        }
        this._model.addParameterValueById(this._idParamAngleX, this._dragX * 30);
        this._model.addParameterValueById(this._idParamAngleY, this._dragY * 30);
        this._model.addParameterValueById(this._idParamAngleZ, this._dragX * this._dragY * -30);
        this._model.addParameterValueById(this._idParamBodyAngleX, this._dragX * 10);
        this._model.addParameterValueById(this._idParamEyeBallX, this._dragX);
        this._model.addParameterValueById(this._idParamEyeBallY, this._dragY);
        if (this._breath != null) {
            this._breath.updateParameters(this._model, deltaTimeSeconds);
        }
        if (this._lipsync) {
            var value = 0.0;
            this._wavFileHandler.update(deltaTimeSeconds);
            value = this._wavFileHandler.getRms();
            for (var i = 0; i < this._lipSyncIds.getSize(); ++i) {
                this._model.addParameterValueById(this._lipSyncIds.at(i), value, 0.8);
            }
        }
        if (this._pose != null) {
            this._pose.updateParameters(this._model, deltaTimeSeconds);
        }
        this._model.update();
    };
    LAppModel.prototype.startMotion = function (group, no, priority, onFinishedMotionHandler) {
        var _this = this;
        if (priority == LAppDefine.PriorityForce) {
            this._motionManager.setReservePriority(priority);
        }
        else if (!this._motionManager.reserveMotion(priority)) {
            if (this._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]can't start motion.");
            }
            return cubismmotionqueuemanager_1.InvalidMotionQueueEntryHandleValue;
        }
        var motionFileName = this._modelSetting.getMotionFileName(group, no);
        var name = "".concat(group, "_").concat(no);
        var motion = this._motions.getValue(name);
        var autoDelete = false;
        if (motion == null) {
            fetch("".concat(this._modelHomeDir).concat(motionFileName))
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                motion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, null, onFinishedMotionHandler);
                var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, no);
                if (fadeTime >= 0.0) {
                    motion.setFadeInTime(fadeTime);
                }
                fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, no);
                if (fadeTime >= 0.0) {
                    motion.setFadeOutTime(fadeTime);
                }
                motion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
                autoDelete = true;
            });
        }
        else {
            motion.setFinishedMotionHandler(onFinishedMotionHandler);
        }
        var voice = this._modelSetting.getMotionSoundFileName(group, no);
        if (voice.localeCompare('') != 0) {
            var path = voice;
            path = this._modelHomeDir + path;
            this._wavFileHandler.start(path);
        }
        if (this._debugMode) {
            lapppal_1.LAppPal.printMessage("[APP]start motion: [".concat(group, "_").concat(no));
        }
        return this._motionManager.startMotionPriority(motion, autoDelete, priority);
    };
    LAppModel.prototype.startRandomMotion = function (group, priority, onFinishedMotionHandler) {
        if (this._modelSetting.getMotionCount(group) == 0) {
            return cubismmotionqueuemanager_1.InvalidMotionQueueEntryHandleValue;
        }
        var no = Math.floor(Math.random() * this._modelSetting.getMotionCount(group));
        return this.startMotion(group, no, priority, onFinishedMotionHandler);
    };
    LAppModel.prototype.setExpression = function (expressionId) {
        var motion = this._expressions.getValue(expressionId);
        if (this._debugMode) {
            lapppal_1.LAppPal.printMessage("[APP]expression: [".concat(expressionId, "]"));
        }
        if (motion != null) {
            this._expressionManager.startMotionPriority(motion, false, LAppDefine.PriorityForce);
        }
        else {
            if (this._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]expression[".concat(expressionId, "] is null"));
            }
        }
    };
    LAppModel.prototype.setRandomExpression = function () {
        if (this._expressions.getSize() == 0) {
            return;
        }
        var no = Math.floor(Math.random() * this._expressions.getSize());
        for (var i = 0; i < this._expressions.getSize(); i++) {
            if (i == no) {
                var name_1 = this._expressions._keyValues[i].first;
                this.setExpression(name_1);
                return;
            }
        }
    };
    LAppModel.prototype.motionEventFired = function (eventValue) {
        (0, cubismdebug_1.CubismLogInfo)('{0} is fired on LAppModel!!', eventValue.s);
    };
    LAppModel.prototype.hitTest = function (hitArenaName, x, y) {
        if (this._opacity < 1) {
            return false;
        }
        var count = this._modelSetting.getHitAreasCount();
        for (var i = 0; i < count; i++) {
            if (this._modelSetting.getHitAreaName(i) == hitArenaName) {
                var drawId = this._modelSetting.getHitAreaId(i);
                return this.isHit(drawId, x, y);
            }
        }
        return false;
    };
    LAppModel.prototype.preLoadMotionGroup = function (group) {
        var _this = this;
        var _loop_3 = function (i) {
            var motionFileName = this_2._modelSetting.getMotionFileName(group, i);
            var name_2 = "".concat(group, "_").concat(i);
            if (this_2._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]load motion: ".concat(motionFileName, " => [").concat(name_2, "]"));
            }
            fetch("".concat(this_2._modelHomeDir).concat(motionFileName))
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                var tmpMotion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, name_2);
                var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, i);
                if (fadeTime >= 0.0) {
                    tmpMotion.setFadeInTime(fadeTime);
                }
                fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, i);
                if (fadeTime >= 0.0) {
                    tmpMotion.setFadeOutTime(fadeTime);
                }
                tmpMotion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
                if (_this._motions.getValue(name_2) != null) {
                    acubismmotion_1.ACubismMotion.delete(_this._motions.getValue(name_2));
                }
                _this._motions.setValue(name_2, tmpMotion);
                _this._motionCount++;
                if (_this._motionCount >= _this._allMotionCount) {
                    _this._state = LoadStep.LoadTexture;
                    _this._motionManager.stopAllMotions();
                    _this._updating = false;
                    _this._initialized = true;
                    _this.createRenderer();
                    _this.setupTextures();
                    _this.getRenderer().startUp(lappdelegate_1.gl);
                }
            });
        };
        var this_2 = this;
        for (var i = 0; i < this._modelSetting.getMotionCount(group); i++) {
            _loop_3(i);
        }
    };
    LAppModel.prototype.releaseMotions = function () {
        this._motions.clear();
    };
    LAppModel.prototype.releaseExpressions = function () {
        this._expressions.clear();
    };
    LAppModel.prototype.doDraw = function () {
        if (this._model == null)
            return;
        var viewport = [0, 0, lappdelegate_1.canvas.width, lappdelegate_1.canvas.height];
        this.getRenderer().setRenderState(lappdelegate_1.frameBuffer, viewport);
        this.getRenderer().drawModel();
    };
    LAppModel.prototype.draw = function (matrix) {
        if (this._model == null) {
            return;
        }
        if (this._state == LoadStep.CompleteSetup) {
            matrix.multiplyByMatrix(this._modelMatrix);
            this.getRenderer().setMvpMatrix(matrix);
            this.doDraw();
        }
    };
    return LAppModel;
}(cubismusermodel_1.CubismUserModel));
exports.LAppModel = LAppModel;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f43e199f6dac715dd37d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNjQ5Y2RjNDhjZTZlOTA2MzlhNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsZ0ZBQXNCO0FBRXRCLHNKQUErRTtBQUMvRSxnSkFBMkU7QUFDM0UsZ0lBR3dDO0FBQ3hDLHNJQUFrRTtBQUdsRSw2SUFBbUU7QUFFbkUsdUlBQW1FO0FBQ25FLG1JQUd5QztBQUV6QyxvS0FHb0Q7QUFDcEQsMEdBQWdEO0FBR2hELG1IQUFzRDtBQUN0RCwySEFBNkU7QUFFN0UsOEZBQTJDO0FBQzNDLHdGQUF1RTtBQUN2RSx5RUFBb0M7QUFFcEMsMEdBQTBEO0FBRTFELElBQUssUUF3Qko7QUF4QkQsV0FBSyxRQUFRO0lBQ1gsbURBQVU7SUFDVixpREFBUztJQUNULHlEQUFhO0lBQ2IsMkRBQWM7SUFDZCxtRUFBa0I7SUFDbEIscURBQVc7SUFDWCw2REFBZTtJQUNmLCtDQUFRO0lBQ1IsdURBQVk7SUFDWix5REFBYTtJQUNiLHNEQUFXO0lBQ1gsd0RBQVk7SUFDWixnRUFBZ0I7SUFDaEIsZ0VBQWdCO0lBQ2hCLDhEQUFlO0lBQ2Ysc0RBQVc7SUFDWCxvREFBVTtJQUNWLDREQUFjO0lBQ2Qsb0VBQWtCO0lBQ2xCLG9FQUFrQjtJQUNsQixzREFBVztJQUNYLDhEQUFlO0lBQ2YsMERBQWE7QUFDZixDQUFDLEVBeEJJLFFBQVEsS0FBUixRQUFRLFFBd0JaO0FBTUQ7SUFBK0IsNkJBQWU7SUE0eEI1QztRQUFBLFlBQ0UsaUJBQU8sU0FvSlI7UUFrRU0sWUFBTSxHQUFVLENBQUMsQ0FBQztRQUNsQixZQUFNLEdBQVUsQ0FBQyxDQUFDO1FBQ2xCLFlBQU0sR0FBVSxDQUFDLENBQUM7UUFDbEIsY0FBUSxHQUFVLENBQUMsQ0FBQztRQUNwQixlQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVSxDQUFDLENBQUM7UUFDcEIsZUFBUyxHQUFVLENBQUMsQ0FBQztRQUNyQixj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QUFFLENBQUMsRUFBRTtvQkFBeEQsQ0FBQztTQW9EVDtJQUNILENBQUM7SUFLTSxrQ0FBYyxHQUFyQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUtNLHNDQUFrQixHQUF6QjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUtNLDBCQUFNLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSTtZQUFFLE9BQU87UUFHaEMsSUFBTSxRQUFRLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFCQUFNLENBQUMsS0FBSyxFQUFFLHFCQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQywwQkFBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBS00sd0JBQUksR0FBWCxVQUFZLE1BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBR0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDekMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUUzQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXhDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQXdRSCxnQkFBQztBQUFELENBQUMsQ0EvaEM4QixpQ0FBZSxHQStoQzdDO0FBL2hDWSw4QkFBUzs7Ozs7Ozs7O1VDeEV0QixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGFwcG1vZGVsLnRzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuXG5pbXBvcnQgeyBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQgfSBmcm9tICdAZnJhbWV3b3JrL2N1YmlzbWRlZmF1bHRwYXJhbWV0ZXJpZCc7XG5pbXBvcnQgeyBDdWJpc21Nb2RlbFNldHRpbmdKc29uIH0gZnJvbSAnQGZyYW1ld29yay9jdWJpc21tb2RlbHNldHRpbmdqc29uJztcbmltcG9ydCB7XG4gIEJyZWF0aFBhcmFtZXRlckRhdGEsXG4gIEN1YmlzbUJyZWF0aFxufSBmcm9tICdAZnJhbWV3b3JrL2VmZmVjdC9jdWJpc21icmVhdGgnO1xuaW1wb3J0IHsgQ3ViaXNtRXllQmxpbmsgfSBmcm9tICdAZnJhbWV3b3JrL2VmZmVjdC9jdWJpc21leWVibGluayc7XG5pbXBvcnQgeyBJQ3ViaXNtTW9kZWxTZXR0aW5nIH0gZnJvbSAnQGZyYW1ld29yay9pY3ViaXNtbW9kZWxzZXR0aW5nJztcbmltcG9ydCB7IEN1YmlzbUlkSGFuZGxlIH0gZnJvbSAnQGZyYW1ld29yay9pZC9jdWJpc21pZCc7XG5pbXBvcnQgeyBDdWJpc21GcmFtZXdvcmsgfSBmcm9tICdAZnJhbWV3b3JrL2xpdmUyZGN1YmlzbWZyYW1ld29yayc7XG5pbXBvcnQgeyBDdWJpc21NYXRyaXg0NCB9IGZyb20gJ0BmcmFtZXdvcmsvbWF0aC9jdWJpc21tYXRyaXg0NCc7XG5pbXBvcnQgeyBDdWJpc21Vc2VyTW9kZWwgfSBmcm9tICdAZnJhbWV3b3JrL21vZGVsL2N1YmlzbXVzZXJtb2RlbCc7XG5pbXBvcnQge1xuICBBQ3ViaXNtTW90aW9uLFxuICBGaW5pc2hlZE1vdGlvbkNhbGxiYWNrXG59IGZyb20gJ0BmcmFtZXdvcmsvbW90aW9uL2FjdWJpc21tb3Rpb24nO1xuaW1wb3J0IHsgQ3ViaXNtTW90aW9uIH0gZnJvbSAnQGZyYW1ld29yay9tb3Rpb24vY3ViaXNtbW90aW9uJztcbmltcG9ydCB7XG4gIEN1YmlzbU1vdGlvblF1ZXVlRW50cnlIYW5kbGUsXG4gIEludmFsaWRNb3Rpb25RdWV1ZUVudHJ5SGFuZGxlVmFsdWVcbn0gZnJvbSAnQGZyYW1ld29yay9tb3Rpb24vY3ViaXNtbW90aW9ucXVldWVtYW5hZ2VyJztcbmltcG9ydCB7IGNzbU1hcCB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21tYXAnO1xuaW1wb3J0IHsgY3NtUmVjdCB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21yZWN0Zic7XG5pbXBvcnQgeyBjc21TdHJpbmcgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3Ntc3RyaW5nJztcbmltcG9ydCB7IGNzbVZlY3RvciB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc212ZWN0b3InO1xuaW1wb3J0IHsgQ3ViaXNtTG9nRXJyb3IsIEN1YmlzbUxvZ0luZm8gfSBmcm9tICdAZnJhbWV3b3JrL3V0aWxzL2N1YmlzbWRlYnVnJztcblxuaW1wb3J0ICogYXMgTEFwcERlZmluZSBmcm9tICcuL2xhcHBkZWZpbmUnO1xuaW1wb3J0IHsgY2FudmFzLCBmcmFtZUJ1ZmZlciwgZ2wsIExBcHBEZWxlZ2F0ZSB9IGZyb20gJy4vbGFwcGRlbGVnYXRlJztcbmltcG9ydCB7IExBcHBQYWwgfSBmcm9tICcuL2xhcHBwYWwnO1xuaW1wb3J0IHsgVGV4dHVyZUluZm8gfSBmcm9tICcuL2xhcHB0ZXh0dXJlbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwV2F2RmlsZUhhbmRsZXIgfSBmcm9tICcuL2xhcHB3YXZmaWxlaGFuZGxlcic7XG5cbmVudW0gTG9hZFN0ZXAge1xuICBMb2FkQXNzZXRzLFxuICBMb2FkTW9kZWwsXG4gIFdhaXRMb2FkTW9kZWwsXG4gIExvYWRFeHByZXNzaW9uLFxuICBXYWl0TG9hZEV4cHJlc3Npb24sXG4gIExvYWRQaHlzaWNzLFxuICBXYWl0TG9hZFBoeXNpY3MsXG4gIExvYWRQb3NlLFxuICBXYWl0TG9hZFBvc2UsXG4gIFNldHVwRXllQmxpbmssXG4gIFNldHVwQnJlYXRoLFxuICBMb2FkVXNlckRhdGEsXG4gIFdhaXRMb2FkVXNlckRhdGEsXG4gIFNldHVwRXllQmxpbmtJZHMsXG4gIFNldHVwTGlwU3luY0lkcyxcbiAgU2V0dXBMYXlvdXQsXG4gIExvYWRNb3Rpb24sXG4gIFdhaXRMb2FkTW90aW9uLFxuICBDb21wbGV0ZUluaXRpYWxpemUsXG4gIENvbXBsZXRlU2V0dXBNb2RlbCxcbiAgTG9hZFRleHR1cmUsXG4gIFdhaXRMb2FkVGV4dHVyZSxcbiAgQ29tcGxldGVTZXR1cFxufVxuXG4vKipcbiAqIOODpuODvOOCtuODvOOBjOWun+mam+OBq+S9v+eUqOOBmeOCi+ODouODh+ODq+OBruWun+ijheOCr+ODqeOCuTxicj5cbiAqIOODouODh+ODq+eUn+aIkOOAgeapn+iDveOCs+ODs+ODneODvOODjeODs+ODiOeUn+aIkOOAgeabtOaWsOWHpueQhuOBqOODrOODs+ODgOODquODs+OCsOOBruWRvOOBs+WHuuOBl+OCkuihjOOBhuOAglxuICovXG5leHBvcnQgY2xhc3MgTEFwcE1vZGVsIGV4dGVuZHMgQ3ViaXNtVXNlck1vZGVsIHtcbiAgLyoqXG4gICAqIG1vZGVsMy5qc29u44GM572u44GL44KM44Gf44OH44Kj44Os44Kv44OI44Oq44Go44OV44Kh44Kk44Or44OR44K544GL44KJ44Oi44OH44Or44KS55Sf5oiQ44GZ44KLXG4gICAqIEBwYXJhbSBkaXJcbiAgICogQHBhcmFtIGZpbGVOYW1lXG4gICAqL1xuICBwdWJsaWMgbG9hZEFzc2V0cyhkaXI6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX21vZGVsSG9tZURpciA9IGRpcjtcblxuICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke2ZpbGVOYW1lfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICBjb25zdCBzZXR0aW5nOiBJQ3ViaXNtTW9kZWxTZXR0aW5nID0gbmV3IEN1YmlzbU1vZGVsU2V0dGluZ0pzb24oXG4gICAgICAgICAgYXJyYXlCdWZmZXIsXG4gICAgICAgICAgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIOOCueODhuODvOODiOOCkuabtOaWsFxuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRNb2RlbDtcblxuICAgICAgICAvLyDntZDmnpzjgpLkv53lrZhcbiAgICAgICAgdGhpcy5zZXR1cE1vZGVsKHNldHRpbmcpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogbW9kZWwzLmpzb27jgYvjgonjg6Ljg4fjg6vjgpLnlJ/miJDjgZnjgovjgIJcbiAgICogbW9kZWwzLmpzb27jga7oqJjov7DjgavlvpPjgaPjgabjg6Ljg4fjg6vnlJ/miJDjgIHjg6Ljg7zjgrfjg6fjg7PjgIHniannkIbmvJTnrpfjgarjganjga7jgrPjg7Pjg53jg7zjg43jg7Pjg4jnlJ/miJDjgpLooYzjgYbjgIJcbiAgICpcbiAgICogQHBhcmFtIHNldHRpbmcgSUN1YmlzbU1vZGVsU2V0dGluZ+OBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHJpdmF0ZSBzZXR1cE1vZGVsKHNldHRpbmc6IElDdWJpc21Nb2RlbFNldHRpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX21vZGVsU2V0dGluZyA9IHNldHRpbmc7XG5cbiAgICAvLyBDdWJpc21Nb2RlbFxuICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW9kZWxGaWxlTmFtZSgpICE9ICcnKSB7XG4gICAgICBjb25zdCBtb2RlbEZpbGVOYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vZGVsRmlsZU5hbWUoKTtcblxuICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7bW9kZWxGaWxlTmFtZX1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkTW9kZWwoYXJyYXlCdWZmZXIpO1xuICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZEV4cHJlc3Npb247XG5cbiAgICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICAgIGxvYWRDdWJpc21FeHByZXNzaW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkTW9kZWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCdNb2RlbCBkYXRhIGRvZXMgbm90IGV4aXN0LicpO1xuICAgIH1cblxuICAgIC8vIEV4cHJlc3Npb25cbiAgICBjb25zdCBsb2FkQ3ViaXNtRXhwcmVzc2lvbiA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0RXhwcmVzc2lvbkNvdW50KCkgPiAwKSB7XG4gICAgICAgIGNvbnN0IGNvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0RXhwcmVzc2lvbkNvdW50KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZXhwcmVzc2lvbk5hbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0RXhwcmVzc2lvbk5hbWUoaSk7XG4gICAgICAgICAgY29uc3QgZXhwcmVzc2lvbkZpbGVOYW1lID1cbiAgICAgICAgICAgIHRoaXMuX21vZGVsU2V0dGluZy5nZXRFeHByZXNzaW9uRmlsZU5hbWUoaSk7XG5cbiAgICAgICAgICBmZXRjaChgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHtleHByZXNzaW9uRmlsZU5hbWV9YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1vdGlvbjogQUN1YmlzbU1vdGlvbiA9IHRoaXMubG9hZEV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgYXJyYXlCdWZmZXIsXG4gICAgICAgICAgICAgICAgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uTmFtZVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLl9leHByZXNzaW9ucy5nZXRWYWx1ZShleHByZXNzaW9uTmFtZSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIEFDdWJpc21Nb3Rpb24uZGVsZXRlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwcmVzc2lvbnMuZ2V0VmFsdWUoZXhwcmVzc2lvbk5hbWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9leHByZXNzaW9ucy5zZXRWYWx1ZShleHByZXNzaW9uTmFtZSwgbnVsbCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLl9leHByZXNzaW9ucy5zZXRWYWx1ZShleHByZXNzaW9uTmFtZSwgbW90aW9uKTtcblxuICAgICAgICAgICAgICB0aGlzLl9leHByZXNzaW9uQ291bnQrKztcblxuICAgICAgICAgICAgICBpZiAodGhpcy5fZXhwcmVzc2lvbkNvdW50ID49IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkUGh5c2ljcztcblxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgbG9hZEN1YmlzbVBoeXNpY3MoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZEV4cHJlc3Npb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRQaHlzaWNzO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIGxvYWRDdWJpc21QaHlzaWNzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFBoeXNpY3NcbiAgICBjb25zdCBsb2FkQ3ViaXNtUGh5c2ljcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0UGh5c2ljc0ZpbGVOYW1lKCkgIT0gJycpIHtcbiAgICAgICAgY29uc3QgcGh5c2ljc0ZpbGVOYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldFBoeXNpY3NGaWxlTmFtZSgpO1xuXG4gICAgICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke3BoeXNpY3NGaWxlTmFtZX1gKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkUGh5c2ljcyhhcnJheUJ1ZmZlciwgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFBvc2U7XG5cbiAgICAgICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgICAgICBsb2FkQ3ViaXNtUG9zZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkUGh5c2ljcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFBvc2U7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgbG9hZEN1YmlzbVBvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUG9zZVxuICAgIGNvbnN0IGxvYWRDdWJpc21Qb3NlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRQb3NlRmlsZU5hbWUoKSAhPSAnJykge1xuICAgICAgICBjb25zdCBwb3NlRmlsZU5hbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0UG9zZUZpbGVOYW1lKCk7XG5cbiAgICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7cG9zZUZpbGVOYW1lfWApXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQb3NlKGFycmF5QnVmZmVyLCBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcblxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5TZXR1cEV5ZUJsaW5rO1xuXG4gICAgICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICAgICAgc2V0dXBFeWVCbGluaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkUG9zZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBFeWVCbGluaztcblxuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBzZXR1cEV5ZUJsaW5rKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEV5ZUJsaW5rXG4gICAgY29uc3Qgc2V0dXBFeWVCbGluayA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0RXllQmxpbmtQYXJhbWV0ZXJDb3VudCgpID4gMCkge1xuICAgICAgICB0aGlzLl9leWVCbGluayA9IEN1YmlzbUV5ZUJsaW5rLmNyZWF0ZSh0aGlzLl9tb2RlbFNldHRpbmcpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwQnJlYXRoO1xuICAgICAgfVxuXG4gICAgICAvLyBjYWxsYmFja1xuICAgICAgc2V0dXBCcmVhdGgoKTtcbiAgICB9O1xuXG4gICAgLy8gQnJlYXRoXG4gICAgY29uc3Qgc2V0dXBCcmVhdGggPSAoKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLl9icmVhdGggPSBDdWJpc21CcmVhdGguY3JlYXRlKCk7XG5cbiAgICAgIGNvbnN0IGJyZWF0aFBhcmFtZXRlcnM6IGNzbVZlY3RvcjxCcmVhdGhQYXJhbWV0ZXJEYXRhPiA9IG5ldyBjc21WZWN0b3IoKTtcbiAgICAgIGJyZWF0aFBhcmFtZXRlcnMucHVzaEJhY2soXG4gICAgICAgIG5ldyBCcmVhdGhQYXJhbWV0ZXJEYXRhKHRoaXMuX2lkUGFyYW1BbmdsZVgsIDAuMCwgMTUuMCwgNi41MzQ1LCAwLjUpXG4gICAgICApO1xuICAgICAgYnJlYXRoUGFyYW1ldGVycy5wdXNoQmFjayhcbiAgICAgICAgbmV3IEJyZWF0aFBhcmFtZXRlckRhdGEodGhpcy5faWRQYXJhbUFuZ2xlWSwgMC4wLCA4LjAsIDMuNTM0NSwgMC41KVxuICAgICAgKTtcbiAgICAgIGJyZWF0aFBhcmFtZXRlcnMucHVzaEJhY2soXG4gICAgICAgIG5ldyBCcmVhdGhQYXJhbWV0ZXJEYXRhKHRoaXMuX2lkUGFyYW1BbmdsZVosIDAuMCwgMTAuMCwgNS41MzQ1LCAwLjUpXG4gICAgICApO1xuICAgICAgYnJlYXRoUGFyYW1ldGVycy5wdXNoQmFjayhcbiAgICAgICAgbmV3IEJyZWF0aFBhcmFtZXRlckRhdGEodGhpcy5faWRQYXJhbUJvZHlBbmdsZVgsIDAuMCwgNC4wLCAxNS41MzQ1LCAwLjUpXG4gICAgICApO1xuICAgICAgYnJlYXRoUGFyYW1ldGVycy5wdXNoQmFjayhcbiAgICAgICAgbmV3IEJyZWF0aFBhcmFtZXRlckRhdGEoXG4gICAgICAgICAgQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQnJlYXRoXG4gICAgICAgICAgKSxcbiAgICAgICAgICAwLjUsXG4gICAgICAgICAgMC41LFxuICAgICAgICAgIDMuMjM0NSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX2JyZWF0aC5zZXRQYXJhbWV0ZXJzKGJyZWF0aFBhcmFtZXRlcnMpO1xuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkVXNlckRhdGE7XG5cbiAgICAgIC8vIGNhbGxiYWNrXG4gICAgICBsb2FkVXNlckRhdGEoKTtcbiAgICB9O1xuXG4gICAgLy8gVXNlckRhdGFcbiAgICBjb25zdCBsb2FkVXNlckRhdGEgPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldFVzZXJEYXRhRmlsZSgpICE9ICcnKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhRmlsZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRVc2VyRGF0YUZpbGUoKTtcblxuICAgICAgICBmZXRjaChgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHt1c2VyRGF0YUZpbGV9YClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFVzZXJEYXRhKGFycmF5QnVmZmVyLCBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcblxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5TZXR1cEV5ZUJsaW5rSWRzO1xuXG4gICAgICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICAgICAgc2V0dXBFeWVCbGlua0lkcygpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuV2FpdExvYWRVc2VyRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBFeWVCbGlua0lkcztcblxuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBzZXR1cEV5ZUJsaW5rSWRzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEV5ZUJsaW5rSWRzXG4gICAgY29uc3Qgc2V0dXBFeWVCbGlua0lkcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGV5ZUJsaW5rSWRDb3VudDogbnVtYmVyID1cbiAgICAgICAgdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV5ZUJsaW5rUGFyYW1ldGVyQ291bnQoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleWVCbGlua0lkQ291bnQ7ICsraSkge1xuICAgICAgICB0aGlzLl9leWVCbGlua0lkcy5wdXNoQmFjayhcbiAgICAgICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0RXllQmxpbmtQYXJhbWV0ZXJJZChpKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwTGlwU3luY0lkcztcblxuICAgICAgLy8gY2FsbGJhY2tcbiAgICAgIHNldHVwTGlwU3luY0lkcygpO1xuICAgIH07XG5cbiAgICAvLyBMaXBTeW5jSWRzXG4gICAgY29uc3Qgc2V0dXBMaXBTeW5jSWRzID0gKCk6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgbGlwU3luY0lkQ291bnQgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TGlwU3luY1BhcmFtZXRlckNvdW50KCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlwU3luY0lkQ291bnQ7ICsraSkge1xuICAgICAgICB0aGlzLl9saXBTeW5jSWRzLnB1c2hCYWNrKHRoaXMuX21vZGVsU2V0dGluZy5nZXRMaXBTeW5jUGFyYW1ldGVySWQoaSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5TZXR1cExheW91dDtcblxuICAgICAgLy8gY2FsbGJhY2tcbiAgICAgIHNldHVwTGF5b3V0KCk7XG4gICAgfTtcblxuICAgIC8vIExheW91dFxuICAgIGNvbnN0IHNldHVwTGF5b3V0ID0gKCk6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgbGF5b3V0OiBjc21NYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IGNzbU1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZyA9PSBudWxsIHx8IHRoaXMuX21vZGVsTWF0cml4ID09IG51bGwpIHtcbiAgICAgICAgQ3ViaXNtTG9nRXJyb3IoJ0ZhaWxlZCB0byBzZXR1cExheW91dCgpLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX21vZGVsU2V0dGluZy5nZXRMYXlvdXRNYXAobGF5b3V0KTtcbiAgICAgIHRoaXMuX21vZGVsTWF0cml4LnNldHVwRnJvbUxheW91dChsYXlvdXQpO1xuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkTW90aW9uO1xuXG4gICAgICAvLyBjYWxsYmFja1xuICAgICAgbG9hZEN1YmlzbU1vdGlvbigpO1xuICAgIH07XG5cbiAgICAvLyBNb3Rpb25cbiAgICBjb25zdCBsb2FkQ3ViaXNtTW90aW9uID0gKCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZE1vdGlvbjtcbiAgICAgIHRoaXMuX21vZGVsLnNhdmVQYXJhbWV0ZXJzKCk7XG4gICAgICB0aGlzLl9hbGxNb3Rpb25Db3VudCA9IDA7XG4gICAgICB0aGlzLl9tb3Rpb25Db3VudCA9IDA7XG4gICAgICBjb25zdCBncm91cDogc3RyaW5nW10gPSBbXTtcblxuICAgICAgY29uc3QgbW90aW9uR3JvdXBDb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkdyb3VwQ291bnQoKTtcblxuICAgICAgLy8g44Oi44O844K344On44Oz44Gu57eP5pWw44KS5rGC44KB44KLXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdGlvbkdyb3VwQ291bnQ7IGkrKykge1xuICAgICAgICBncm91cFtpXSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Hcm91cE5hbWUoaSk7XG4gICAgICAgIHRoaXMuX2FsbE1vdGlvbkNvdW50ICs9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Db3VudChncm91cFtpXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIOODouODvOOCt+ODp+ODs+OBruiqreOBv+i+vOOBv1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Rpb25Hcm91cENvdW50OyBpKyspIHtcbiAgICAgICAgdGhpcy5wcmVMb2FkTW90aW9uR3JvdXAoZ3JvdXBbaV0pO1xuICAgICAgfVxuXG4gICAgICAvLyDjg6Ljg7zjgrfjg6fjg7PjgYzjgarjgYTloLTlkIhcbiAgICAgIGlmIChtb3Rpb25Hcm91cENvdW50ID09IDApIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkVGV4dHVyZTtcblxuICAgICAgICAvLyDlhajjgabjga7jg6Ljg7zjgrfjg6fjg7PjgpLlgZzmraLjgZnjgotcbiAgICAgICAgdGhpcy5fbW90aW9uTWFuYWdlci5zdG9wQWxsTW90aW9ucygpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG4gICAgICAgIHRoaXMuc2V0dXBUZXh0dXJlcygpO1xuICAgICAgICB0aGlzLmdldFJlbmRlcmVyKCkuc3RhcnRVcChnbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4bjgq/jgrnjg4Hjg6Pjg6bjg4vjg4Pjg4jjgavjg4bjgq/jgrnjg4Hjg6PjgpLjg63jg7zjg4njgZnjgotcbiAgICovXG4gIHByaXZhdGUgc2V0dXBUZXh0dXJlcygpOiB2b2lkIHtcbiAgICAvLyBpUGhvbmXjgafjga7jgqLjg6vjg5XjgqHlk4Hos6rlkJHkuIrjga7jgZ/jgoFUeXBlc2NyaXB044Gn44GvcHJlbXVsdGlwbGllZEFscGhh44KS5o6h55SoXG4gICAgY29uc3QgdXNlUHJlbXVsdGlwbHkgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX3N0YXRlID09IExvYWRTdGVwLkxvYWRUZXh0dXJlKSB7XG4gICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Poqq3jgb/ovrzjgb/nlKhcbiAgICAgIGNvbnN0IHRleHR1cmVDb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldFRleHR1cmVDb3VudCgpO1xuXG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgbW9kZWxUZXh0dXJlTnVtYmVyID0gMDtcbiAgICAgICAgbW9kZWxUZXh0dXJlTnVtYmVyIDwgdGV4dHVyZUNvdW50O1xuICAgICAgICBtb2RlbFRleHR1cmVOdW1iZXIrK1xuICAgICAgKSB7XG4gICAgICAgIC8vIOODhuOCr+OCueODgeODo+WQjeOBjOepuuaWh+Wtl+OBoOOBo+OBn+WgtOWQiOOBr+ODreODvOODieODu+ODkOOCpOODs+ODieWHpueQhuOCkuOCueOCreODg+ODl1xuICAgICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldFRleHR1cmVGaWxlTmFtZShtb2RlbFRleHR1cmVOdW1iZXIpID09ICcnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2dldFRleHR1cmVGaWxlTmFtZSBudWxsJyk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZWJHTOOBruODhuOCr+OCueODgeODo+ODpuODi+ODg+ODiOOBq+ODhuOCr+OCueODgeODo+OCkuODreODvOODieOBmeOCi1xuICAgICAgICBsZXQgdGV4dHVyZVBhdGggPVxuICAgICAgICAgIHRoaXMuX21vZGVsU2V0dGluZy5nZXRUZXh0dXJlRmlsZU5hbWUobW9kZWxUZXh0dXJlTnVtYmVyKTtcbiAgICAgICAgdGV4dHVyZVBhdGggPSB0aGlzLl9tb2RlbEhvbWVEaXIgKyB0ZXh0dXJlUGF0aDtcblxuICAgICAgICAvLyDjg63jg7zjg4nlrozkuobmmYLjgavlkbzjgbPlh7rjgZnjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcbiAgICAgICAgY29uc3Qgb25Mb2FkID0gKHRleHR1cmVJbmZvOiBUZXh0dXJlSW5mbyk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuZ2V0UmVuZGVyZXIoKS5iaW5kVGV4dHVyZShtb2RlbFRleHR1cmVOdW1iZXIsIHRleHR1cmVJbmZvLmlkKTtcblxuICAgICAgICAgIHRoaXMuX3RleHR1cmVDb3VudCsrO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3RleHR1cmVDb3VudCA+PSB0ZXh0dXJlQ291bnQpIHtcbiAgICAgICAgICAgIC8vIOODreODvOODieWujOS6hlxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Db21wbGV0ZVNldHVwO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyDoqq3jgb/ovrzjgb9cbiAgICAgICAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKClcbiAgICAgICAgICAuZ2V0VGV4dHVyZU1hbmFnZXIoKVxuICAgICAgICAgIC5jcmVhdGVUZXh0dXJlRnJvbVBuZ0ZpbGUodGV4dHVyZVBhdGgsIHVzZVByZW11bHRpcGx5LCBvbkxvYWQpO1xuICAgICAgICB0aGlzLmdldFJlbmRlcmVyKCkuc2V0SXNQcmVtdWx0aXBsaWVkQWxwaGEodXNlUHJlbXVsdGlwbHkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkVGV4dHVyZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44KS5YaN5qeL56+J44GZ44KLXG4gICAqL1xuICBwdWJsaWMgcmVsb2FkUmVuZGVyZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kZWxldGVSZW5kZXJlcigpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKTtcbiAgICB0aGlzLnNldHVwVGV4dHVyZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmm7TmlrBcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N0YXRlICE9IExvYWRTdGVwLkNvbXBsZXRlU2V0dXApIHJldHVybjtcblxuICAgIGNvbnN0IGRlbHRhVGltZVNlY29uZHM6IG51bWJlciA9IExBcHBQYWwuZ2V0RGVsdGFUaW1lKCk7XG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzICs9IGRlbHRhVGltZVNlY29uZHM7XG5cbiAgICB0aGlzLl9kcmFnTWFuYWdlci51cGRhdGUoZGVsdGFUaW1lU2Vjb25kcyk7XG4gICAgdGhpcy5fZHJhZ1ggPSB0aGlzLl9kcmFnTWFuYWdlci5nZXRYKCk7XG4gICAgdGhpcy5fZHJhZ1kgPSB0aGlzLl9kcmFnTWFuYWdlci5nZXRZKCk7XG5cbiAgICAvLyDjg6Ljg7zjgrfjg6fjg7Pjgavjgojjgovjg5Hjg6njg6Hjg7zjgr/mm7TmlrDjga7mnInnhKFcbiAgICBsZXQgbW90aW9uVXBkYXRlZCA9IGZhbHNlO1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuX21vZGVsLmxvYWRQYXJhbWV0ZXJzKCk7IC8vIOWJjeWbnuOCu+ODvOODluOBleOCjOOBn+eKtuaFi+OCkuODreODvOODiVxuICAgIGlmICh0aGlzLl9tb3Rpb25NYW5hZ2VyLmlzRmluaXNoZWQoKSkge1xuICAgICAgLy8g44Oi44O844K344On44Oz44Gu5YaN55Sf44GM44Gq44GE5aC05ZCI44CB5b6F5qmf44Oi44O844K344On44Oz44Gu5Lit44GL44KJ44Op44Oz44OA44Og44Gn5YaN55Sf44GZ44KLXG4gICAgICB0aGlzLnN0YXJ0UmFuZG9tTW90aW9uKFxuICAgICAgICBMQXBwRGVmaW5lLk1vdGlvbkdyb3VwSWRsZSxcbiAgICAgICAgTEFwcERlZmluZS5Qcmlvcml0eUlkbGVcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdGlvblVwZGF0ZWQgPSB0aGlzLl9tb3Rpb25NYW5hZ2VyLnVwZGF0ZU1vdGlvbihcbiAgICAgICAgdGhpcy5fbW9kZWwsXG4gICAgICAgIGRlbHRhVGltZVNlY29uZHNcbiAgICAgICk7IC8vIOODouODvOOCt+ODp+ODs+OCkuabtOaWsFxuICAgIH1cbiAgICB0aGlzLl9tb2RlbC5zYXZlUGFyYW1ldGVycygpOyAvLyDnirbmhYvjgpLkv53lrZhcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvL+e2geWumuWPg+aVuFxuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQW5nbGVYLCB0aGlzLmFuZ2xlWCk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1BbmdsZVksIHRoaXMuYW5nbGVZKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUFuZ2xlWiwgdGhpcy5hbmdsZVopO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtRXllTE9wZW4sIHRoaXMuZXllTE9wZW4pO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtRXllTFNtaWxlLCB0aGlzLmV5ZUxTbWlsZSk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1FeWVST3BlbiwgdGhpcy5leWVST3Blbik7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1FeWVSU21pbGUsIHRoaXMuZXllUlNtaWxlKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUV5ZUJhbGxYLCB0aGlzLmV5ZUJhbGxYKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUV5ZUJhbGxZLCB0aGlzLmV5ZUJhbGxZKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUV5ZUJhbGxGb3JtLCB0aGlzLmV5ZUJhbGxGb3JtKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUJyb3dMWSwgdGhpcy5icm93TFkpO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQnJvd1JZLCB0aGlzLmJyb3dSWSk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1Ccm93TFgsIHRoaXMuYnJvd0xYKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUJyb3dSWCwgdGhpcy5icm93UlgpO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQnJvd0xBbmdsZSwgdGhpcy5icm93TEFuZ2xlKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUJyb3dSQW5nbGUsIHRoaXMuYnJvd1JBbmdsZSk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1Ccm93TEZvcm0sIHRoaXMuYnJvd0xGb3JtKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUJyb3dSRm9ybSwgdGhpcy5icm93TEFuZ2xlKTtcbiAgICAvLyBtb3V0aCBmb3JtXG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1Nb3V0aEZvcm0sIHRoaXMubW91dGhGb3JtKTtcbiAgICAvL21vdXRoIG9wZW4gWVxuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtTW91dGhPcGVuWSwgdGhpcy5tb3V0aE9wZW5ZKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUNoZWVrLCB0aGlzLmNoZWVrKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUNoZWVrLCB0aGlzLmNoZWVrKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUJvZHlBbmdsZVgsIHRoaXMuYm9keUFuZ2xlWCk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1Cb2R5QW5nbGVZLCB0aGlzLmJvZHlBbmdsZVkpO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQm9keUFuZ2xlWiwgdGhpcy5ib2R5QW5nbGVaKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUJyZWF0aCwgdGhpcy5icmVhdGgpO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQXJtTEEsIHRoaXMuYXJtTEEpO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQXJtUkEsIHRoaXMuYXJtUkEpO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQXJtTEIsIHRoaXMuYXJtTEIpO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQXJtUkIsIHRoaXMuYXJtUkIpO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtSGFuZEwsIHRoaXMuaGFuZEwpO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtSGFuZFIsIHRoaXMuaGFuZFIpO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtSGFpckZyb250LCB0aGlzLmhhaXJGcm9udCk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1IYWlyU2lkZSwgdGhpcy5oYWlyU2lkZSk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1IYWlyQmFjaywgdGhpcy5oYWlyQmFjayk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1IYWlyRmx1ZmZ5LCB0aGlzLmhhaXJGbHVmZnkpO1xuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtU2hvdWxkZXJZLCB0aGlzLnNob3VsZGVyWSk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1CdXN0WCwgdGhpcy5idXN0WCk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1CdXN0WSwgdGhpcy5idXN0WSk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1CYXNlWCwgdGhpcy5iYXNlWCk7XG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1CYXNlWSwgdGhpcy5iYXNlWSk7XG5cblxuICAgIC8vIOOBvuOBsOOBn+OBjVxuICAgIGlmICghbW90aW9uVXBkYXRlZCkge1xuICAgICAgaWYgKHRoaXMuX2V5ZUJsaW5rICE9IG51bGwpIHtcbiAgICAgICAgLy8g44Oh44Kk44Oz44Oi44O844K344On44Oz44Gu5pu05paw44GM44Gq44GE44Go44GNXG4gICAgICAgIHRoaXMuX2V5ZUJsaW5rLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5fbW9kZWwsIGRlbHRhVGltZVNlY29uZHMpOyAvLyDnm67jg5Hjg4FcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXhwcmVzc2lvbk1hbmFnZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXhwcmVzc2lvbk1hbmFnZXIudXBkYXRlTW90aW9uKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTsgLy8g6KGo5oOF44Gn44OR44Op44Oh44O844K/5pu05paw77yI55u45a++5aSJ5YyW77yJXG4gICAgfVxuXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL5aSJ5YyWXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL6aGU44Gu5ZCR44GN44Gu6Kq/5pW0XG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1BbmdsZVgsIHRoaXMuX2RyYWdYICogMzApOyAvLyAtMzDjgYvjgokzMOOBruWApOOCkuWKoOOBiOOCi1xuICAgIHRoaXMuX21vZGVsLmFkZFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQW5nbGVZLCB0aGlzLl9kcmFnWSAqIDMwKTtcbiAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQoXG4gICAgICB0aGlzLl9pZFBhcmFtQW5nbGVaLFxuICAgICAgdGhpcy5fZHJhZ1ggKiB0aGlzLl9kcmFnWSAqIC0zMFxuICAgICk7XG5cbiAgICAvLyDjg4njg6njg4PjgrDjgavjgojjgovkvZPjga7lkJHjgY3jga7oqr/mlbRcbiAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQoXG4gICAgICB0aGlzLl9pZFBhcmFtQm9keUFuZ2xlWCxcbiAgICAgIHRoaXMuX2RyYWdYICogMTBcbiAgICApOyAvLyAtMTDjgYvjgokxMOOBruWApOOCkuWKoOOBiOOCi1xuXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL55uu44Gu5ZCR44GN44Gu6Kq/5pW0XG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1FeWVCYWxsWCwgdGhpcy5fZHJhZ1gpOyAvLyAtMeOBi+OCiTHjga7lgKTjgpLliqDjgYjjgotcbiAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUV5ZUJhbGxZLCB0aGlzLl9kcmFnWSk7XG5cbiAgICAvLyDlkbzlkLjjgarjgalcbiAgICBpZiAodGhpcy5fYnJlYXRoICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2JyZWF0aC51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICB9XG5cbiAgICAvLyDniannkIbmvJTnrpfjga7oqK3lrppcbiAgICAvKmlmICh0aGlzLl9waHlzaWNzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3BoeXNpY3MuZXZhbHVhdGUodGhpcy5fbW9kZWwsIGRlbHRhVGltZVNlY29uZHMpO1xuICAgIH0qL1xuXG4gICAgLy8g44Oq44OD44OX44K344Oz44Kv44Gu6Kit5a6aXG4gICAgaWYgKHRoaXMuX2xpcHN5bmMpIHtcbiAgICAgIGxldCB2YWx1ZSA9IDAuMDsgLy8g44Oq44Ki44Or44K/44Kk44Og44Gn44Oq44OD44OX44K344Oz44Kv44KS6KGM44GG5aC05ZCI44CB44K344K544OG44Og44GL44KJ6Z+z6YeP44KS5Y+W5b6X44GX44Gm44CBMH4x44Gu56+E5Zuy44Gn5YCk44KS5YWl5Yqb44GX44G+44GZ44CCXG5cbiAgICAgIHRoaXMuX3dhdkZpbGVIYW5kbGVyLnVwZGF0ZShkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICAgIHZhbHVlID0gdGhpcy5fd2F2RmlsZUhhbmRsZXIuZ2V0Um1zKCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGlwU3luY0lkcy5nZXRTaXplKCk7ICsraSkge1xuICAgICAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5fbGlwU3luY0lkcy5hdChpKSwgdmFsdWUsIDAuOCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g44Od44O844K644Gu6Kit5a6aXG4gICAgaWYgKHRoaXMuX3Bvc2UgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9zZS51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RlbC51cGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvJXmlbDjgafmjIflrprjgZfjgZ/jg6Ljg7zjgrfjg6fjg7Pjga7lho3nlJ/jgpLplovlp4vjgZnjgotcbiAgICogQHBhcmFtIGdyb3VwIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+WQjVxuICAgKiBAcGFyYW0gbm8g44Kw44Or44O844OX5YaF44Gu55Wq5Y+3XG4gICAqIEBwYXJhbSBwcmlvcml0eSDlhKrlhYjluqZcbiAgICogQHBhcmFtIG9uRmluaXNoZWRNb3Rpb25IYW5kbGVyIOODouODvOOCt+ODp+ODs+WGjeeUn+e1guS6huaZguOBq+WRvOOBs+WHuuOBleOCjOOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICAgKiBAcmV0dXJuIOmWi+Wni+OBl+OBn+ODouODvOOCt+ODp+ODs+OBruitmOWIpeeVquWPt+OCkui/lOOBmeOAguWAi+WIpeOBruODouODvOOCt+ODp+ODs+OBjOe1guS6huOBl+OBn+OBi+WQpuOBi+OCkuWIpOWumuOBmeOCi2lzRmluaXNoZWQoKeOBruW8leaVsOOBp+S9v+eUqOOBmeOCi+OAgumWi+Wni+OBp+OBjeOBquOBhOaZguOBr1stMV1cbiAgICovXG4gIHB1YmxpYyBzdGFydE1vdGlvbihcbiAgICBncm91cDogc3RyaW5nLFxuICAgIG5vOiBudW1iZXIsXG4gICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICBvbkZpbmlzaGVkTW90aW9uSGFuZGxlcj86IEZpbmlzaGVkTW90aW9uQ2FsbGJhY2tcbiAgKTogQ3ViaXNtTW90aW9uUXVldWVFbnRyeUhhbmRsZSB7XG4gICAgaWYgKHByaW9yaXR5ID09IExBcHBEZWZpbmUuUHJpb3JpdHlGb3JjZSkge1xuICAgICAgdGhpcy5fbW90aW9uTWFuYWdlci5zZXRSZXNlcnZlUHJpb3JpdHkocHJpb3JpdHkpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX21vdGlvbk1hbmFnZXIucmVzZXJ2ZU1vdGlvbihwcmlvcml0eSkpIHtcbiAgICAgIGlmICh0aGlzLl9kZWJ1Z01vZGUpIHtcbiAgICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoXCJbQVBQXWNhbid0IHN0YXJ0IG1vdGlvbi5cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gSW52YWxpZE1vdGlvblF1ZXVlRW50cnlIYW5kbGVWYWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBtb3Rpb25GaWxlTmFtZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25GaWxlTmFtZShncm91cCwgbm8pO1xuXG4gICAgLy8gZXgpIGlkbGVfMFxuICAgIGNvbnN0IG5hbWUgPSBgJHtncm91cH1fJHtub31gO1xuICAgIGxldCBtb3Rpb246IEN1YmlzbU1vdGlvbiA9IHRoaXMuX21vdGlvbnMuZ2V0VmFsdWUobmFtZSkgYXMgQ3ViaXNtTW90aW9uO1xuICAgIGxldCBhdXRvRGVsZXRlID0gZmFsc2U7XG5cbiAgICBpZiAobW90aW9uID09IG51bGwpIHtcbiAgICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke21vdGlvbkZpbGVOYW1lfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICBtb3Rpb24gPSB0aGlzLmxvYWRNb3Rpb24oXG4gICAgICAgICAgICBhcnJheUJ1ZmZlcixcbiAgICAgICAgICAgIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgb25GaW5pc2hlZE1vdGlvbkhhbmRsZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBmYWRlVGltZTogbnVtYmVyID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZhZGVJblRpbWVWYWx1ZShcbiAgICAgICAgICAgIGdyb3VwLFxuICAgICAgICAgICAgbm9cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKGZhZGVUaW1lID49IDAuMCkge1xuICAgICAgICAgICAgbW90aW9uLnNldEZhZGVJblRpbWUoZmFkZVRpbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZhZGVUaW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZhZGVPdXRUaW1lVmFsdWUoZ3JvdXAsIG5vKTtcbiAgICAgICAgICBpZiAoZmFkZVRpbWUgPj0gMC4wKSB7XG4gICAgICAgICAgICBtb3Rpb24uc2V0RmFkZU91dFRpbWUoZmFkZVRpbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1vdGlvbi5zZXRFZmZlY3RJZHModGhpcy5fZXllQmxpbmtJZHMsIHRoaXMuX2xpcFN5bmNJZHMpO1xuICAgICAgICAgIGF1dG9EZWxldGUgPSB0cnVlOyAvLyDntYLkuobmmYLjgavjg6Hjg6Ljg6rjgYvjgonliYrpmaRcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdGlvbi5zZXRGaW5pc2hlZE1vdGlvbkhhbmRsZXIob25GaW5pc2hlZE1vdGlvbkhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vdm9pY2VcbiAgICBjb25zdCB2b2ljZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Tb3VuZEZpbGVOYW1lKGdyb3VwLCBubyk7XG4gICAgaWYgKHZvaWNlLmxvY2FsZUNvbXBhcmUoJycpICE9IDApIHtcbiAgICAgIGxldCBwYXRoID0gdm9pY2U7XG4gICAgICBwYXRoID0gdGhpcy5fbW9kZWxIb21lRGlyICsgcGF0aDtcbiAgICAgIHRoaXMuX3dhdkZpbGVIYW5kbGVyLnN0YXJ0KHBhdGgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kZWJ1Z01vZGUpIHtcbiAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKGBbQVBQXXN0YXJ0IG1vdGlvbjogWyR7Z3JvdXB9XyR7bm99YCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9tb3Rpb25NYW5hZ2VyLnN0YXJ0TW90aW9uUHJpb3JpdHkoXG4gICAgICBtb3Rpb24sXG4gICAgICBhdXRvRGVsZXRlLFxuICAgICAgcHJpb3JpdHlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBq+mBuOOBsOOCjOOBn+ODouODvOOCt+ODp+ODs+OBruWGjeeUn+OCkumWi+Wni+OBmeOCi+OAglxuICAgKiBAcGFyYW0gZ3JvdXAg44Oi44O844K344On44Oz44Kw44Or44O844OX5ZCNXG4gICAqIEBwYXJhbSBwcmlvcml0eSDlhKrlhYjluqZcbiAgICogQHBhcmFtIG9uRmluaXNoZWRNb3Rpb25IYW5kbGVyIOODouODvOOCt+ODp+ODs+WGjeeUn+e1guS6huaZguOBq+WRvOOBs+WHuuOBleOCjOOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICAgKiBAcmV0dXJuIOmWi+Wni+OBl+OBn+ODouODvOOCt+ODp+ODs+OBruitmOWIpeeVquWPt+OCkui/lOOBmeOAguWAi+WIpeOBruODouODvOOCt+ODp+ODs+OBjOe1guS6huOBl+OBn+OBi+WQpuOBi+OCkuWIpOWumuOBmeOCi2lzRmluaXNoZWQoKeOBruW8leaVsOOBp+S9v+eUqOOBmeOCi+OAgumWi+Wni+OBp+OBjeOBquOBhOaZguOBr1stMV1cbiAgICovXG4gIHB1YmxpYyBzdGFydFJhbmRvbU1vdGlvbihcbiAgICBncm91cDogc3RyaW5nLFxuICAgIHByaW9yaXR5OiBudW1iZXIsXG4gICAgb25GaW5pc2hlZE1vdGlvbkhhbmRsZXI/OiBGaW5pc2hlZE1vdGlvbkNhbGxiYWNrXG4gICk6IEN1YmlzbU1vdGlvblF1ZXVlRW50cnlIYW5kbGUge1xuICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uQ291bnQoZ3JvdXApID09IDApIHtcbiAgICAgIHJldHVybiBJbnZhbGlkTW90aW9uUXVldWVFbnRyeUhhbmRsZVZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IG5vOiBudW1iZXIgPSBNYXRoLmZsb29yKFxuICAgICAgTWF0aC5yYW5kb20oKSAqIHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Db3VudChncm91cClcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RhcnRNb3Rpb24oZ3JvdXAsIG5vLCBwcmlvcml0eSwgb25GaW5pc2hlZE1vdGlvbkhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIOW8leaVsOOBp+aMh+WumuOBl+OBn+ihqOaDheODouODvOOCt+ODp+ODs+OCkuOCu+ODg+ODiOOBmeOCi1xuICAgKlxuICAgKiBAcGFyYW0gZXhwcmVzc2lvbklkIOihqOaDheODouODvOOCt+ODp+ODs+OBrklEXG4gICAqL1xuICBwdWJsaWMgc2V0RXhwcmVzc2lvbihleHByZXNzaW9uSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IG1vdGlvbjogQUN1YmlzbU1vdGlvbiA9IHRoaXMuX2V4cHJlc3Npb25zLmdldFZhbHVlKGV4cHJlc3Npb25JZCk7XG5cbiAgICBpZiAodGhpcy5fZGVidWdNb2RlKSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShgW0FQUF1leHByZXNzaW9uOiBbJHtleHByZXNzaW9uSWR9XWApO1xuICAgIH1cblxuICAgIGlmIChtb3Rpb24gIT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXhwcmVzc2lvbk1hbmFnZXIuc3RhcnRNb3Rpb25Qcmlvcml0eShcbiAgICAgICAgbW90aW9uLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgTEFwcERlZmluZS5Qcmlvcml0eUZvcmNlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fZGVidWdNb2RlKSB7XG4gICAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKGBbQVBQXWV4cHJlc3Npb25bJHtleHByZXNzaW9uSWR9XSBpcyBudWxsYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBq+mBuOOBsOOCjOOBn+ihqOaDheODouODvOOCt+ODp+ODs+OCkuOCu+ODg+ODiOOBmeOCi1xuICAgKi9cbiAgcHVibGljIHNldFJhbmRvbUV4cHJlc3Npb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2V4cHJlc3Npb25zLmdldFNpemUoKSA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm86IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX2V4cHJlc3Npb25zLmdldFNpemUoKSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2V4cHJlc3Npb25zLmdldFNpemUoKTsgaSsrKSB7XG4gICAgICBpZiAoaSA9PSBubykge1xuICAgICAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSB0aGlzLl9leHByZXNzaW9ucy5fa2V5VmFsdWVzW2ldLmZpcnN0O1xuICAgICAgICB0aGlzLnNldEV4cHJlc3Npb24obmFtZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Kk44OZ44Oz44OI44Gu55m654Gr44KS5Y+X44GR5Y+W44KLXG4gICAqL1xuICBwdWJsaWMgbW90aW9uRXZlbnRGaXJlZChldmVudFZhbHVlOiBjc21TdHJpbmcpOiB2b2lkIHtcbiAgICBDdWJpc21Mb2dJbmZvKCd7MH0gaXMgZmlyZWQgb24gTEFwcE1vZGVsISEnLCBldmVudFZhbHVlLnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOW9k+OBn+OCiuWIpOWumuODhuOCueODiFxuICAgKiDmjIflrprvvKnvvKTjga7poILngrnjg6rjgrnjg4jjgYvjgonnn6nlvaLjgpLoqIjnrpfjgZfjgIHluqfmqJnjgpLjgYznn6nlvaLnr4Tlm7LlhoXjgYvliKTlrprjgZnjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIGhpdEFyZW5hTmFtZSAg5b2T44Gf44KK5Yik5a6a44KS44OG44K544OI44GZ44KL5a++6LGh44GuSURcbiAgICogQHBhcmFtIHggICAgICAgICAgICAg5Yik5a6a44KS6KGM44GGWOW6p+aomVxuICAgKiBAcGFyYW0geSAgICAgICAgICAgICDliKTlrprjgpLooYzjgYZZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgaGl0VGVzdChoaXRBcmVuYU5hbWU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAvLyDpgI/mmI7mmYLjga/lvZPjgZ/jgorliKTlrprnhKHjgZfjgIJcbiAgICBpZiAodGhpcy5fb3BhY2l0eSA8IDEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEhpdEFyZWFzQ291bnQoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRIaXRBcmVhTmFtZShpKSA9PSBoaXRBcmVuYU5hbWUpIHtcbiAgICAgICAgY29uc3QgZHJhd0lkOiBDdWJpc21JZEhhbmRsZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRIaXRBcmVhSWQoaSk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSGl0KGRyYXdJZCwgeCwgeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODvOOCt+ODp+ODs+ODh+ODvOOCv+OCkuOCsOODq+ODvOODl+WQjeOBi+OCieS4gOaLrOOBp+ODreODvOODieOBmeOCi+OAglxuICAgKiDjg6Ljg7zjgrfjg6fjg7Pjg4fjg7zjgr/jga7lkI3liY3jga/lhoXpg6jjgadNb2RlbFNldHRpbmfjgYvjgonlj5blvpfjgZnjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIGdyb3VwIOODouODvOOCt+ODp+ODs+ODh+ODvOOCv+OBruOCsOODq+ODvOODl+WQjVxuICAgKi9cbiAgcHVibGljIHByZUxvYWRNb3Rpb25Hcm91cChncm91cDogc3RyaW5nKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uQ291bnQoZ3JvdXApOyBpKyspIHtcbiAgICAgIGNvbnN0IG1vdGlvbkZpbGVOYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZpbGVOYW1lKGdyb3VwLCBpKTtcblxuICAgICAgLy8gZXgpIGlkbGVfMFxuICAgICAgY29uc3QgbmFtZSA9IGAke2dyb3VwfV8ke2l9YDtcbiAgICAgIGlmICh0aGlzLl9kZWJ1Z01vZGUpIHtcbiAgICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoXG4gICAgICAgICAgYFtBUFBdbG9hZCBtb3Rpb246ICR7bW90aW9uRmlsZU5hbWV9ID0+IFske25hbWV9XWBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7bW90aW9uRmlsZU5hbWV9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgIGNvbnN0IHRtcE1vdGlvbjogQ3ViaXNtTW90aW9uID0gdGhpcy5sb2FkTW90aW9uKFxuICAgICAgICAgICAgYXJyYXlCdWZmZXIsXG4gICAgICAgICAgICBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBsZXQgZmFkZVRpbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uRmFkZUluVGltZVZhbHVlKGdyb3VwLCBpKTtcbiAgICAgICAgICBpZiAoZmFkZVRpbWUgPj0gMC4wKSB7XG4gICAgICAgICAgICB0bXBNb3Rpb24uc2V0RmFkZUluVGltZShmYWRlVGltZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmFkZVRpbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uRmFkZU91dFRpbWVWYWx1ZShncm91cCwgaSk7XG4gICAgICAgICAgaWYgKGZhZGVUaW1lID49IDAuMCkge1xuICAgICAgICAgICAgdG1wTW90aW9uLnNldEZhZGVPdXRUaW1lKGZhZGVUaW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG1wTW90aW9uLnNldEVmZmVjdElkcyh0aGlzLl9leWVCbGlua0lkcywgdGhpcy5fbGlwU3luY0lkcyk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbW90aW9ucy5nZXRWYWx1ZShuYW1lKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBBQ3ViaXNtTW90aW9uLmRlbGV0ZSh0aGlzLl9tb3Rpb25zLmdldFZhbHVlKG5hbWUpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tb3Rpb25zLnNldFZhbHVlKG5hbWUsIHRtcE1vdGlvbik7XG5cbiAgICAgICAgICB0aGlzLl9tb3Rpb25Db3VudCsrO1xuICAgICAgICAgIGlmICh0aGlzLl9tb3Rpb25Db3VudCA+PSB0aGlzLl9hbGxNb3Rpb25Db3VudCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkVGV4dHVyZTtcblxuICAgICAgICAgICAgLy8g5YWo44Gm44Gu44Oi44O844K344On44Oz44KS5YGc5q2i44GZ44KLXG4gICAgICAgICAgICB0aGlzLl9tb3Rpb25NYW5hZ2VyLnN0b3BBbGxNb3Rpb25zKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBUZXh0dXJlcygpO1xuICAgICAgICAgICAgdGhpcy5nZXRSZW5kZXJlcigpLnN0YXJ0VXAoZ2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOBmeOBueOBpuOBruODouODvOOCt+ODp+ODs+ODh+ODvOOCv+OCkuino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHJlbGVhc2VNb3Rpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuX21vdGlvbnMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhajjgabjga7ooajmg4Xjg4fjg7zjgr/jgpLop6PmlL7jgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlRXhwcmVzc2lvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fZXhwcmVzc2lvbnMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgovlh6bnkIbjgILjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgovnqbrplpPjga5WaWV3LVByb2plY3Rpb27ooYzliJfjgpLmuKHjgZnjgIJcbiAgICovXG4gIHB1YmxpYyBkb0RyYXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX21vZGVsID09IG51bGwpIHJldHVybjtcblxuICAgIC8vIOOCreODo+ODs+ODkOOCueOCteOCpOOCuuOCkua4oeOBmVxuICAgIGNvbnN0IHZpZXdwb3J0OiBudW1iZXJbXSA9IFswLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdO1xuXG4gICAgdGhpcy5nZXRSZW5kZXJlcigpLnNldFJlbmRlclN0YXRlKGZyYW1lQnVmZmVyLCB2aWV3cG9ydCk7XG4gICAgdGhpcy5nZXRSZW5kZXJlcigpLmRyYXdNb2RlbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODh+ODq+OCkuaPj+eUu+OBmeOCi+WHpueQhuOAguODouODh+ODq+OCkuaPj+eUu+OBmeOCi+epuumWk+OBrlZpZXctUHJvamVjdGlvbuihjOWIl+OCkua4oeOBmeOAglxuICAgKi9cbiAgcHVibGljIGRyYXcobWF0cml4OiBDdWJpc21NYXRyaXg0NCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9tb2RlbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g5ZCE6Kqt44G/6L6844G/57WC5LqG5b6MXG4gICAgaWYgKHRoaXMuX3N0YXRlID09IExvYWRTdGVwLkNvbXBsZXRlU2V0dXApIHtcbiAgICAgIG1hdHJpeC5tdWx0aXBseUJ5TWF0cml4KHRoaXMuX21vZGVsTWF0cml4KTtcblxuICAgICAgdGhpcy5nZXRSZW5kZXJlcigpLnNldE12cE1hdHJpeChtYXRyaXgpO1xuXG4gICAgICB0aGlzLmRvRHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fbW90aW9uU291bmRzID0gbmV3IE1hcCgpO1xuXG4gICAgdGhpcy5fbW9kZWxTZXR0aW5nID0gbnVsbDtcbiAgICB0aGlzLl9tb2RlbEhvbWVEaXIgPSBudWxsO1xuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyA9IDAuMDtcblxuICAgIHRoaXMuX2V5ZUJsaW5rSWRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT4oKTtcbiAgICB0aGlzLl9saXBTeW5jSWRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT4oKTtcblxuICAgIHRoaXMuX21vdGlvbnMgPSBuZXcgY3NtTWFwPHN0cmluZywgQUN1YmlzbU1vdGlvbj4oKTtcbiAgICB0aGlzLl9leHByZXNzaW9ucyA9IG5ldyBjc21NYXA8c3RyaW5nLCBBQ3ViaXNtTW90aW9uPigpO1xuXG4gICAgdGhpcy5faGl0QXJlYSA9IG5ldyBjc21WZWN0b3I8Y3NtUmVjdD4oKTtcbiAgICB0aGlzLl91c2VyQXJlYSA9IG5ldyBjc21WZWN0b3I8Y3NtUmVjdD4oKTtcblxuICAgIHRoaXMuX2lkUGFyYW1BbmdsZVggPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1BbmdsZVhcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1BbmdsZVkgPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1BbmdsZVlcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1BbmdsZVogPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1BbmdsZVpcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1FeWVCYWxsWCA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgIEN1YmlzbURlZmF1bHRQYXJhbWV0ZXJJZC5QYXJhbUV5ZUJhbGxYXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtRXllQmFsbFkgPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1FeWVCYWxsWVxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUJvZHlBbmdsZVggPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1Cb2R5QW5nbGVYXG4gICAgKTtcblxuICAgIHRoaXMuX2lkUGFyYW1FeWVMT3BlbiA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgIEN1YmlzbURlZmF1bHRQYXJhbWV0ZXJJZC5QYXJhbUV5ZUxPcGVuXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtRXllTFNtaWxlID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtRXllTFNtaWxlXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtRXllUk9wZW4gPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1FeWVST3BlblxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUV5ZVJTbWlsZSA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgIEN1YmlzbURlZmF1bHRQYXJhbWV0ZXJJZC5QYXJhbUV5ZVJTbWlsZVxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUV5ZUJhbGxGb3JtID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtRXllQmFsbEZvcm1cbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1Ccm93TFkgPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1Ccm93TFlcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1Ccm93UlkgPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1Ccm93UllcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1Ccm93TFggPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1Ccm93TFhcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1Ccm93UlggPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1Ccm93UlhcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1Ccm93TEFuZ2xlID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQnJvd0xBbmdsZVxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUJyb3dSQW5nbGUgPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1Ccm93UkFuZ2xlXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtQnJvd0xGb3JtID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQnJvd0xGb3JtXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtQnJvd1JGb3JtID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQnJvd1JGb3JtXG4gICAgKTtcbiAgICAvL21vdXRoIGZvcm1cbiAgICB0aGlzLl9pZFBhcmFtTW91dGhGb3JtID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtTW91dGhGb3JtXG4gICAgKTtcbiAgICAvLyBtb3V0aCBvcGVuWVxuICAgIHRoaXMuX2lkUGFyYW1Nb3V0aE9wZW5ZID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtTW91dGhPcGVuWVxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUNoZWVrID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQ2hlZWtcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1Cb2R5QW5nbGVZID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQm9keUFuZ2xlWVxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUJvZHlBbmdsZVogPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1Cb2R5QW5nbGVaXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtQnJlYXRoID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQnJlYXRoXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtQXJtTEEgPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1Bcm1MQVxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUFybVJBID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQXJtUkFcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1Bcm1MQiA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgIEN1YmlzbURlZmF1bHRQYXJhbWV0ZXJJZC5QYXJhbUFybUxCXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtQXJtUkIgPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1Bcm1SQlxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUhhbmRMID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtSGFuZExcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1IYW5kUiA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgIEN1YmlzbURlZmF1bHRQYXJhbWV0ZXJJZC5QYXJhbUhhbmRSXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtSGFpckZyb250ID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtSGFpckZyb250XG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtSGFpclNpZGUgPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1IYWlyU2lkZVxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUhhaXJCYWNrID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtSGFpckJhY2tcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1IYWlyRmx1ZmZ5ID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtSGFpckZsdWZmeVxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbVNob3VsZGVyWSA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgIEN1YmlzbURlZmF1bHRQYXJhbWV0ZXJJZC5QYXJhbVNob3VsZGVyWVxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUJ1c3RYID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQnVzdFhcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1CdXN0WSA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgIEN1YmlzbURlZmF1bHRQYXJhbWV0ZXJJZC5QYXJhbUJ1c3RZXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtQmFzZVggPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1CYXNlWFxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUJhc2VZID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQmFzZVlcbiAgICApO1xuXG5cbiAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRBc3NldHM7XG4gICAgdGhpcy5fZXhwcmVzc2lvbkNvdW50ID0gMDtcbiAgICB0aGlzLl90ZXh0dXJlQ291bnQgPSAwO1xuICAgIHRoaXMuX21vdGlvbkNvdW50ID0gMDtcbiAgICB0aGlzLl9hbGxNb3Rpb25Db3VudCA9IDA7XG4gICAgdGhpcy5fd2F2RmlsZUhhbmRsZXIgPSBuZXcgTEFwcFdhdkZpbGVIYW5kbGVyKCk7XG4gIH1cblxuICBfaWRQYXJhbUV5ZUxPcGVuOiBDdWJpc21JZEhhbmRsZTtcbiAgX2lkUGFyYW1FeWVMU21pbGU6IEN1YmlzbUlkSGFuZGxlO1xuICBfaWRQYXJhbUV5ZVJPcGVuOiBDdWJpc21JZEhhbmRsZTtcbiAgX2lkUGFyYW1FeWVSU21pbGU6IEN1YmlzbUlkSGFuZGxlO1xuICBfaWRQYXJhbUV5ZUJhbGxGb3JtOiBDdWJpc21JZEhhbmRsZTtcbiAgX2lkUGFyYW1Ccm93TFk6IEN1YmlzbUlkSGFuZGxlO1xuICBfaWRQYXJhbUJyb3dSWTogQ3ViaXNtSWRIYW5kbGU7XG4gIF9pZFBhcmFtQnJvd0xYOiBDdWJpc21JZEhhbmRsZTtcbiAgX2lkUGFyYW1Ccm93Ulg6IEN1YmlzbUlkSGFuZGxlO1xuICBfaWRQYXJhbUJyb3dMQW5nbGU6IEN1YmlzbUlkSGFuZGxlO1xuICBfaWRQYXJhbUJyb3dSQW5nbGU6IEN1YmlzbUlkSGFuZGxlO1xuICBfaWRQYXJhbUJyb3dMRm9ybTogQ3ViaXNtSWRIYW5kbGU7XG4gIF9pZFBhcmFtQnJvd1JGb3JtOiBDdWJpc21JZEhhbmRsZTtcbiAgX2lkUGFyYW1Nb3V0aEZvcm06IEN1YmlzbUlkSGFuZGxlOy8vbW91dGggZm9ybVxuICBfaWRQYXJhbU1vdXRoT3Blblk6IEN1YmlzbUlkSGFuZGxlOy8vbW91dGggb3BlbllcbiAgX2lkUGFyYW1DaGVlazogQ3ViaXNtSWRIYW5kbGU7XG4gIF9pZFBhcmFtQm9keUFuZ2xlWTogQ3ViaXNtSWRIYW5kbGU7XG4gIF9pZFBhcmFtQm9keUFuZ2xlWjogQ3ViaXNtSWRIYW5kbGU7XG4gIF9pZFBhcmFtQnJlYXRoOiBDdWJpc21JZEhhbmRsZTtcbiAgX2lkUGFyYW1Bcm1MQTogQ3ViaXNtSWRIYW5kbGU7XG4gIF9pZFBhcmFtQXJtUkE6IEN1YmlzbUlkSGFuZGxlO1xuICBfaWRQYXJhbUFybUxCOiBDdWJpc21JZEhhbmRsZTtcbiAgX2lkUGFyYW1Bcm1SQjogQ3ViaXNtSWRIYW5kbGU7XG4gIF9pZFBhcmFtSGFuZEw6IEN1YmlzbUlkSGFuZGxlO1xuICBfaWRQYXJhbUhhbmRSOiBDdWJpc21JZEhhbmRsZTtcbiAgX2lkUGFyYW1IYWlyRnJvbnQ6IEN1YmlzbUlkSGFuZGxlO1xuICBfaWRQYXJhbUhhaXJTaWRlOiBDdWJpc21JZEhhbmRsZTtcbiAgX2lkUGFyYW1IYWlyQmFjazogQ3ViaXNtSWRIYW5kbGU7XG4gIF9pZFBhcmFtSGFpckZsdWZmeTogQ3ViaXNtSWRIYW5kbGU7XG4gIF9pZFBhcmFtU2hvdWxkZXJZOiBDdWJpc21JZEhhbmRsZTtcbiAgX2lkUGFyYW1CdXN0WDogQ3ViaXNtSWRIYW5kbGU7XG4gIF9pZFBhcmFtQnVzdFk6IEN1YmlzbUlkSGFuZGxlO1xuICBfaWRQYXJhbUJhc2VYOiBDdWJpc21JZEhhbmRsZTtcbiAgX2lkUGFyYW1CYXNlWTogQ3ViaXNtSWRIYW5kbGU7XG5cblxuICBfbW9kZWxTZXR0aW5nOiBJQ3ViaXNtTW9kZWxTZXR0aW5nOyAvLyDjg6Ljg4fjg6vjgrvjg4Pjg4bjgqPjg7PjgrDmg4XloLFcbiAgX21vZGVsSG9tZURpcjogc3RyaW5nOyAvLyDjg6Ljg4fjg6vjgrvjg4Pjg4bjgqPjg7PjgrDjgYznva7jgYvjgozjgZ/jg4fjgqPjg6zjgq/jg4jjg6pcbiAgX3VzZXJUaW1lU2Vjb25kczogbnVtYmVyOyAvLyDjg4fjg6vjgr/mmYLplpPjga7nqY3nrpflgKRb56eSXVxuXG4gIF9leWVCbGlua0lkczogY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPjsgLy8g44Oi44OH44Or44Gr6Kit5a6a44GV44KM44Gf556s44GN5qmf6IO955So44OR44Op44Oh44O844K/SURcbiAgX2xpcFN5bmNJZHM6IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT47IC8vIOODouODh+ODq+OBq+ioreWumuOBleOCjOOBn+ODquODg+ODl+OCt+ODs+OCr+apn+iDveeUqOODkeODqeODoeODvOOCv0lEXG5cbiAgX21vdGlvbnM6IGNzbU1hcDxzdHJpbmcsIEFDdWJpc21Nb3Rpb24+OyAvLyDoqq3jgb/ovrzjgb7jgozjgabjgYTjgovjg6Ljg7zjgrfjg6fjg7Pjga7jg6rjgrnjg4hcbiAgX2V4cHJlc3Npb25zOiBjc21NYXA8c3RyaW5nLCBBQ3ViaXNtTW90aW9uPjsgLy8g6Kqt44G/6L6844G+44KM44Gm44GE44KL6KGo5oOF44Gu44Oq44K544OIXG5cbiAgX2hpdEFyZWE6IGNzbVZlY3Rvcjxjc21SZWN0PjtcbiAgX3VzZXJBcmVhOiBjc21WZWN0b3I8Y3NtUmVjdD47XG5cbiAgX2lkUGFyYW1BbmdsZVg6IEN1YmlzbUlkSGFuZGxlOyAvLyDjg5Hjg6njg6Hjg7zjgr9JRDogUGFyYW1BbmdsZVhcbiAgX2lkUGFyYW1BbmdsZVk6IEN1YmlzbUlkSGFuZGxlOyAvLyDjg5Hjg6njg6Hjg7zjgr9JRDogUGFyYW1BbmdsZVlcbiAgX2lkUGFyYW1BbmdsZVo6IEN1YmlzbUlkSGFuZGxlOyAvLyDjg5Hjg6njg6Hjg7zjgr9JRDogUGFyYW1BbmdsZVpcbiAgX2lkUGFyYW1FeWVCYWxsWDogQ3ViaXNtSWRIYW5kbGU7IC8vIOODkeODqeODoeODvOOCv0lEOiBQYXJhbUV5ZUJhbGxYXG4gIF9pZFBhcmFtRXllQmFsbFk6IEN1YmlzbUlkSGFuZGxlOyAvLyDjg5Hjg6njg6Hjg7zjgr9JRDogUGFyYW1FeWVCQWxsWVxuICBfaWRQYXJhbUJvZHlBbmdsZVg6IEN1YmlzbUlkSGFuZGxlOyAvLyDjg5Hjg6njg6Hjg7zjgr9JRDogUGFyYW1Cb2R5QW5nbGVYXG5cbiAgX3N0YXRlOiBudW1iZXI7IC8vIOePvuWcqOOBruOCueODhuODvOOCv+OCueeuoeeQhueUqFxuICBfZXhwcmVzc2lvbkNvdW50OiBudW1iZXI7IC8vIOihqOaDheODh+ODvOOCv+OCq+OCpuODs+ODiFxuICBfdGV4dHVyZUNvdW50OiBudW1iZXI7IC8vIOODhuOCr+OCueODgeODo+OCq+OCpuODs+ODiFxuICBfbW90aW9uQ291bnQ6IG51bWJlcjsgLy8g44Oi44O844K344On44Oz44OH44O844K/44Kr44Km44Oz44OIXG4gIF9hbGxNb3Rpb25Db3VudDogbnVtYmVyOyAvLyDjg6Ljg7zjgrfjg6fjg7Pnt4/mlbBcbiAgX3dhdkZpbGVIYW5kbGVyOiBMQXBwV2F2RmlsZUhhbmRsZXI7IC8vd2F244OV44Kh44Kk44Or44OP44Oz44OJ44OpXG5cbiAgLy/lj4PmlbjmlbjlgLzliJ3lp4tcbiAgcHVibGljIGFuZ2xlWDpudW1iZXIgPSAwO1xuICBwdWJsaWMgYW5nbGVZOm51bWJlciA9IDA7XG4gIHB1YmxpYyBhbmdsZVo6bnVtYmVyID0gMDtcbiAgcHVibGljIGV5ZUxPcGVuOm51bWJlciA9IDA7XG4gIHB1YmxpYyBleWVMU21pbGU6bnVtYmVyID0gMDtcbiAgcHVibGljIGV5ZVJPcGVuOm51bWJlciA9IDA7XG4gIHB1YmxpYyBleWVSU21pbGU6bnVtYmVyID0gMDtcbiAgcHVibGljIGV5ZUJhbGxYOm51bWJlciA9IDA7XG4gIHB1YmxpYyBleWVCYWxsWTpudW1iZXIgPSAwO1xuICBwdWJsaWMgZXllQmFsbEZvcm06bnVtYmVyPTA7XG4gIHB1YmxpYyBicm93TFk6bnVtYmVyPTA7XG4gIHB1YmxpYyBicm93Ulk6bnVtYmVyPTA7XG4gIHB1YmxpYyBicm93TFg6bnVtYmVyPTA7XG4gIHB1YmxpYyBicm93Ulg6bnVtYmVyPTA7XG4gIHB1YmxpYyBicm93TEFuZ2xlOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd1JBbmdsZTpudW1iZXI9MDtcbiAgcHVibGljIGJyb3dMRm9ybTpudW1iZXI9MDtcbiAgcHVibGljIGJyb3dSRm9ybTpudW1iZXI9MDtcbiAgLy9tb3V0aCBmb3JtXG4gIHB1YmxpYyBtb3V0aEZvcm06IG51bWJlciA9IDA7XG4gIC8vbW91dGggb3BlbllcbiAgcHVibGljIG1vdXRoT3Blblk6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBjaGVlazpudW1iZXI9MDtcbiAgcHVibGljIGJvZHlBbmdsZVg6bnVtYmVyID0gMDtcbiAgcHVibGljIGJvZHlBbmdsZVk6bnVtYmVyID0gMDtcbiAgcHVibGljIGJvZHlBbmdsZVo6bnVtYmVyID0gMDtcbiAgcHVibGljIGJyZWF0aDpudW1iZXI9MDtcbiAgcHVibGljIGFybUxBOm51bWJlcj0wO1xuICBwdWJsaWMgYXJtUkE6bnVtYmVyPTA7XG4gIHB1YmxpYyBhcm1MQjpudW1iZXI9MDtcbiAgcHVibGljIGFybVJCOm51bWJlcj0wO1xuICBwdWJsaWMgaGFuZEw6bnVtYmVyPTA7XG4gIHB1YmxpYyBoYW5kUjpudW1iZXI9MDtcbiAgcHVibGljIGhhaXJGcm9udDpudW1iZXI9MDtcbiAgcHVibGljIGhhaXJTaWRlOm51bWJlcj0wO1xuICBwdWJsaWMgaGFpckJhY2s6bnVtYmVyPTA7XG4gIHB1YmxpYyBoYWlyRmx1ZmZ5Om51bWJlcj0wO1xuICBwdWJsaWMgc2hvdWxkZXJZOm51bWJlcj0wO1xuICBwdWJsaWMgYnVzdFg6bnVtYmVyPTA7XG4gIHB1YmxpYyBidXN0WTpudW1iZXI9MDtcbiAgcHVibGljIGJhc2VYOm51bWJlcj0wO1xuICBwdWJsaWMgYmFzZVk6bnVtYmVyPTA7XG5cbiAgX21vdGlvblNvdW5kOiBNYXA8U3RyaW5nLCBhbnk+O1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImY0M2UxOTlmNmRhYzcxNWRkMzdkXCI7IH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=