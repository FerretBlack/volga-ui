<template>
  <button
    :class="[
      'button',
      {
        ['-outlined']: outlined,
        ['-strong']: strong,
        ['-full-width']: fullWidth,
      },
    ]"
    :style="[buttonSize, customColor]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <slot></slot>
  </button>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "VButton",
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    strong: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
    },
    color: {
      type: String,
      default: "",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const isHover = ref(false);

    const buttonSize = computed(() => {
      if (props.size === "small") {
        return {
          padding: "10px 16px",
          fontSize: "14px",
        };
      } else if (props.size === "x-small") {
        return {
          padding: "9px 12px",
          fontSize: "11px",
        };
      } else if (props.size === "large") {
        return {
          padding: "15px 28px",
          fontSize: "18px",
        };
      }
    });

    const customColor = computed(() => {
      if (props.color && props.outlined) {
        return {
          background: isHover.value ? props.color : "#fff",
          color: isHover.value ? "#fff" : props.color,
          borderColor: props.color,
        };
      } else if (props.color) {
        return {
          background: props.color,
        };
      }
    });

    return {
      buttonSize,
      customColor,
      isHover,
    };
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 12px 25px;
  font-size: 16px;
  cursor: pointer;
  background: $primary;
  border-radius: 5px;
  border: none;
  color: white;

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

  &.-strong {
    border-radius: 0;
  }

  &.-full-width {
    width: 100%;
  }
}
</style>
