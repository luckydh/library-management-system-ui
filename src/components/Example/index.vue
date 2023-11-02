<template>
	<v-flex>
		{{ name }}
		<!-- <form method="post" action="/user" @submit.prevent="store" @keydown="form.errors.clear($event.target.name)" class="has-spinner">
			<spinner light="light" :loading="form.loading"/>
			<div class="control">
				<label for="name" class="label">Full Name</label>
				<input type="text" id="name" name="name" class="input" v-model="form.name" autocomplete="off" />
				<transition><span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span></transition>
			</div>
			<div class="control">
				<label for="email" class="label">Email</label>
				<input type="email" id="email" name="email" class="input" v-model="form.email" autocomplete="off" />
				<transition><span class="help is-danger" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span></transition>
			</div>
			<div class="control">
				<label for="phone" class="label">Phone</label>
				<input type="text" id="phone" name="name" class="input" v-model="form.phone" autocomplete="off" />
				<transition><span class="help is-danger" v-if="form.errors.has('phone')" v-text="form.errors.get('phone')"></span></transition>
			</div>
			<v-flex xs4>
				<text-input v-model="form.address" label="Address"/>
			</v-flex>
			
			<text-input v-model="form.contact" label="Contact"/>

			<div class="control">
				<button type="submit" :disabled="form.errors.any()">Create</button>
			</div>
		</form> -->
	</v-flex>
</template>

<script>
	import data from './modules/data'
	import computed from './modules/computed'
	import mounted from './modules/mounted'
	import methods from './modules/methods'
	import watch from './modules/watch'
	export default {
		name: 'example',
		data: () => (data),
		mounted: mounted,
		computed: computed,
		methods: methods,
		watch: watch
	}
</script>

<style lang="scss" scoped></style>