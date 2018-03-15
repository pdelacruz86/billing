<template>
	<div class="step-wrapper" :class="{ 'active': active }">
		<div v-if="laststep">
			<button class="btn btn-primary" @click="lastStep()" :disabled="firststep">Back</button>
			<button class="btn btn-primary col-md-offset-10" @click="nextStep()">Submit Accession</button>
		</div>
		<div v-else>
			<button class="btn btn-primary" @click="lastStep()" :disabled="firststep">Back</button>
			<button class="btn btn-primary col-md-offset-10"  @click="nextStep()" :disabled="laststep">Next</button>
		</div>
	</div>
</template>

<script>
export default {
  created() {},
  props: ["step", "stepcount", "currentstep"],

  computed: {
    active: function() {
      return this.step.id == this.currentstep;
    },

    firststep: function() {
      return this.currentstep == 1;
    },

    laststep: function() {
      return this.currentstep == this.stepcount;
    }
  },

  methods: {
    nextStep: function() {
      this.$emit("step-change", this.currentstep + 1);
    },

    lastStep: function() {
      this.$emit("step-change", this.currentstep - 1);
    }
  }
};
</script>