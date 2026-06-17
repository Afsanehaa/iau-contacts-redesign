<script setup>
import { ref } from 'vue';
import { provinces } from './data/provinces';

const selectedProvince = ref(null);

const selectProvince = (province) => {
  selectedProvince.value = province;
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans pb-20" dir="rtl">
    <!-- هدر سایت -->
    <header class="bg-blue-900 text-white p-8 mb-10 text-center shadow-lg">
      <h1 class="text-2xl md:text-3xl font-bold">
        سامانه هوشمند اطلاع‌رسانی واحدهای دانشگاهی
      </h1>
      <p class="mt-2 text-blue-200 opacity-90">دسترسی سریع به سامانه‌های آموزشی و کانال‌های اطلاع‌رسانی</p>
    </header>

    <main class="max-w-6xl mx-auto px-6">
      <!-- بخش دکمه‌های انتخاب استان -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-16">
        <button 
          v-for="province in provinces" 
          :key="province.id"
          @click="selectProvince(province)"
          :class="[
            'py-3 px-2 rounded-xl border-2 text-sm font-bold transition-all duration-300', 
            selectedProvince?.id === province.id 
              ? 'border-blue-600 bg-blue-600 text-white shadow-md transform scale-105' 
              : 'border-white bg-white text-gray-600 hover:border-blue-300'
          ]"
        >
          {{ province.name }}
        </button>
      </div>

      <!-- لیست واحدها -->
      <section v-if="selectedProvince" class="animate-fade-in">
        <div class="flex items-center gap-3 mb-8 border-r-8 border-blue-600 pr-4">
          <h2 class="text-2xl font-black text-gray-800">
            استان {{ selectedProvince.name }}
          </h2>
        </div>

        <div class="grid gap-6">
          <div 
            v-for="city in selectedProvince.cities" 
            :key="city.id" 
            class="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col xl:flex-row xl:items-end justify-between gap-8 hover:shadow-xl transition-all"
          >
            <!-- بخش اطلاعات واحد -->
            <div class="flex-1">
              <h3 class="text-2xl font-black text-blue-900 mb-4">واحد {{ city.name }}</h3>
              <div class="flex flex-wrap items-center gap-y-3 gap-x-6 text-gray-600">
                <div class="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                  <span class="text-gray-400 text-xs">👤 پشتیبان:</span>
                  <span class="font-bold text-gray-800">{{ city.support }}</span>
                </div>
                <div class="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                  <span class="text-gray-400 text-xs">📞 تماس:</span>
                  <a :href="'tel:' + city.phone" class="font-mono font-bold text-blue-600 hover:underline" dir="ltr">
                    {{ city.phone }}
                  </a>
                </div>
              </div>
            </div>

            <!-- بخش دکمه‌های عملیاتی (ترازشده با اطلاعات بالا) -->
            <div class="flex flex-wrap gap-3 mb-1">

              <!-- دکمه وادانا با رنگ آبی درخواستی -->
              <a 
                :href="'http://' + city.vadana" 
                target="_blank" 
                class="flex-1 md:flex-none bg-blue-900 text-white px-7 py-3.5 rounded-2xl text-sm font-bold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <span>🖥️</span> سامانه وادانا
              </a>

              <a 
                :href="city.messenger" 
                target="_blank" 
                class="flex-1 md:flex-none bg-sky-100 text-sky-700 px-7 py-3.5 rounded-2xl text-sm font-bold hover:bg-sky-200 transition-all flex items-center justify-center gap-2"
              >
                <span>💬</span> کانال اطلاع‌رسانی
              </a>

              <a 
                :href="'http://' + city.website" 
                target="_blank" 
                class="flex-1 md:flex-none bg-gray-100 text-gray-500 px-7 py-3.5 rounded-2xl text-sm font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                <span>🌐</span> وب‌سایت
              </a>
            </div>
          </div>
        </div>
      </section>

      <div v-else class="text-center py-24 bg-white rounded-[3rem] shadow-inner border border-dashed border-gray-200">
        <div class="text-7xl mb-6 opacity-20">📍</div>
        <h3 class="text-xl font-bold text-gray-400 italic">برای شروع، یک استان را انتخاب کنید</h3>
      </div>
    </main>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.font-sans {
  font-family: 'Tahoma', 'Segoe UI', sans-serif;
}
</style>