import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, IActorActionBuilder, IPlotTwistBuilder, IPlotMergeBuilder } from "./interfaces";
declare class DefaultFactoryProvider implements IFactoryProvider {
    private _takeBuilderFactory;
    private _actorActionBuilderFactory;
    private _sequenceBuilderFactory;
    private _twistFactory;
    private _mergeFactory;
    setTakeBuilderFactory(factory: (sequenceData: any) => ITakeBuilder): void;
    setActorActionBuilderFactory(factory: (actorData: any) => IActorActionBuilder): void;
    setSequenceBuilderFactory(sequenceBuilderFactory: (sequenceData: any) => ISequenceBuilder): void;
    setTwistBuilderFactory(factory: (twistData: any) => IPlotTwistBuilder): void;
    setMergeBuilderFactory(factory: (twistData: any) => IPlotMergeBuilder): void;
    sequenceBuilderFactory<T extends ISequenceBuilder, U>(sequenceData: U): T;
    takeBuilderFactory<T extends ITakeBuilder, U>(takeData: U): T;
    actorActionBuilderFactory<T extends IActorActionBuilder>(actorData: any): T;
    twistBuilderFactory<T extends IPlotTwistBuilder, U>(twistData: U): T;
    mergeBuilderFactory<T extends IPlotMergeBuilder, U>(mergeData: U): T;
}
export { DefaultFactoryProvider };
