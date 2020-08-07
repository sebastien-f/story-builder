import { IFactoryProvider, IPlotTwistBuilder, TypedBuilderCallback } from "./interfaces";
declare class DefaultPlotTwistBuilder implements IPlotTwistBuilder {
    sequenceData: any;
    private factoryProvider;
    twists: Array<any>;
    constructor(sequenceData: any, factoryProvider: IFactoryProvider);
    takeIf<TBuilder, TTwistData, TTakeData = any>(conditions: TTwistData, takeData: TTakeData, callback: TypedBuilderCallback<TBuilder>): IPlotTwistBuilder;
}
export { DefaultPlotTwistBuilder };
