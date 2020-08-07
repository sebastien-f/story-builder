import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, IActorActionBuilder, IPlotTwistBuilder } from "./interfaces";
import { DefaultSequenceBuilder } from "./SequenceBuilder";
import { DefaultTakeBuilder } from "./TakeBuilder";
import { DefaultActorActionBuilder } from "./ActorActionBuilder";
import { DefaultPlotTwistBuilder } from "./PlotTwistBuilder";

class DefaultFactoryProvider implements IFactoryProvider {
    private _takeBuilderFactory:(takeData:any) => ITakeBuilder = (takeData) => new DefaultTakeBuilder(takeData, this);
    private _actorActionBuilderFactory:(actorData:any) => IActorActionBuilder = (actorData) => new DefaultActorActionBuilder(actorData, this);
    private _sequenceBuilderFactory:(sequenceData:any) => ISequenceBuilder = (sequenceData) => new DefaultSequenceBuilder(sequenceData, this) ;
    private _twistFactory:(twistData:any) => IPlotTwistBuilder = (twistData) => new DefaultPlotTwistBuilder(twistData, this);

    setTakeBuilderFactory(factory:(sequenceData:any) => ITakeBuilder): void {
        this._takeBuilderFactory = factory;
    }

    setActorActionBuilderFactory(factory: (actorData:any) => IActorActionBuilder): void {
        this._actorActionBuilderFactory = factory;
    }

    setSequenceBuilderFactory(sequenceBuilderFactory: (sequenceData:any) => ISequenceBuilder): void {
        this._sequenceBuilderFactory = sequenceBuilderFactory;
    }

    setTwistBuilderFactory(factory: (twistData: any) => IPlotTwistBuilder): void {
        this._twistFactory = factory;
    }

    sequenceBuilderFactory<T extends ISequenceBuilder, U>(sequenceData: U): T {
        return this._sequenceBuilderFactory(sequenceData) as any as T;
    }

    takeBuilderFactory<T extends ITakeBuilder, U>(takeData: U): T {
        return this._takeBuilderFactory(takeData) as any as T;
    }

    actorActionBuilderFactory<T extends IActorActionBuilder>(actorData:any): T {
        return this._actorActionBuilderFactory(actorData) as any as T;
    }

    twistBuilderFactory<T extends IPlotTwistBuilder, U>(twistData: U): T {
        return this._twistFactory(twistData) as any as T;
    }

}

export { DefaultFactoryProvider }