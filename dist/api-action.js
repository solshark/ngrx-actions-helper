"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAPIAction(endpoint, r, s, f) {
    return {
        request: () => (Object.assign(Object.assign({}, r), { type: `[API:${endpoint}] request` })),
        success: () => (Object.assign(Object.assign({}, s), { type: `[API:${endpoint}] success` })),
        failure: () => (Object.assign(Object.assign({}, f), { type: `[API:${endpoint}] failure` })),
    };
}
exports.createAPIAction = createAPIAction;
