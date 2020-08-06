declare abstract class ActionBuilder<T> {
    private _actorActionBuilderActions;
    protected addAction(action: T): ActionBuilder<T>;
}
export { ActionBuilder, };
