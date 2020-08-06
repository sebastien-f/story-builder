"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SequenceBuilder_1 = require("./SequenceBuilder");
var TakeBuilder_1 = require("./TakeBuilder");
var ActorActionBuilder_1 = require("./ActorActionBuilder");
var DefaultFactoryProvider = /** @class */ (function () {
    function DefaultFactoryProvider() {
        var _this = this;
        this._takeBuilderFactory = function (takeData) { return new TakeBuilder_1.DefaultTakeBuilder(takeData, _this); };
        this._actorActionBuilderFactory = function (actorData) { return new ActorActionBuilder_1.DefaultActorActionBuilder(actorData, _this); };
        this._sequenceBuilderFactory = function (sequenceData) { return new SequenceBuilder_1.DefaultSequenceBuilder(sequenceData, _this); };
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
    DefaultFactoryProvider.prototype.sequenceBuilderFactory = function (sequenceData) {
        return this._sequenceBuilderFactory(sequenceData);
    };
    DefaultFactoryProvider.prototype.takeBuilderFactory = function (takeData) {
        return this._takeBuilderFactory(takeData);
    };
    DefaultFactoryProvider.prototype.actorActionBuilderFactory = function (actorData) {
        return this._actorActionBuilderFactory(actorData);
    };
    return DefaultFactoryProvider;
}());
exports.DefaultFactoryProvider = DefaultFactoryProvider;
