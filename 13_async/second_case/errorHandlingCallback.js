"use strict"

export class ErrorHandlingCallback extends Error {
	constructor(err) {
		super(err)
		this.err = err.message;
	}
	errorMessage(callback) {
		if (callback) {
			return callback(this.err)
		} else {
			return {};
		}
	}
}
