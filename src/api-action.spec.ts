import { createAPIAction } from './api-action'
import { createAction, props } from '@ngrx/store'

interface RequestDTO {
  itemId: number
}

interface SuccessDTO {
  itemId: number
  body: string
}

interface ErrorDTO {
  error: string
  itemId: number
}

describe('API action creator', () => {
  it('should create proper action', () => {
    const endpoint = '/api/test'
    const request: RequestDTO = { itemId: 3 }
    const response: SuccessDTO = { itemId: 3, body: 'success' }
    const failure: ErrorDTO = { error: 'Not found', itemId: 3 }
    const result = createAPIAction(endpoint, request, response, failure)

    const expectedAPIRequestAction = createAction(
      `[API:${endpoint}] request`,
      props<RequestDTO>()
    )

    const expectedAPISuccessAction = createAction(
      `[API:${endpoint}] success`,
      props<SuccessDTO>()
    )

    const expectedAPIFailureAction = createAction(
      `[API:${endpoint}] failure`,
      props<ErrorDTO>()
    )

    expect(result.request()).toStrictEqual(expectedAPIRequestAction(request))
    expect(result.success()).toStrictEqual(expectedAPISuccessAction(response))
    expect(result.failure()).toStrictEqual(expectedAPIFailureAction(failure))
  })
})
