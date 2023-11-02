import Form from '@/libs/Form';
export default {
	form: new Form({
			name: null,
			email: null,
			password: null,
			status: null
		}, [
			{
				text: '#',
				align: 'left',
				sortable: false,
				value: 'id'
			},
			{ text: 'Name', value: 'name', align: "left" },
			{ text: 'E-mail', value: 'email', align: "left" },
			{ text: 'Status', value: 'status', align: "center" },
			{ text: 'Actions', value: 'name', sortable: false, align: "right"}
		],
		'http://library.eacademynepal.com/api/user'
	)
}