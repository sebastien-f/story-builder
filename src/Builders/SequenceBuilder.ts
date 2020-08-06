import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, TypedBuilderCallback } from "./interfaces";

class DefaultSequenceBuilder implements ISequenceBuilder {
    public takes:Array<ITakeBuilder> = [];

    public constructor(public sequenceData:any, private factoryProvider:IFactoryProvider) {
    }

    public take<TBuilder extends ITakeBuilder, TTakeData = any>(takeData: TTakeData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder {
        const take = this.factoryProvider.takeBuilderFactory(takeData);
        callback(take as any as TBuilder);
        this.takes.push(take);

        return this;
    }
}

export { DefaultSequenceBuilder }
