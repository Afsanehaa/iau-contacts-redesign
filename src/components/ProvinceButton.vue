<script setup>
defineProps({
  name: String,
  isActive: Boolean
});
defineEmits(['click']);
</script>

<template>
  <button 
    @click="$emit('click')"
    :class="[
      'py-3 px-2 rounded-xl border-2 text-sm font-bold transition-all duration-300 cursor-pointer', 
      isActive 
        ? 'border-blue-600 bg-blue-600 text-white shadow-md transform scale-105' 
        : 'border-white bg-white text-gray-600 hover:border-blue-300'
    ]"
  >
    {{ name }}
  </button>
</template>