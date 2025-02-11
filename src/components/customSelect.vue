<template>
    <div class="dropdown-level-selector" ref="dropdown" @click="toggleDropdown">
      <div class="dropdown-selected">
        {{ selectedLabel }}
        <svg 
            class="arrow-icon" 
            :class="{ open: isOpen }" 
            viewBox="0 0 24 24"
            width="25"
            height="25"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <ul v-if="isOpen" class="dropdown-options">
        <li 
          v-for="option in options" 
          :key="option.value" 
          @click.stop="selectOption(option)"
          :class="{ 'selected': option.value === modelValue }"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </template>
  
<script setup>
  import { ref, computed, onMounted } from "vue";
  import { onClickOutside } from "@vueuse/core";
  
  const props = defineProps({
    modelValue: [String, Number],
    options: {
      type: Array,
      required: true,
    },
  });
  
  const emit = defineEmits(["update:modelValue"]);
  const isOpen = ref(false);
  const dropdown = ref(null);
  
  // Ensure the first option is selected by default
  onMounted(() => {
    if (!props.modelValue && props.options.length > 0) {
      emit("update:modelValue", props.options[0].value);
    }
  });
  
  const selectedLabel = computed(() => {
    const selected = props.options.find(option => option.value === props.modelValue);
    return selected ? selected.label : "";
  });
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  const selectOption = (option) => {
    emit("update:modelValue", option.value);
    isOpen.value = false;
  };
  
  // Close dropdown when clicking outside
  onClickOutside(dropdown, () => {
    isOpen.value = false;
  });
</script>