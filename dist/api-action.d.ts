export interface IAPIActionCreator {
    request: () => void;
    success: () => void;
    failure: () => void;
}
export declare function createAPIAction<R, S, F>(endpoint: string, r: R, s: S, f: F): IAPIActionCreator;
