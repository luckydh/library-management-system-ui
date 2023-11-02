import Form from '@/libs/Form';
export default {
	form: new Form({
		name: null,
		phone: null,
		address: null
	}, [
		{
			text: '#',
			align: 'left',
			sortable: false,
			value: 'id'
		},
		{ text: 'Name', value: 'name', align: "left" },
		{ text: 'Phone', value: 'phone', align: "left" },
		{ text: 'Address', value: 'address', align: "center" },
		{ text: 'Actions', value: 'name', sortable: false, align: "right"}
	],
	'http://library.eacademynepal.com/api/company'
)
}