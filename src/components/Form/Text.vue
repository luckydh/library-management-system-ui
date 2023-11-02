<template>
	<div class="control">
		<!-- <label for="status" class="label">{{ label }}</label> -->
		
		<v-text-field :label="label" :value="code" @input="syncCode($event)" ref="input"></v-text-field>

		<!-- <input type="text" :value="code" @input="syncCode($event.target.value)" ref="input"> -->
	</div>
</template>
<script>
	export default {
		name: 'TextInput',
		props: ['code', 'label'],
		methods: {
			syncCode(code) {
				this.$emit('input', code);
			}
		},
		computed: {
			inputLabel () {
				return this.label;
			}
		}
	}
</script>
<style lang="scss" scoped>
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
</style>