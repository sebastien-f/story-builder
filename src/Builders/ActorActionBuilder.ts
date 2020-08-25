import { IFactoryProvider, IActorActionBuilder } from "./interfaces";
import { ActorAction } from "./ActorAction";

abstract class ActorActionBuilder {
    public actions:Array<ActorAction> = [];

    protected addAction(action:ActorAction):void {
        this.actions.push(action);
    }

}

export {
    ActorActionBuilder,
}

class DefaultActorActionBuilder extends ActorActionBuilder {
    public constructor(public actorData:any, protected factory:IFactoryProvider) {
        super();
    }

    public says(text:string):IActorActionBuilder {
        this.addAction(new ActorAction({
            type: "actor.say",
            text
        }));
        return this;
    }
}


export {
    DefaultActorActionBuilder,
}