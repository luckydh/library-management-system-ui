<!-- Attributes
	- size: integer
	- color: hex
	- light: [dark, light]
-->
<template>
	<div :class="getClass" v-if="loading">
		<atom-spinner
		  :animation-duration="1200"
		  :size="getSize"
		  :color="getColor"
		/>
	</div>
</template>
<script>
	import { AtomSpinner } from 'epic-spinners'
	export default {
		name: 'Spinner',
		props: ['size', 'color', 'light', 'loading'],
		components: { AtomSpinner },
		computed: {
			getSize() { return this.size ? this.size : 55 },
			getColor() { return this.color ? this.color : '#1565c0' },
			getClass() { return "layer " + this.light }
		},
		data: () => ({
			//
		})
	}
</script>
<style lang="scss" scoped>
	.layer {
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
		display: flex;
		z-index: 99999;
		justify-content: center;
  		align-items: center;
  		&.light {
  			background: rgba(255, 255, 255, .5);
  		}
  		&.dark {
  			background: rgba(0, 0, 0, .05);
  		}
	}
</style>