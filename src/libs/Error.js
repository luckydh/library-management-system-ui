/**
 *
 * Error Handler Class for Form
 *
 */

export default class Errors {
	/**
	 *
	 * Create a new errors instance.
	 *
	 */
	constructor() {
		this.errors = {};
		this.message = null;
	}

	/**
	 *
	 * Determine if an errors exists for the given field.
	 *
	 * @param {string} field
	 *
	 */
	has(field) {
		return this.errors.hasOwnProperty(field);
	}

	/**
	 *
	 * Retrieve the error message for the given field.
	 *
	 * @param {string} field
	 *
	 */
	get(field) {
		try {
			if(this.errors[field]) return this.errors[field][0];
		} catch(e) {
			//
		}
	}

	/**
	 *
	 * Record the new errors.
	 *
	 * @param {object} errors
	 *
	 */
	record(message, errors) {
		this.message = message;
		this.errors = errors;
	}

	/**
	 *
	 * Determine if we have any errors.
	 *
	 */
	any() {
		return Object.keys(this.errors).length > 0;
	}

	/**
	 *
	 * Clear one or all error fields.
	 *
	 * @param {string|null} field
	 *
	 */
	clear(field) {
		if(field) delete this.errors[field];
		else this.errors = {};
		this.message = null;
	}
}