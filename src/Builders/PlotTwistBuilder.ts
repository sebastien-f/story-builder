import { IFactoryProvider, IPlotTwistBuilder, TypedBuilderCallback, ITakeBuilder } from "./interfaces";

type TwistOption<TTwistData> = {
    conditions:TTwistData;
    take:ITakeBuilder;
}

class DefaultPlotTwistBuilder implements IPlotTwistBuilder {
    public twists:Array<TwistOption<unknown>> = [];

    public constructor(public twistData:any, private factoryProvider:IFactoryProvider) {
    }

    public takeIf<TBuilder, TTwistData, TTakeData = any>(conditions:TTwistData, takeData:TTakeData, callback: TypedBuilderCallback<TBuilder>):IPlotTwistBuilder {
        const take = this.factoryProvider.takeBuilderFactory(takeData);
        callback(take as any as TBuilder);

        this.twists.push({
            conditions,
            take,
        });
        return this;
    }
}

export { DefaultPlotTwistBuilder }
