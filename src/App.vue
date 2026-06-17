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
    <header class="bg-blue-900 text-white shadow-xl mb-10">
      <div class="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-6">
        <div class="flex-shrink-0 bg-none p-3 rounded-2xl ">
          <img 
            src="./assets/logo.png"
            alt="IAU Logo" 
            class="h-20 md:h-24 w-auto object-contain"
          />
        </div>
        <div class="text-center md:text-right">
          <h1 class="text-2xl md:text-3xl font-black mb-2">
            درگاه ورود به سامانه های آموزش مجازی
          </h1>
          <p class="text-blue-200 opacity-90 text-sm md:text-base font-medium">
          دانشگاه آزاد اسلامی - واحد الکترونیکی  
          </p>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
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

      <section v-if="selectedProvince" class="animate-fade-in">
        <div class="flex items-center gap-3 mb-8 border-r-8 border-blue-600 pr-4">
          <h2 class="text-2xl font-black text-gray-800">استان {{ selectedProvince.name }}</h2>
        </div>

        <div class="grid gap-6">
          <div 
            v-for="city in selectedProvince.cities" 
            :key="city.id" 
            class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col xl:flex-row xl:items-end justify-between gap-6 hover:shadow-xl transition-all"
          >
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
              <a :href="'http://' + city.vadana" target="_blank" class="flex-1 md:flex-none bg-blue-900 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
                <span>🖥️</span> وادانا
              </a>

              <a :href="city.messenger" target="_blank" class="flex-1 md:flex-none bg-sky-100 text-sky-700 px-6 py-3 rounded-2xl text-sm font-bold hover:bg-sky-200 transition-all flex items-center justify-center gap-2">
                <span>💬</span> کانال اطلاع‌رسانی
              </a>
              <a :href="'http://' + city.website" target="_blank" class="flex-1 md:flex-none bg-gray-100 text-gray-500 px-6 py-3 rounded-2xl text-sm font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                <span>🌐</span> وب‌سایت
              </a>
            </div>
          </div>
        </div>
      </section>

      <div v-else class="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-gray-200">
        <div class="text-7xl mb-4 opacity-10">🎓</div>
        <p class="text-gray-400 font-bold text-lg">برای مشاهده اطلاعات واحدها، ابتدا یک استان را انتخاب کنید</p>
      </div>
       <footer class="mt-16 mb-10">
        <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs md:text-sm text-gray-500 font-bold mb-6">
            <a href="https://ec.iau.ir/fa/content/281" class="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <span>راهنما و فیلم های آموزشی</span>
              <span class="text-lg">🎞️</span>
            </a>
            <span class="hidden md:block text-gray-200">|</span>
            <a href="https://vadamap.ec.iau.ir/contacts.php" class="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <span>مرکز دانلود و فایل‌های راهنما</span>
              <span class="text-lg">📥</span>
            </a>
            <span class="hidden md:block text-gray-200">|</span>
            <a href="https://vadamap.ec.iau.ir/contacts.php" class="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <span>اطلاعات تماس با پشتیبانی فنی مستقر در واحدها</span>
              <span class="text-lg">📞</span>
            </a>
          </div>
          <div class="flex items-center justify-center gap-2 text-[10px] md:text-xs text-gray-400 border-t border-gray-50 pt-6">
            <span class="font-medium text-center">دانشگاه آزاد اسلامی واحد الکترونیکی</span>
            <span class="text-lg">©️</span>
          </div>
        </div>
      </footer>

    </main>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
.font-sans { font-family: 'Tahoma', sans-serif; }
</style>