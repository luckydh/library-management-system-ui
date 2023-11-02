<template>
	<v-flex>
		<v-toolbar flat color="white">
     		 <v-toolbar-title>Book List</v-toolbar-title>
			<v-divider class="mx-2" inset vertical ></v-divider>
			<v-spacer></v-spacer>
			<v-dialog v-model="form.dialog" max-width="500px">
				<v-btn slot="activator" color="primary" dark class="mb-2">New Book</v-btn>
				<v-card>
					<v-card-title>
						<span class="title">{{ formTitle }}</span>
					</v-card-title>

					<v-card-text class="has-spinner">
						<spinner light="light" :loading="form.loading"/>
						<v-container grid-list-xs>
							<v-form @keydown="form.errors.clear($event.target.name)">
								<v-layout wrap>
									<v-flex xs12 sm6>
									<v-text-field v-model="form.name" label="Name" :error-messages="form.errors.get('name')"></v-text-field>
									</v-flex>
									<v-flex xs12 sm6>
									<v-text-field v-model="form.excerpt" label="Excerpt" :error-messages="form.errors.get('excerpt')"></v-text-field>
									</v-flex>
									<v-flex xs12 sm6>
									<v-text-field v-model="form.isbn" label="ISBN" :error-messages="form.errors.get('isbn')"></v-text-field>
									</v-flex>
									<v-flex xs12 sm6>
									<v-text-field v-model="form.image" label="Image" :error-messages="form.errors.get('image')"></v-text-field>
									</v-flex>
									<v-flex xs12 sm6>
									<v-text-field v-model="form.publisher_id" label="Publisher Id" :error-messages="form.errors.get('publisher_id')"></v-text-field>
									</v-flex>
									<v-flex xs12 sm6>
									<v-text-field v-model="form.classification_id" label="Classification Id" :error-messages="form.errors.get('classification_id')"></v-text-field>
									</v-flex>
									<v-flex xs12 sm6>
									<v-text-field v-model="form.details" label="Book details" :error-messages="form.errors.get('details')"></v-text-field>
									</v-flex>
									<v-flex xs12 sm6>
									<v-text-field v-model="form.book_id" label="book_id" :error-messages="form.errors.get('book_id')"></v-text-field>
									</v-flex>
									<v-flex xs12 sm6>
									<v-text-field v-model="form.author_id" label="Author Id" :error-messages="form.errors.get('author_id')"></v-text-field>
									</v-flex>
								</v-layout>
							</v-form>
						</v-container>
					</v-card-text>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue darken-1" flat @click="form.reset()">Cancel</v-btn>
						<v-btn color="blue darken-1" flat @click="save">Save</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
    	</v-toolbar>
		<v-data-table :headers="this.form.headers" :items="this.form.items" class="elevation-1">
			<template slot="items" slot-scope="props">
				<td>{{ props.item.id }}</td>
				<td class="text-xs-left">{{ props.item.name }}</td>
				<td class="text-xs-left">{{ props.item.email }}</td>
				<td class="text-xs-center">{{ props.item.status }}</td>
				<td class="justify-right text-xs-right">
					<v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
					<v-icon small @click="deleteItem(props.item)">delete</v-icon>
				</td>
			</template>
			<template slot="no-data">
				<!-- <v-btn color="primary" @click="initialize">Reset</v-btn> -->
				Data not found.
			</template>
		</v-data-table>
	</v-flex>
</template>

<script>
	import data from './modules/data'
	import computed from './modules/computed'
	import mounted from './modules/mounted'
	import created from './modules/created'
	import methods from './modules/methods'
	import watch from './modules/watch'

	import Spinner from '@/components/Partials/Spinner'
	export default {
		name: 'author',
		components: {Spinner},
		data: () => (data),
		mounted: mounted,
		computed: computed,
		methods: methods,
		created: created,
		watch: watch
	}
</script>

<style lang="scss" scoped></style>