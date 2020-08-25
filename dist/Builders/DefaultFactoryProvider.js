"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFactoryProvider = void 0;
var SequenceBuilder_1 = require("./SequenceBuilder");
var TakeBuilder_1 = require("./TakeBuilder");
var ActorActionBuilder_1 = require("./ActorActionBuilder");
var PlotTwistBuilder_1 = require("./PlotTwistBuilder");
var PlotMergeBuilder_1 = require("./PlotMergeBuilder");
var DefaultFactoryProvider = /** @class */ (function () {
    function DefaultFactoryProvider() {
        var _this = this;
        this._takeBuilderFactory = function (takeData) { return new TakeBuilder_1.DefaultTakeBuilder(takeData, _this); };
        this._actorActionBuilderFactory = function (actorData) { return new ActorActionBuilder_1.DefaultActorActionBuilder(actorData, _this); };
        this._sequenceBuilderFactory = function (sequenceData) { return new SequenceBuilder_1.DefaultSequenceBuilder(sequenceData, _this); };
        this._twistFactory = function (twistData) { return new PlotTwistBuilder_1.DefaultPlotTwistBuilder(twistData, _this); };
        this._mergeFactory = function (twistData) { return new PlotMergeBuilder_1.DefaultPlotMergeBuilder(twistData, _this); };
    }
    DefaultFactoryProvider.prototype.setTakeBuilderFactory = function (factory) {
        this._takeBuilderFactory = factory;
    };
    DefaultFactoryProvider.prototype.setActorActionBuilderFactory = function (factory) {
        this._actorActionBuilderFactory = factory;
    };
    DefaultFactoryProvider.prototype.setSequenceBuilderFactory = function (sequenceBuilderFactory) {
        this._sequenceBuilderFactory = sequenceBuilderFactory;
    };
    DefaultFactoryProvider.prototype.setTwistBuilderFactory = function (factory) {
        this._twistFactory = factory;
    };
    DefaultFactoryProvider.prototype.setMergeBuilderFactory = function (factory) {
        this._mergeFactory = factory;
    };
    DefaultFactoryProvider.prototype.sequenceBuilderFactory = function (sequenceData) {
        return this._sequenceBuilderFactory(sequenceData);
    };
    DefaultFactoryProvider.prototype.takeBuilderFactory = function (takeData) {
        return this._takeBuilderFactory(takeData);
    };
    DefaultFactoryProvider.prototype.actorActionBuilderFactory = function (actorData) {
        return this._actorActionBuilderFactory(actorData);
    };
    DefaultFactoryProvider.prototype.twistBuilderFactory = function (twistData) {
        return this._twistFactory(twistData);
    };
    DefaultFactoryProvider.prototype.mergeBuilderFactory = function (mergeData) {
        return this._mergeFactory(mergeData);
    };
    return DefaultFactoryProvider;
}());
exports.DefaultFactoryProvider = DefaultFactoryProvider;
