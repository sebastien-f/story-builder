"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryBuilderBase = void 0;
var StoryBuilderBase = /** @class */ (function () {
    function StoryBuilderBase() {
    }
    Object.defineProperty(StoryBuilderBase.prototype, "factory", {
        get: function () {
            return this._factory;
        },
        enumerable: false,
        configurable: true
    });
    StoryBuilderBase.prototype.setFactoryProvider = function (factory) {
        this._factory = factory;
    };
    return StoryBuilderBase;
}());
exports.StoryBuilderBase = StoryBuilderBase;
