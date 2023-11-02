<template>
	<div class="has-spinner">
		<spinner light="light" :loading="form.loading"/>
		<v-data-table :headers="form.headers" :items="form.items" class="elevation-1" :loading="form.loading">
			<template slot="items" slot-scope="props">
				<td v-for="(data, key) in form.headers" :key="key">{{ props.item[data.value] }}</td>
				<td>
					<v-btn small icon color="red" class="white--text">
						<v-icon dark small>edit</v-icon>
					</v-btn>
				</td>
			</template>
		</v-data-table>
	</div>
</template>
<script>
import Spinner from '@/components/Partials/Spinner'
export default {
	name: 'data-table',
	props: ['form'],
	components: {Spinner},
	data: () => ({
		dropdown_icon: [
			{ text: 'list', callback: () => console.log('list') },
			{ text: 'favorite', callback: () => console.log('favorite') },
			{ text: 'delete', callback: () => console.log('delete') }
		]
	}),
	mounted() {
		this.form.get('https://jsonplaceholder.typicode.com/todos')
	},
	methods: {
		test (event) {
			console.log(event);
		}
	}
}

</script>
<style lang="scss" scoped></style>
