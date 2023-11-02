<template>
	<v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="has-spinner">
                <spinner light="light" :loading="form.loading"/>
                <v-form @submit.prevent="store">
                  	<v-text-field v-model="form.email" prepend-icon="person" name="email" label="Login" type="text" autocomplete="off" :error-messages="form.errors.get('email')" @keyup.enter="store" @keydown="form.errors.clear('email')"></v-text-field>
                  	<v-text-field v-model="form.password" id="password" prepend-icon="lock" name="password" label="Password" type="password" :error-messages="form.errors.get('password')" @keyup.enter="store" @keydown="form.errors.clear('password')"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="primary" :disabled="form.errors.any() || form.loading" @click.prevent="store">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
	import data from './modules/data'
	import computed from './modules/computed'
	import mounted from './modules/mounted'
	import methods from './modules/methods'
	import watch from './modules/watch'

	import Spinner from '@/components/Partials/Spinner'
	
	export default {
		name: 'Login',
		components: {Spinner},
		data: () => (data),
		mounted: mounted,
		computed: computed,
		methods: methods,
		watch: watch
	}
</script>

<style lang="scss" scoped></style>