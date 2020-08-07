export declare type TypedBuilderCallback<T> = (builder: T) => void;
export interface IFactoryProvider {
    setTakeBuilderFactory(factory: (sequenceData: any) => ITakeBuilder): void;
    takeBuilderFactory<T extends ITakeBuilder, U>(takeData: U): T;
    setActorActionBuilderFactory(factory: (actorData: any) => IActorActionBuilder): void;
    actorActionBuilderFactory<T extends IActorActionBuilder, U>(actorData: U): T;
    setSequenceBuilderFactory(sequenceBuilderFactory: (sequenceData: any) => ISequenceBuilder): void;
    sequenceBuilderFactory<T extends ISequenceBuilder, U>(sequenceData: U): T;
    twistBuilderFactory<T extends IPlotTwistBuilder, U>(twistData: U): T;
    setTwistBuilderFactory(factory: (twistData: any) => IPlotTwistBuilder): void;
}
export interface IActorActionBuilder {
    says(text: string): IActorActionBuilder;
}
export interface ITakeBuilder {
    actor<TActor extends IActorActionBuilder, TActorData = any>(actorData: TActorData, callback: TypedBuilderCallback<TActor>): ITakeBuilder;
}
export interface ISequenceBuilder {
    take<TBuilder extends ITakeBuilder, TTakeData = any>(takeData: TTakeData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder;
    twist<TBuilder extends IPlotTwistBuilder, TTwistData>(twistData: TTwistData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder;
}
export interface IPlotTwistBuilder {
}
