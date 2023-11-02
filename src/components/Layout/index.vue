<template>
	<v-flex>
		<v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
			<sidebar />
		</v-navigation-drawer>
		<v-toolbar dark color="blue darken-3" dense app fixed clipped-left>
			<v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
			<span class="title ml-3 mr-5">eAcademy&nbsp;<span class="font-weight-light">Library</span></span>
			<!-- <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field> -->
			<v-spacer></v-spacer>
			<v-badge color="success" overlap>
	          	<span slot="badge" small>6</span>
	          	<v-icon>notifications</v-icon>
	        </v-badge>
		</v-toolbar>
		<v-content>
			<v-container fluid fill-height class="grey lighten-4">
				<v-layout>
					<transition name="fade">
						<router-view />
					</transition>
				</v-layout>
			</v-container>
		</v-content>
	</v-flex>
</template>

<script>
import Sidebar from '@/components/Partials/Sidebar'
export default {
	name: 'Library',

	components: { Sidebar },

	data: () => ({
		drawer: null,
	}),

	methods: {
		goto: (url) => url
	},

	created () {
		this.loadData();
	},

	props: {
      	source: String
    }
}

</script>
<style lang="scss">
html,
body {
	padding: 0;
	margin: 0;
}

#app {
    .v-navigation-drawer__border {
      	display: none
    }
}

</style>
