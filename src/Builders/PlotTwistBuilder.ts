import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, IPlotTwistBuilder, TypedBuilderCallback } from "./interfaces";

class PlotTwistBuilder implements IPlotTwistBuilder {
    public takes:Array<ITakeBuilder> = [];

    public constructor(public sequenceData:any, private factoryProvider:IFactoryProvider) {
    }
}

export { PlotTwistBuilder }
