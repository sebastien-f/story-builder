import { IFactoryProvider } from "./interfaces";

class StoryBuilder {
    protected factory!:IFactoryProvider;
    public setFactoryProvider(factory: IFactoryProvider) {
        this.factory = factory;
    }
}

export { StoryBuilder }