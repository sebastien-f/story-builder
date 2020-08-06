import { IFactoryProvider, ISequenceBuilder, TypedBuilderCallback } from "./interfaces";
import { DefaultFactoryProvider } from "./DefaultFactoryProvider";
import { StoryBuilderBase } from "./StoryBuilderBase";


/** StoryBuilder that has only a collection of sequences */
class ShortStoryBuilder extends StoryBuilderBase {
    constructor(factoryProvider:IFactoryProvider = new DefaultFactoryProvider()) {
        super();

        this.setFactoryProvider(factoryProvider);
    }

    public sequences:Array<ISequenceBuilder> = [];

    public sequence<TSequenceData>(sequenceData:TSequenceData, callback:TypedBuilderCallback<ISequenceBuilder>): ShortStoryBuilder {
        const sequenceBuilder = this.factory.sequenceBuilderFactory(sequenceData);

        callback(sequenceBuilder);
        this.sequences.push(sequenceBuilder);

        return this;
    }
}

export { ShortStoryBuilder }