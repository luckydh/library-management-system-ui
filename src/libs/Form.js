/**
 *
 * Form Handler Class
 *
 */
import rest from '@/libs/Rest'
import Errors from './Error';

export default class Form {
	/**
	 *
	 * Create a new form instance
	 *
	 * @param {object} data
	 * 
	 */
	constructor(data, headers) {
		this.originalData = data;
		this.headers = headers;
		this.items = [];
		this.loading = false;

		for (let field in data) {
			this.field = data[field];
		}

		this.errors = new Errors();
	}


	/**
	 *
	 * Fetch all relevant data for the form.
	 *
	 */
	data() {
		let data = {};
		for (let property in this.originalData)
			data[property] = this[property]
		return data;
	}


	/**
	 *
	 * Submit the data.
	 *
	 * @param {string} requestType
	 *
	 * @param {string} url
	 *
	 */
	submit(requestType, url) {
		return new Promise((resolve, reject) => {
			let params = this.data();
			if (requestType == 'put') params['_method'] = 'put';
			else if (requestType == 'delete') params['_method'] = 'delete';
			else if (requestType == 'patch') params['_method'] = 'patch';
			rest()[requestType](url, params)
				.then(response => {
					this.success(response.data);
					resolve(response);
				})
				.catch(error => {
					this.failure(error.response.data);
					reject(error.response);
				}).finally(() => {
					this.loading = false;
				});
		})
	}

	get(url, params) {
		return new Promise((resolve, reject) => {
			this.loading = true;
			rest().get(url, params)
				.then(response => {
					this.items = response.data
					resolve(response.data);
				})
				.catch(error => {
					this.failure(error.response.data);
					reject(error.response.data);
				}).finally(() => {
					this.loading = false;
				});
		})
	}

	/**
	 *
	 * Create new data
	 *
	 * @param {string} url
	 *
	 */
	post(url) {
		return this.submit('post', url);
	}

	/**
	 *
	 * Update old data
	 *
	 * @param {string} url
	 *
	 */
	put(url) {
		return this.submit('put', url);
	}

	/**
	 *
	 * Update old data
	 *
	 * @param {string} url
	 *
	 */
	patch(url) {
		return this.submit('patch', url);
	}

	/**
	 *
	 * Delete data
	 *
	 * @param {string} url
	 *
	 */
	delete(url) {
		return this.submit('delete', url);
	}

	/**
	 *
	 * Handle a successful form submission.
	 *
	 * @param {object} response
	 *
	 */
	success(response) {
		// TODO: send success response...
		this.reset();
	}

	/**
	 *
	 * Handle a failed form submission.
	 *
	 * @param {object} error
	 *
	 */
	failure(response) {
		this.errors.record(response.message, response.errors);
	}

	/**
	 * Handle all types of api calls.
	 * @param {*} payload 
	 */
	call(payload) {
		return new Promise((resolve, reject) => {
			let requestType = payload.method != null ? payload.method : 'get';
			if (requestType != 'get' && requestType != 'post') {
				payload.params['_method'] = requestType;
			}
			rest()[requestType](payload.url, params)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response.data);
				});
		})
	}

	/**
	 *
	 * Reset the form fields.
	 *
	 */
	reset() {
		for (let field in this.originalData) {
			this[field] = null
		}
		this.loading = false;
		this.errors.clear();
	}
}