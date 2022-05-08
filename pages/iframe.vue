<template>
  <div>
    <h5 class="d-flex align-items-center fw-bold" :style="styles">
      Responsive font-size <small class="ms-2"><code>h5</code></small>
    </h5>
    <div class="fs-var" :style="styles">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores magni ex quaerat vitae accusamus nam ut sapiente nostrum quam necessitatibus? Incidunt eius commodi eaque aperiam in officia, inventore tenetur harum.
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        min: this.$route.query.min,
        max: this.$route.query.max,
        val: this.$route.query.val,
        fac: this.$route.query.fac,
      }
    },
    computed: {
      styles() {
        return {
          '--fs-fac':     `${this.fac}`,
          '--fs-min-fac': `${this.min}`,
          '--fs-max-fac': `${this.max}`,
          '--fs-val-fac': `${this.val}`,
        }
      }
    }
  }
</script>

<style lang="scss">
  body {
    font-family: "Poppins", sans-serif;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
</style>