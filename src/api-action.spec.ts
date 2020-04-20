import { createAPIAction } from './api-action'
import { createAction, props } from '@ngrx/store'
import { Action } from '@ngrx/store/src/models'

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
    const result = createAPIAction<RequestDTO, SuccessDTO, ErrorDTO>(endpoint)

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

    expect(result.request(request)).toStrictEqual(
      expectedAPIRequestAction(request)
    )

    expect(result.success(response)).toStrictEqual(
      expectedAPISuccessAction(response)
    )
    expect(result.failure(failure)).toStrictEqual(
      expectedAPIFailureAction(failure)
    )
  })
})
