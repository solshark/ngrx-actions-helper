import { Action } from '@ngrx/store';
export interface IAPIActionCreator<R, S, F> {
    request: (r: R) => Action;
    success: (s: S) => Action;
    failure: (f: F) => Action;
}
export declare function createAPIAction<R, S, F>(endpoint: string): IAPIActionCreator<R, S, F>;
