import { IFactoryProvider, IPlotTwistBuilder, TypedBuilderCallback, ITakeBuilder } from "./interfaces";
declare type TwistOption<TTwistData> = {
    conditions: TTwistData;
    take: ITakeBuilder;
};
declare class DefaultPlotTwistBuilder implements IPlotTwistBuilder {
    twistData: any;
    private factoryProvider;
    twists: Array<TwistOption<unknown>>;
    constructor(twistData: any, factoryProvider: IFactoryProvider);
    takeIf<TBuilder, TTwistData, TTakeData = any>(conditions: TTwistData, takeData: TTakeData, callback: TypedBuilderCallback<TBuilder>): IPlotTwistBuilder;
}
export { DefaultPlotTwistBuilder };
