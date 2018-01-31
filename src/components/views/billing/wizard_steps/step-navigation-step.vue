<template>
	<li :class="indicatorclass" @click="moveToStep">
		<div class="step"><i :class="step.icon_class"></i></div>
		<div class="caption hidden-xs hidden-sm">
			{{ step.title }}
		</div>
	</li>
</template>
<script>
	export default {
		props: ['step', 'currentstep'],

		computed: {
			indicatorclass: function() {
				return {
					'active': (this.step.id == this.currentstep),
					'complete': (this.currentstep > this.step.id)
				}
			}
		},
		methods: {
			moveToStep() {
				debugger;
				this.$emit('step-change-header', this.step.id)
			}
		}
	}
</script>