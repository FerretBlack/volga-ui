<template>
  <button :class="[$style.button, { [$style['-outlined']]: outlined }]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
  },

  setup() {},
};
</script>

<style lang="scss" module>
.button {
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  background: $primary;
  border-radius: 5px;
  border: none;
  color: white;
  padding: 10px 20px;

  &:hover {
    opacity: 0.9;
  }

  &.-outlined {
    border: 2px solid;
    background: white;
    border-color: $primary;
    color: $primary;

    &:hover {
      background: $primary;
      color: white;
      opacity: 1;
    }
  }
}
</style>
