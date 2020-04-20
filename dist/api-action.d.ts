export interface IAPIActionCreator<R, S, F> {
    request: (r: R) => void;
    success: (s: S) => void;
    failure: (f: F) => void;
}
export declare function createAPIAction<R, S, F>(endpoint: string): IAPIActionCreator<R, S, F>;
