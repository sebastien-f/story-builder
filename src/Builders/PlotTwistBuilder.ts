import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, IPlotTwistBuilder, TypedBuilderCallback } from "./interfaces";

class DefaultPlotTwistBuilder implements IPlotTwistBuilder {
    public twists:Array<any> = [];

    public constructor(public sequenceData:any, private factoryProvider:IFactoryProvider) {
    }

    public takeIf<TBuilder, TTwistData, TTakeData = any>(conditions:TTwistData, takeData:TTakeData, callback: TypedBuilderCallback<TBuilder>):IPlotTwistBuilder {
        const take = this.factoryProvider.takeBuilderFactory(takeData);
        callback(take as any as TBuilder);

        this.twists.push({});
        return this;
    }
}

export { DefaultPlotTwistBuilder }
