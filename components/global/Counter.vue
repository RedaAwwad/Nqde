<template>
  <div class="counter d-flex align-items-center shadow">
    <button @click="increase" class="btn py-0 px-3">
      +
    </button>
    <span>{{ count }}</span>
    <button @click="decrease" class="btn py-0 px-3">
      -
    </button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 1
    }
  },
  methods: {
    increase() {
      this.count += 1;
      this.update();
    },
    decrease() {
      if(this.count > 1) {
        this.count -= 1;
        this.update();
      }
    },
    update() {
      this.$emit('update', this.count);
    }
  }
}
</script>
