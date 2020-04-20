export interface IAPIActionCreator {
  request: () => void
  success: () => void
  failure: () => void
}

export function createAPIAction<R, S, F>(
  endpoint: string,
  r: R,
  s: S,
  f: F
): IAPIActionCreator {
  return {
    request: () => ({
      ...r,
      type: `[API:${endpoint}] request`,
    }),
    success: () => ({
      ...s,
      type: `[API:${endpoint}] success`,
    }),
    failure: () => ({
      ...f,
      type: `[API:${endpoint}] failure`,
    }),
  }
}
