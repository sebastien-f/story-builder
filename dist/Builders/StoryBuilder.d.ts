import { IFactoryProvider } from "./interfaces";
declare class StoryBuilder {
    private factory;
    setFactoryProvider(factory: IFactoryProvider): void;
}
export { StoryBuilder, };
