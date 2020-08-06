import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, TypedBuilderCallback } from "./interfaces";
declare class DefaultSequenceBuilder implements ISequenceBuilder {
    sequenceData: any;
    private factoryProvider;
    takes: Array<ITakeBuilder>;
    constructor(sequenceData: any, factoryProvider: IFactoryProvider);
    take<TBuilder extends ITakeBuilder, TTakeData = any>(takeData: TTakeData, callback: TypedBuilderCallback<TBuilder>): ISequenceBuilder;
}
export { DefaultSequenceBuilder };
