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
  
  <style scoped>
  .dropdown-level-selector {
    position: relative;
    min-width: 250px;
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 12px 1rem;
    border-radius: 50px;
    background: white;
    display: flex;
    flex-direction: column;
  }
  
  .dropdown-selected {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 5px;
    font-size: 16px;
  }
  
  .arrow-icon {
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.3s ease;
  }
  
  .arrow-icon.open {
    transform: rotate(180deg);
  }
  
  .dropdown-options {
    position: absolute;
    top: 100%;
    left: 0;
    margin: 4px 0;
    width: 100%;
    background: white;
    border: 1px solid #ccc;
    list-style: none;
    padding: 0;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    z-index: 100;
  }
  
  .dropdown-options li {
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown-options li:hover, 
  .dropdown-options li.selected {
    background: #f0f0f0;
  }
  </style>
  