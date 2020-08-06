import { IFactoryProvider, ISequenceBuilder, TypedBuilderCallback } from "./interfaces";
import { StoryBuilderBase } from "./StoryBuilderBase";
/** StoryBuilder that has only a collection of sequences */
declare class ShortStoryBuilder extends StoryBuilderBase {
    constructor(factoryProvider?: IFactoryProvider);
    sequences: Array<ISequenceBuilder>;
    sequence<TSequenceData>(sequenceData: TSequenceData, callback: TypedBuilderCallback<ISequenceBuilder>): ShortStoryBuilder;
}
export { ShortStoryBuilder };
