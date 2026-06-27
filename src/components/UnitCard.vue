<script setup>
defineProps({
  city: Object
});
</script>

<template>
  <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col xl:flex-row xl:items-end justify-between gap-6 hover:shadow-xl transition-all">
    <div class="flex-1">
      <h3 class="text-xl font-extrabold text-blue-900 mb-4">واحد {{ city.name }}</h3>
      <div class="flex flex-wrap items-center gap-3">
        <div class="bg-gray-50 px-4 py-2 rounded-xl text-sm border border-gray-100">
          <span class="text-gray-400">👤 پشتیبان:</span> 
          <span class="font-bold text-gray-700 mr-1">{{ city.support }}</span>
        </div>
        <div class="bg-gray-50 px-4 py-2 rounded-xl text-sm border border-gray-100">
          <span class="text-gray-400">📞 تماس:</span>
          <a :href="'tel:' + city.phone" class="font-mono font-bold text-blue-600 ml-1">{{ city.phone }}</a>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-2 mb-1">
      <a :href="'http://' + city.vadana" target="_blank" class="action-btn bg-blue-900 text-white">
        <span>🖥️</span> وادانا
      </a>
      <a :href="city.messenger" target="_blank" class="action-btn bg-sky-100 text-sky-700 hover:bg-sky-200">
        <span>💬</span> کانال اطلاع‌رسانی
      </a>
      <a :href="'http://' + city.website" target="_blank" class="action-btn bg-gray-100 text-gray-500 hover:bg-gray-200">
        <span>🌐</span> وب‌سایت
      </a>
    </div>
  </div>
</template>

<style scoped>
.action-btn {
  @apply flex-1 md:flex-none px-6 py-3 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2;
}
</style>