import Form from '@/libs/Form';
export default {
	name: 'login-component',
	form: new Form({
		email: null,
		password: null
	}, [], 'http://library.eacademynepal.test/api/login'),
	valid: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
}