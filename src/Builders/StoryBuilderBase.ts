import { IFactoryProvider } from "./interfaces";

class StoryBuilderBase {
    private _factory!: IFactoryProvider;

    public get factory(): IFactoryProvider {
        return this._factory;
    }

    protected setFactoryProvider(factory: IFactoryProvider) {
        this._factory = factory;
    }
}

export { StoryBuilderBase }