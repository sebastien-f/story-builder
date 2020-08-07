"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionBuilder = void 0;
var ActionBuilder = /** @class */ (function () {
    function ActionBuilder() {
        this._actorActionBuilderActions = [];
    }
    ActionBuilder.prototype.addAction = function (action) {
        this._actorActionBuilderActions.push(action);
        return this;
    };
    return ActionBuilder;
}());
exports.ActionBuilder = ActionBuilder;
