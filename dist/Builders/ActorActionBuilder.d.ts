import { IFactoryProvider, IActorActionBuilder } from "./interfaces";
import { ActorAction } from "./ActorAction";
declare abstract class ActorActionBuilder {
    actions: Array<ActorAction>;
    protected addAction(action: ActorAction): void;
}
export { ActorActionBuilder, };
declare class DefaultActorActionBuilder extends ActorActionBuilder {
    actorData: any;
    protected factory: IFactoryProvider;
    constructor(actorData: any, factory: IFactoryProvider);
    says(text: string): IActorActionBuilder;
}
export { DefaultActorActionBuilder, };
