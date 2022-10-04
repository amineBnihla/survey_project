<template>
  <div class="relative">
    <slot>
      <input
        :type="props.typeInput"
        :id="$attrs.id"
        class="
          px-4
          w-full
          py-2
          peer
          text-blck
          caret-blck
          border border-slate-200
          focus:border-primary/30
          outline-none
          rounded-sm
        "
        :value="props.modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <label
        :for="$attrs.id"
        class="
          absolute
          text-slate-600 text-base
          duration-200
          pointer-events-none
          peer-focus:-top-3 peer-focus:text-xs peer-focus:left-0
          top-1/2
          left-4
          -translate-y-1/2
        "
        :class="{ '-top-3 text-xs left-0': filled }"
        >{{ props.label }}</label
      >
    </slot>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const filled = ref(false);
const props = defineProps({
  typeInput: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: "label",
  },
  modelValue: {
    type: String,
  },
});

defineEmits(["update:modelValue"]);
console.log(props.modelValue);
watch(
  () => props.modelValue,
  (newVal) => {
    newVal.length > 0 ? (filled.value = true) : (filled.value = false);
  },
  { deep: true }
);
</script>

<style>
</style>
