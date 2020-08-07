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
exports.DefaultActorActionBuilder = exports.ActorActionBuilder = void 0;
var ActorAction_1 = require("./ActorAction");
var ActorActionBuilder = /** @class */ (function () {
    function ActorActionBuilder() {
        this.actions = [];
    }
    ActorActionBuilder.prototype.addAction = function (action) {
        this.actions.push(action);
    };
    return ActorActionBuilder;
}());
exports.ActorActionBuilder = ActorActionBuilder;
var DefaultActorActionBuilder = /** @class */ (function (_super) {
    __extends(DefaultActorActionBuilder, _super);
    function DefaultActorActionBuilder(actorData, factory) {
        var _this = _super.call(this) || this;
        _this.actorData = actorData;
        _this.factory = factory;
        return _this;
    }
    DefaultActorActionBuilder.prototype.says = function (text) {
        this.addAction(new ActorAction_1.ActorAction({
            type: "actor.say",
            text: text
        }));
        return this;
    };
    return DefaultActorActionBuilder;
}(ActorActionBuilder));
exports.DefaultActorActionBuilder = DefaultActorActionBuilder;
