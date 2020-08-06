import { IFactoryProvider } from "./interfaces";
import { DefaultFactoryProvider } from "./DefaultFactoryProvider";

class StoryBuilder {
    private factory: IFactoryProvider = new DefaultFactoryProvider();
    public setFactoryProvider(factory: IFactoryProvider) {
        this.factory = factory;
    }

    /*
    */
}

export {
    StoryBuilder,
}