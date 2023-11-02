<template>
	<div id="user-component">
		<slot></slot>
		<v-btn @click="formDialog = true" color="primary" dark>Add User</v-btn>
		<v-data-table
		    :headers="table.headers"
		    :items="users"
		    class="elevation-1"
		>
		    <template slot="items" slot-scope="props">
		      	<td>{{ props.item.id }}</td>
		      	<td class="text-right">{{ props.item.name }}</td>
		      	<td class="text-right">{{ props.item.email }}</td>
		      	<td class="text-right">{{ props.item.status }}</td>
		    </template>
		</v-data-table>
		<form method="post" action="/book" @submit.prevent="store" @keydown="form.errors.clear($event.target.name)">
			<div class="control">
				<label for="name" class="label">Full Name</label>
				<input type="text" id="name" name="name" class="input" v-model="form.name" autocomplete="off" />
				<transition><span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span></transition>
			</div>
			<div class="control">
				<label for="email" class="label">Email</label>
				<input type="text" id="email" name="email" class="input" v-model="form.email" autocomplete="off" />
				<span class="help is-danger" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
			</div>
			<div class="control">
				<label for="password" class="label">Password</label>
				<input type="password" id="password" name="password" class="input" v-model="form.password" autocomplete="off" />
				<span class="help is-danger" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
			</div>
			<div class="control">
				<label for="status" class="label">Status</label>
				<input type="text" id="status" name="status" class="input" v-model="form.status" autocomplete="off" />
				<span class="help is-danger" v-if="form.errors.has('status')" v-text="form.errors.get('status')"></span>
			</div>
			<div class="control">
				<button type="submit" :disabled="form.errors.any()">Create</button>
			</div>
		</form>

		<text-input v-model="name"/>
		<v-dialog v-model="formDialog" persistent max-width="600px">
		    <v-card>
		        <v-card-title pa-0>
		            <span class="title">User Details</span>
		        </v-card-title>
		        <v-card-text style="margin-top: -25px;">
		            <v-container grid-list-md pa-1>
		                <v-layout wrap>
		                	<v-form>
			                    <v-flex xs12 sm6>
			                        <v-text-field label="Legal name*" required v-model="form.name" :rules="[rules.required]"></v-text-field>
			                    </v-flex>
			                    <v-flex xs12 sm6>
			                        <v-text-field label="Phone*" required v-model="form.phone" :rules="[rules.required]"></v-text-field>
			                    </v-flex>
			                    <v-flex xs12 sm6>
			                        <v-text-field label="Email*" required v-model="form.email" :rules="[rules.required]"></v-text-field>
			                    </v-flex>
			                    <v-flex xs12 md6>
			                    	<v-text-field v-model="form.password" :append-icon="passwordField ? 'visibility_off' : 'visibility'"
						            :rules="[rules.required, rules.min]"
						            :type="passwordField ? 'text' : 'password'"
						            name="input-10-1"
						            label="Normal with hint text"
						            hint="At least 8 characters"
						            counter
						            @click:append="passwordField = !passwordField"
						          ></v-text-field>
			                    </v-flex>
			                </v-form>
		                </v-layout>
		            </v-container>
		            <small>*indicates required field</small>
		        </v-card-text>
		        <v-card-actions>
		            <v-spacer></v-spacer>
		            <v-btn color="blue darken-1" flat @click="formDialog = false">Cancel</v-btn>
		            <v-btn color="blue darken-1" flat @click="formDialog = false">Save</v-btn>
		        </v-card-actions>
		    </v-card>
		</v-dialog>
	</div>
</template>

<script>

	//import { VclFacebook, VclInstagram } from 'vue-content-loading';
	import VueContentLoading from 'vue-content-loading';
	import TextInput from '@/components/Form/Text'

	import Form from '@/libs/Form';
	export default {
		name: 'User',

		components: { TextInput, VueContentLoading },

		data: () => ({
			table: {
				headers: [
					{ text: 'ID', align: 'center', sortable: true, value: 'id' },
		          	{ text: 'Name', align: 'left', value: 'name' },
		          	{ text: 'Email', align: 'left', value: 'email' },
		          	{ text: 'Status', align: 'left', value: 'status' }
		        ]
			},
			users: [],
			form: new Form({
				id: null,
				name: null,
				email: null,
				password: null,
				status: null
			}),
			rules: {
				required: value => !!value || 'Required.',
		        min: v => v.length >= 8 || 'Min 8 characters',
		        emailMatch: () => ('The email and password you entered don\'t match')
			},
			formDialog: false,
			passwordField: false,
			name: 'Yubaraj Shrestha'
		}),

		computed: {
			rect () {
		        return {
		          style: {
		            fill: 'url(#f06)',
		          },
		        };
		      },
		},

		mounted() {
			this.get();
		},

		methods: {

			get() {
				axios.get('/user').then(({data}) => {
					this.users = data;
				}).catch(error => {
					console.log(error);
				})
			},

			store() {
				this.form.post('/user').then(response => {
					// TODO: Handle things...
				}).catch(error => {
					// TODO: Handle things...
				}).finally(() => {
					this.get();
				});
			},

			resetForm() {
				this.form.reset();
			}

		}
	}
</script>

<style lang="scss" scoped>
	#user-component {
		padding: 10px;
		ul {
			li {
				list-style: armenian;
			}
		}
		form {
			.control {
				padding: 5px;
				margin-bottom: 5px;
				label {
					display: block;
					padding: 5px;
				}
				input {
					border: 1px solid #afafaf;
					display: block;
					width: 250px;
					padding: 5px;
					border-radius: 5px;
				}
				span {
					&.help {
					    font-size: 14px;
					    display: block;
					    margin-top: 5px;
					    margin-left: 5px;
					    &.is-danger {
					    	color: darkred;
					    }
					}
				}
			}
		}
	}
</style>