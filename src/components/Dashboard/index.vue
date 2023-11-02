<template>
	<v-container>
	</v-container>
</template>

<script>
	import data from './modules/data'
	import computed from './modules/computed'
	import mounted from './modules/mounted'
	import methods from './modules/methods'
	import watch from './modules/watch'

	export default {
		name: 'dashboard',
		mounted: mounted,
		data: () => (data),
		computed: computed,
		methods: methods,
		watch: watch
	}
</script>

<style lang="scss" scoped></style>