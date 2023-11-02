<template>
	<v-flex>
		{{ name }}
	</v-flex>
</template>

<script>
	import data from './modules/data'
	import computed from './modules/computed'
	import mounted from './modules/mounted'
	import methods from './modules/methods'
	import watch from './modules/watch'
	export default {
		name: 'account-head',
		data: () => (data),
		mounted: mounted,
		computed: computed,
		methods: methods,
		watch: watch
	}
</script>

<style lang="scss" scoped></style>