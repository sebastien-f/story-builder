import { IFactoryProvider, ITakeBuilder, IActorActionBuilder, TypedBuilderCallback } from "./interfaces";
declare class DefaultTakeBuilder implements ITakeBuilder {
    takeData: any;
    private factoryProvider;
    constructor(takeData: any, factoryProvider: IFactoryProvider);
    actorActions: Array<IActorActionBuilder>;
    actor<TActor extends IActorActionBuilder, TActorData = any>(actorData: TActorData, callback: TypedBuilderCallback<TActor>): ITakeBuilder;
}
export { DefaultTakeBuilder };
