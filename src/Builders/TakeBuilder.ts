import { IFactoryProvider, ITakeBuilder, IActorActionBuilder, TypedBuilderCallback } from "./interfaces";

class DefaultTakeBuilder implements ITakeBuilder {
    public constructor(public takeData:any, private factoryProvider:IFactoryProvider) {

    }

    public actorActions:Array<IActorActionBuilder> = [];

    actor<TActor extends IActorActionBuilder, TActorData = any>(actorData: TActorData, callback: TypedBuilderCallback<TActor>): ITakeBuilder {
        const actorActions = this.factoryProvider.actorActionBuilderFactory(actorData);
        callback(actorActions as any as TActor);
        this.actorActions.push(actorActions);
        return this;
    }
}

export { DefaultTakeBuilder }
