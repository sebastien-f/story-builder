"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultPlotMergeBuilder = void 0;
var DefaultPlotMergeBuilder = /** @class */ (function () {
    function DefaultPlotMergeBuilder(sequenceData, factoryProvider) {
        this.sequenceData = sequenceData;
        this.factoryProvider = factoryProvider;
        this.twists = [];
    }
    DefaultPlotMergeBuilder.prototype.mergeFrom = function () {
        this.factoryProvider.actorActionBuilderFactory(null);
        return this;
    };
    return DefaultPlotMergeBuilder;
}());
exports.DefaultPlotMergeBuilder = DefaultPlotMergeBuilder;
