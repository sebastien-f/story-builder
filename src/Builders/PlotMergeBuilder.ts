import { IFactoryProvider, IPlotMergeBuilder } from "./interfaces";

class DefaultPlotMergeBuilder implements IPlotMergeBuilder {
    public twists:Array<any> = [];

    public constructor(public sequenceData:any, private factoryProvider:IFactoryProvider) {
    }

    public mergeFrom(): IPlotMergeBuilder {
        this.factoryProvider.actorActionBuilderFactory(null);
        return this
    }

}

export { DefaultPlotMergeBuilder }
