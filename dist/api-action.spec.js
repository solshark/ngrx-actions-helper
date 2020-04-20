"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_action_1 = require("./api-action");
const store_1 = require("@ngrx/store");
describe('API action creator', () => {
    it('should create proper action', () => {
        const endpoint = '/api/test';
        const request = { itemId: 3 };
        const response = { itemId: 3, body: 'success' };
        const failure = { error: 'Not found', itemId: 3 };
        const result = api_action_1.createAPIAction(endpoint);
        const expectedAPIRequestAction = store_1.createAction(`[API:${endpoint}] request`, store_1.props());
        const expectedAPISuccessAction = store_1.createAction(`[API:${endpoint}] success`, store_1.props());
        const expectedAPIFailureAction = store_1.createAction(`[API:${endpoint}] failure`, store_1.props());
        expect(result.request(request)).toStrictEqual(expectedAPIRequestAction(request));
        expect(result.success(response)).toStrictEqual(expectedAPISuccessAction(response));
        expect(result.failure(failure)).toStrictEqual(expectedAPIFailureAction(failure));
    });
});
