<template>
	<ol class="step-indicator">
		<li v-for="step in steps"
			is="step-navigation-step"
			:step="step"
			:currentstep="currentstep"
			@step-change-header="stepChanged">
		</li>
	</ol>
</template>
<script>

	import StepNavigationStep from './step-navigation-step'

	export default {
		components : {
			StepNavigationStep
		},
		props: ['steps', 'currentstep'],
		methods: {
			stepChanged: function(step) {
				debugger;
				this.$emit('step-change', step)
			}
		}

	}
</script>