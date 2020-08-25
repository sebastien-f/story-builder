import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, TypedBuilderCallback, IPlotTwistBuilder, IPlotMergeBuilder, IHaveData } from "./interfaces";

interface ITakeSequenceNode {
    type:"take";
    take:ITakeBuilder;
}

interface IPlotTwistSequenceNode {
    type:"plotTwist";
    twist: IPlotTwistBuilder;
}

export type SequenceNodes = ITakeSequenceNode | IPlotTwistSequenceNode;

class DefaultSequenceBuilder implements ISequenceBuilder, IHaveData<any> {
    public takes:Array<ITakeBuilder> = [];
    public nodes:Array<SequenceNodes> = [];
    public data:any;

    public constructor(sequenceData:any, private factoryProvider:IFactoryProvider) {
        this.data = sequenceData;
    }

    public take<TBuilder extends ITakeBuilder, TTakeData = any>(takeData: TTakeData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder {
        const take = this.factoryProvider.takeBuilderFactory(takeData);
        callback(take as any as TBuilder);
        if(this.nodes && this.nodes.length) {
            //if(this.nodes[this.nodes.length - 1].type === "plotTwist") throw new Error("A take can't follow a plot twist. It needs a PlotMerge.")
            //if(this.nodes[this.nodes.length - 1].type === "plotTwist") console.warn("A take can't follow a plot twist. It needs a PlotMerge.")
            // Not sure about this...
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
        callback(twist as any as TBuilder);
        if(this.nodes && this.nodes.length) {
            //if(this.nodes[this.nodes.length - 1].type === "plotTwist") throw new Error("A take can't follow a plot twist. It needs a PlotMerge.")
            //if(this.nodes[this.nodes.length - 1].type === "plotTwist") throw new Error("A pl can't follow a plot twist. It needs a PlotMerge.")
            // console.warn("possible ?")
            // not sure about this either
        }
        this.nodes.push({
            type:"plotTwist",
            twist
        })

        return this;
    }

    public merge<TBuilder extends IPlotMergeBuilder>(callback:TypedBuilderCallback<TBuilder>): ISequenceBuilder {
        const merge = this.factoryProvider.mergeBuilderFactory(null);
        callback(merge as any as TBuilder);

        return this;
    }
}

export { DefaultSequenceBuilder }
