import Form from '@/libs/Form';
export default {
	form: new Form({
			name: null,
			excerpt: null,
            isbn: null,
            image: null,
            publisher_id: null,
            classification_id: null,
            details: null,
            book_id: null,
            author_id: null

		}, [
			{
				text: '#',
				align: 'left',
				sortable: false,
				value: 'id'
			},
			{ text: 'Name', value: 'name', align: "left" },
			{ text: 'ISBN', value: 'isbn', align: "left" },
            { text: 'Author Id', value: 'author_id', align: "center" },
            { text: 'Book Id', value: 'book id', align: "center" },
			{ text: 'Actions', value: 'name', sortable: false, align: "right"}
		],
		'http://library.eacademynepal.com/api/book'
	)
}