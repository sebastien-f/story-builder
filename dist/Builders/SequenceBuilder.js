"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSequenceBuilder = void 0;
var DefaultSequenceBuilder = /** @class */ (function () {
    function DefaultSequenceBuilder(sequenceData, factoryProvider) {
        this.sequenceData = sequenceData;
        this.factoryProvider = factoryProvider;
        this.nodes = [];
    }
    DefaultSequenceBuilder.prototype.take = function (takeData, callback) {
        var take = this.factoryProvider.takeBuilderFactory(takeData);
        callback(take);
        if (this.nodes && this.nodes.length) {
            if (this.nodes[this.nodes.length - 1].type == "plotTwist")
                throw new Error("A take can't follow a plot twist. It needs a PlotMerge.");
        }
        this.nodes.push({
            type: "take",
            take: take,
        });
        return this;
    };
    DefaultSequenceBuilder.prototype.twist = function (twistData, callback) {
        var twist = this.factoryProvider.twistBuilderFactory(twistData);
        callback(twist);
        if (this.nodes && this.nodes.length) {
            if (this.nodes[this.nodes.length - 1].type == "plotTwist")
                throw new Error("A take can't follow a plot twist. It needs a PlotMerge.");
        }
        this.nodes.push({
            type: "plotTwist",
            twist: twist
        });
        return this;
    };
    return DefaultSequenceBuilder;
}());
exports.DefaultSequenceBuilder = DefaultSequenceBuilder;
