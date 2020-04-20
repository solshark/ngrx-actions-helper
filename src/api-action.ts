import { Action, ActionCreator, ActionType } from '@ngrx/store'
import { TypedAction } from '@ngrx/store/src/models'

export interface IAPIActionCreator<R, S, F> {
  request: (r: R) => Action
  success: (s: S) => Action
  failure: (f: F) => Action
}

export function createAPIAction<R, S, F>(
  endpoint: string
): IAPIActionCreator<R, S, F> {
  return {
    request: (r: R) => ({
      ...r,
      type: `[API:${endpoint}] request`,
    }),
    success: (s: S) => ({
      ...s,
      type: `[API:${endpoint}] success`,
    }),
    failure: (f: F) => ({
      ...f,
      type: `[API:${endpoint}] failure`,
    }),
  }
}
