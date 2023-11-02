<template>
	<v-flex id="books-component">
		{{ name }}
	</v-flex>
</template>

<script>
	export default {
		name: 'Books',
		data: () => ({
			name: 'collection of books.'
		})
	}
</script>