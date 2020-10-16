"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UnexpectedError=exports.MissingParamError=exports.UtilityError=void 0;class UtilityError extends Error{constructor(r){super(r),this.name="UtilityError"}}exports.UtilityError=UtilityError;class MissingParamError extends Error{constructor(r){super(r),this.name="MissingParamError"}}exports.MissingParamError=MissingParamError;class UnexpectedError extends Error{constructor(r){super(r.response?JSON.stringify(r.response.data):r),this.name="UnexpectedError"}}exports.UnexpectedError=UnexpectedError;
