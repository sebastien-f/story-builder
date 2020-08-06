import { IFactoryProvider } from "./interfaces";
declare class StoryBuilderBase {
    private _factory;
    get factory(): IFactoryProvider;
    protected setFactoryProvider(factory: IFactoryProvider): void;
}
export { StoryBuilderBase };
