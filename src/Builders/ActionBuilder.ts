abstract class ActionBuilder<T> {
    private _actorActionBuilderActions:Array<T> = [];

    protected addAction(action:T):ActionBuilder<T> {
        this._actorActionBuilderActions.push(action);
        return this;
    }

}

export {
    ActionBuilder,
}