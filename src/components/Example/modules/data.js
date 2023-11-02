import Form from '@/libs/Form';
export default {
	name: 'Example Component',
	form: new Form({
		name: null,
		email: null,
		phone: null,
		address: null,
		contact: null,
	}, [{
			text: 'User Id',
			align: 'left',
			sortable: false,
			value: 'userId'
		},
		{ text: 'Id', value: 'id' },
		{ text: 'Title', value: 'title' },
		{ text: 'Completed', value: 'completed' }
	]),
}