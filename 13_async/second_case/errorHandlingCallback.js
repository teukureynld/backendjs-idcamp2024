"use strict"
import {readFile} from "fs";

export class ErrorHandlingCallback extends Error {
	constructor(err) {
		super(err)
		this.err = err.message
	}
	errorMessage(callback) {
		if (callback) {
			return callback(this.err)
		} else {
			return {}
		}
	}
}

readFile('./file.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    const greeting = data.toString().replace('%name%', 'dicoding');
    console.log(greeting);
});