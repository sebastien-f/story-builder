"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultSequenceBuilder = /** @class */ (function () {
    function DefaultSequenceBuilder(sequenceData, factoryProvider) {
        this.sequenceData = sequenceData;
        this.factoryProvider = factoryProvider;
        this.takes = [];
    }
    DefaultSequenceBuilder.prototype.take = function (takeData, callback) {
        var take = this.factoryProvider.takeBuilderFactory(takeData);
        callback(take);
        this.takes.push(take);
        return this;
    };
    return DefaultSequenceBuilder;
}());
exports.DefaultSequenceBuilder = DefaultSequenceBuilder;
