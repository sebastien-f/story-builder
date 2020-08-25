import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, TypedBuilderCallback, IPlotTwistBuilder, IPlotMergeBuilder, IHaveData } from "./interfaces";
interface ITakeSequenceNode {
    type: "take";
    take: ITakeBuilder;
}
interface IPlotTwistSequenceNode {
    type: "plotTwist";
    twist: IPlotTwistBuilder;
}
export declare type SequenceNodes = ITakeSequenceNode | IPlotTwistSequenceNode;
declare class DefaultSequenceBuilder implements ISequenceBuilder, IHaveData<any> {
    private factoryProvider;
    takes: Array<ITakeBuilder>;
    nodes: Array<SequenceNodes>;
    data: any;
    constructor(sequenceData: any, factoryProvider: IFactoryProvider);
    take<TBuilder extends ITakeBuilder, TTakeData = any>(takeData: TTakeData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder;
    twist<TBuilder extends IPlotTwistBuilder, TTwistData>(twistData: TTwistData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder;
    merge<TBuilder extends IPlotMergeBuilder>(callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder;
}
export { DefaultSequenceBuilder };
