export declare type TypedBuilderCallback<T> = (builder: T) => void;
export interface IActorActionBuilder {
    says(text: string): IActorActionBuilder;
}
export interface ITakeBuilder {
    actor<TActor extends IActorActionBuilder, TActorData = any>(actorData: TActorData, callback: TypedBuilderCallback<TActor>): ITakeBuilder;
}
export interface ISequenceBuilder {
    take<TBuilder extends ITakeBuilder, TTakeData = any>(takeData: TTakeData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder;
}
export interface IFactoryProvider {
    setTakeBuilderFactory(factory: (sequenceData: any) => ITakeBuilder): void;
    takeBuilderFactory<T extends ITakeBuilder, U>(takeData: U): T;
    setActorActionBuilderFactory(factory: (actorData: any) => IActorActionBuilder): void;
    actorActionBuilderFactory<T extends IActorActionBuilder, U>(actorData: U): T;
    setSequenceBuilderFactory(sequenceBuilderFactory: (sequenceData: any) => ISequenceBuilder): void;
    sequenceBuilderFactory<T extends ISequenceBuilder, U>(sequenceData: U): T;
}
