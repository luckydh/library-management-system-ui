import Form from '@/libs/Form';
export default {
	form: new Form({
			name: null,
			address: null,
			details: null,
		}, [
			{
				text: '#',
				align: 'left',
				sortable: false,
				value: 'id'
			},
			{ text: 'Name', value: 'name', align: "left" },
			{ text: 'Address', value: 'address', align: "left" },
			{ text: 'Details', value: 'details', align: "center" },
			{ text: 'Actions', value: 'name', sortable: false, align: "right"}
		],
		    'http://library.eacademynepal.com/api/author'
	)
}
