"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultFactoryProvider_1 = require("./DefaultFactoryProvider");
var StoryBuilderBase_1 = require("./StoryBuilderBase");
/** StoryBuilder that has only a collection of sequences */
var ShortStoryBuilder = /** @class */ (function (_super) {
    __extends(ShortStoryBuilder, _super);
    function ShortStoryBuilder(factoryProvider) {
        if (factoryProvider === void 0) { factoryProvider = new DefaultFactoryProvider_1.DefaultFactoryProvider(); }
        var _this = _super.call(this) || this;
        _this.sequences = [];
        _this.setFactoryProvider(factoryProvider);
        return _this;
    }
    ShortStoryBuilder.prototype.sequence = function (sequenceData, callback) {
        var sequenceBuilder = this.factory.sequenceBuilderFactory(sequenceData);
        callback(sequenceBuilder);
        this.sequences.push(sequenceBuilder);
        return this;
    };
    return ShortStoryBuilder;
}(StoryBuilderBase_1.StoryBuilderBase));
exports.ShortStoryBuilder = ShortStoryBuilder;
