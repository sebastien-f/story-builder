import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, IActorActionBuilder } from "./interfaces";
declare class DefaultFactoryProvider implements IFactoryProvider {
    private _takeBuilderFactory;
    private _actorActionBuilderFactory;
    private _sequenceBuilderFactory;
    setTakeBuilderFactory(factory: (sequenceData: any) => ITakeBuilder): void;
    setActorActionBuilderFactory(factory: (actorData: any) => IActorActionBuilder): void;
    setSequenceBuilderFactory(sequenceBuilderFactory: (sequenceData: any) => ISequenceBuilder): void;
    sequenceBuilderFactory<T extends ISequenceBuilder, U>(sequenceData: U): T;
    takeBuilderFactory<T extends ITakeBuilder, U>(takeData: U): T;
    actorActionBuilderFactory<T extends IActorActionBuilder>(actorData: any): T;
}
export { DefaultFactoryProvider };
