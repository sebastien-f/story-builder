"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StoryBuilderBase = /** @class */ (function () {
    function StoryBuilderBase() {
    }
    Object.defineProperty(StoryBuilderBase.prototype, "factory", {
        get: function () {
            return this._factory;
        },
        enumerable: true,
        configurable: true
    });
    StoryBuilderBase.prototype.setFactoryProvider = function (factory) {
        this._factory = factory;
    };
    return StoryBuilderBase;
}());
exports.StoryBuilderBase = StoryBuilderBase;
