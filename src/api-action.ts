import { ActionCreator, ActionType } from '@ngrx/store'
import { TypedAction } from '@ngrx/store/src/models'

export interface IAPIActionCreator<R, S, F> {
  request: (r: R) => void
  success: (s: S) => void
  failure: (f: F) => void
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
