"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultPlotTwistBuilder = void 0;
var DefaultPlotTwistBuilder = /** @class */ (function () {
    function DefaultPlotTwistBuilder(sequenceData, factoryProvider) {
        this.sequenceData = sequenceData;
        this.factoryProvider = factoryProvider;
        this.twists = [];
    }
    DefaultPlotTwistBuilder.prototype.takeIf = function (conditions, takeData, callback) {
        var take = this.factoryProvider.takeBuilderFactory(takeData);
        callback(take);
        this.twists.push({});
        return this;
    };
    return DefaultPlotTwistBuilder;
}());
exports.DefaultPlotTwistBuilder = DefaultPlotTwistBuilder;
