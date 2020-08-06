import { IFactoryProvider, ISequenceBuilder, ITakeBuilder, IActorActionBuilder } from "./interfaces";
import { DefaultSequenceBuilder } from "./SequenceBuilder";
import { DefaultTakeBuilder } from "./TakeBuilder";
import { DefaultActorActionBuilder } from "./ActorActionBuilder";

class DefaultFactoryProvider implements IFactoryProvider {
    private _takeBuilderFactory:(takeData:any) => ITakeBuilder = (takeData) => new DefaultTakeBuilder(takeData, this);
    private _actorActionBuilderFactory:(actorData:any) => IActorActionBuilder = (actorData) => new DefaultActorActionBuilder(actorData, this);
    private _sequenceBuilderFactory:(sequenceData:any) => any = (sequenceData) => new DefaultSequenceBuilder(sequenceData, this) ;

    setTakeBuilderFactory(factory:(sequenceData:any) => ITakeBuilder): void {
        this._takeBuilderFactory = factory;
    }
    setActorActionBuilderFactory(factory: (actorData:any) => IActorActionBuilder): void {
        this._actorActionBuilderFactory = factory;
    }
    setSequenceBuilderFactory(sequenceBuilderFactory: (sequenceData:any) => ISequenceBuilder): void {
        this._sequenceBuilderFactory = sequenceBuilderFactory;
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

}

export { DefaultFactoryProvider }