<template>
	<v-list dense class="grey lighten-4">
		<template v-for="(item, i) in items">
			<v-layout v-if="item.heading" :key="i" row align-center>
				<v-flex xs6>
					<v-subheader v-if="item.heading">
						{{ item.heading }}
					</v-subheader>
				</v-flex>
				<!-- <v-flex xs6 class="text-xs-right">
					<v-btn small flat>edit</v-btn>
				</v-flex> -->
			</v-layout>
			<v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
			<v-list-tile v-else :key="i" :to="goto(item.path)">
				<v-list-tile-action>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title class="grey--text">
						{{ item.text }}
					</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</template>
	</v-list>
</template>
<script>
	export default {
		name: 'Sidebar',
		data: () => ({
			items: [
				/*{ icon: 'lightbulb_outline', text: 'Notes' },*/
				/*{ icon: 'touch_app', text: 'Reminders' },*/
				{ icon: 'touch_app', text: 'Dashboard', path: '/' },
				{ divider: true },
				{ heading: 'Menus' },
				{ icon: 'archive', text: 'Company', path: '/company' },
				{ icon: 'archive', text: 'Acount Head', path: '/account-head' },
				/** Route Starts... */
				{ icon: 'person', text: 'Users', path: '/users' },
				{ icon: 'person', text: 'Author', path: '/author' },
				{ icon: 'book', text: 'Book', path: '/book' },
				{ icon: 'publisher', text: 'Publisher', path: '/publisher' },
				/** Route Ends */
				{ divider: true },
				{ icon: 'settings', text: 'Settings' },
				{ icon: 'help', text: 'Help' },
				{ icon: 'phonelink', text: 'App downloads' }
			]
		}),

		methods: {
			goto: (url) => url,
		}
	}
</script>
<style lang="scss" scoped></style>