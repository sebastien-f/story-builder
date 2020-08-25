import { IFactoryProvider, IPlotMergeBuilder } from "./interfaces";
declare class DefaultPlotMergeBuilder implements IPlotMergeBuilder {
    sequenceData: any;
    private factoryProvider;
    twists: Array<any>;
    constructor(sequenceData: any, factoryProvider: IFactoryProvider);
    mergeFrom(): IPlotMergeBuilder;
}
export { DefaultPlotMergeBuilder };
