"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultFactoryProvider_1 = require("./DefaultFactoryProvider");
var StoryBuilder = /** @class */ (function () {
    function StoryBuilder() {
        this.factory = new DefaultFactoryProvider_1.DefaultFactoryProvider();
        /*
        */
    }
    StoryBuilder.prototype.setFactoryProvider = function (factory) {
        this.factory = factory;
    };
    return StoryBuilder;
}());
exports.StoryBuilder = StoryBuilder;
