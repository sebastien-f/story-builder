"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultTakeBuilder = /** @class */ (function () {
    function DefaultTakeBuilder(takeData, factoryProvider) {
        this.takeData = takeData;
        this.factoryProvider = factoryProvider;
        this.actorActions = [];
    }
    DefaultTakeBuilder.prototype.actor = function (actorData, callback) {
        var actorActions = this.factoryProvider.actorActionBuilderFactory(actorData);
        callback(actorActions);
        this.actorActions.push(actorActions);
        return this;
    };
    return DefaultTakeBuilder;
}());
exports.DefaultTakeBuilder = DefaultTakeBuilder;
