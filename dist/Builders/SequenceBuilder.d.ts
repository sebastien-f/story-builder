import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, TypedBuilderCallback, IPlotTwistBuilder } from "./interfaces";
interface ITakeSequenceNode {
    type: "take";
    take: ITakeBuilder;
}
interface IPlotTwistSequenceNode {
    type: "plotTwist";
    twist: IPlotTwistBuilder;
}
declare type SequenceNodes = ITakeSequenceNode | IPlotTwistSequenceNode;
declare class DefaultSequenceBuilder implements ISequenceBuilder {
    sequenceData: any;
    private factoryProvider;
    nodes: Array<SequenceNodes>;
    constructor(sequenceData: any, factoryProvider: IFactoryProvider);
    take<TBuilder extends ITakeBuilder, TTakeData = any>(takeData: TTakeData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder;
    twist<TBuilder extends IPlotTwistBuilder, TTwistData>(twistData: TTwistData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder;
}
export { DefaultSequenceBuilder };
