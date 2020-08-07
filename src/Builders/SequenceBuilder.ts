import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, TypedBuilderCallback, IPlotTwistBuilder } from "./interfaces";

interface ITakeSequenceNode {
    type:"take";
    take:ITakeBuilder;
}

interface IPlotTwistSequenceNode {
    type:"plotTwist";
    twist: IPlotTwistBuilder;
}

type SequenceNodes = ITakeSequenceNode | IPlotTwistSequenceNode;

class DefaultSequenceBuilder implements ISequenceBuilder {
    public takes:Array<ITakeBuilder> = [];
    public nodes:Array<SequenceNodes> = [];

    public constructor(public sequenceData:any, private factoryProvider:IFactoryProvider) {
    }

    public take<TBuilder extends ITakeBuilder, TTakeData = any>(takeData: TTakeData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder {
        const take = this.factoryProvider.takeBuilderFactory(takeData);
        callback(take as any as TBuilder);
        if(this.nodes && this.nodes.length) {
            if(this.nodes[this.nodes.length - 1].type == "plotTwist") throw new Error("A take can't follow a plot twist. It needs a PlotMerge.")
        }

        this.takes.push(take);
        this.nodes.push({
            type:"take",
            take,
        })
        return this;
    }

    public twist<TBuilder extends IPlotTwistBuilder, TTwistData>(twistData: TTwistData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder {
        const twist = this.factoryProvider.twistBuilderFactory(twistData);
        callback(twist);
        if(this.nodes && this.nodes.length) {
            if(this.nodes[this.nodes.length - 1].type == "plotTwist") throw new Error("A take can't follow a plot twist. It needs a PlotMerge.")
        }
        this.nodes.push({
            type:"plotTwist",
            twist
        })

        return this;
    }
}

export { DefaultSequenceBuilder }
