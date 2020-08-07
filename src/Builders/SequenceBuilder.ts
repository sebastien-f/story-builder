import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, TypedBuilderCallback, IPlotTwistBuilder } from "./interfaces";

interface ITakeSequenceItem {
    type:"take";
    take:ITakeBuilder;
}

interface IPlotTwistSequenceItem {
    type:"plotTwist";
    twist: IPlotTwistBuilder;
}

type SequenceNodes = ITakeSequenceItem | IPlotTwistSequenceItem;

class DefaultSequenceBuilder implements ISequenceBuilder {
    public sequenceItems:Array<SequenceNodes> = [];

    public constructor(public sequenceData:any, private factoryProvider:IFactoryProvider) {
    }

    public take<TBuilder extends ITakeBuilder, TTakeData = any>(takeData: TTakeData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder {
        const take = this.factoryProvider.takeBuilderFactory(takeData);
        callback(take as any as TBuilder);
        if(this.sequenceItems && this.sequenceItems.length) {
            if(this.sequenceItems[this.sequenceItems.length - 1].type == "plotTwist") throw new Error("A take can't follow a plot twist. It needs a PlotMerge.")
        }

        this.sequenceItems.push({
            type:"take",
            take,
        })
        return this;
    }

    public twist<TBuilder extends IPlotTwistBuilder, TTwistData>(twistData: TTwistData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder {
        const twist = this.factoryProvider.twistBuilderFactory(twistData);
        callback(twist as any as TBuilder);
        if(this.sequenceItems && this.sequenceItems.length) {
            if(this.sequenceItems[this.sequenceItems.length - 1].type == "plotTwist") throw new Error("A take can't follow a plot twist. It needs a PlotMerge.")
        }
        this.sequenceItems.push({
            type:"plotTwist",
            twist
        })

        return this;
    }
}

export { DefaultSequenceBuilder }
