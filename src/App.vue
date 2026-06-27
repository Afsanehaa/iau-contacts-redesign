<script setup>
import { ref } from 'vue';
import { provinces } from './data/provinces.js';
import ProvinceButton from './components/ProvinceButton.vue';
import UnitCard from './components/UnitCard.vue';
import AppFooter from './components/AppFooter.vue'; 

const selectedProvince = ref(null);

const selectProvince = (province) => {
  selectedProvince.value = province;
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans pb-20" dir="rtl">
    <!-- Header -->
    <header class="bg-blue-900 text-white shadow-xl mb-10">
      <div class="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-6">
        <div class="flex-shrink-0 p-3">
          <img src="./assets/logo.png" alt="IAU Logo" class="h-20 md:h-24 w-auto object-contain" />
        </div>
        <div class="text-center md:text-right">
          <h1 class="text-2xl md:text-3xl font-black mb-2">درگاه ورود به سامانه‌های آموزش مجازی</h1>
          <p class="text-blue-200 opacity-90 text-sm md:text-base font-medium">دانشگاه آزاد اسلامی - واحد الکترونیکی</p>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6">
      <!-- بخش دکمه‌های استان‌ها -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
        <ProvinceButton  
          v-for="province in provinces" 
          :key="province.id"
          :name="province.name"
          :isActive="selectedProvince?.id === province.id"
          @click="selectProvince(province)"
        />
      </div>

      <!-- نمایش واحدها -->

      <section v-if="selectedProvince" class="animate-fade-in">
        <div class="flex items-center gap-3 mb-8 border-r-8 border-blue-600 pr-4">
          <h2 class="text-2xl font-black text-gray-800">استان {{ selectedProvince.name }}</h2>
        </div>
        <div class="grid gap-6">
          <UnitCard
            v-for="city in selectedProvince.cities" 
            :key="city.id" 
            :city="city" 
          />
        </div>
      </section>

      <!-- وضعیت انتخاب نشده -->
      <div v-else class="empty-state">
        <div class="text-7xl mb-4 opacity-10">🎓</div>
        <p class="text-gray-400 font-bold text-lg">برای مشاهده اطلاعات واحدها، ابتدا یک استان را انتخاب کنید</p>
      </div>

      <AppFooter />
    </main>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
.empty-state {
  @apply text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-gray-200;
}
</style>