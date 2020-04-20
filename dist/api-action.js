"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAPIAction(endpoint) {
    return {
        request: (r) => (Object.assign(Object.assign({}, r), { type: `[API:${endpoint}] request` })),
        success: (s) => (Object.assign(Object.assign({}, s), { type: `[API:${endpoint}] success` })),
        failure: (f) => (Object.assign(Object.assign({}, f), { type: `[API:${endpoint}] failure` })),
    };
}
exports.createAPIAction = createAPIAction;
