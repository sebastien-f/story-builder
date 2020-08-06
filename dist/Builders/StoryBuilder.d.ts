import { IFactoryProvider } from "./interfaces";
declare class StoryBuilder {
    protected factory: IFactoryProvider;
    setFactoryProvider(factory: IFactoryProvider): void;
}
export { StoryBuilder };
