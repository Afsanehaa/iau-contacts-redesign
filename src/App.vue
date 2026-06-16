```vue
<template>
  <div class="min-h-screen bg-gray-50 dir-rtl" dir="rtl">
    <!-- هدر برنامه -->
    <header class="bg-blue-700 text-white p-6 shadow-lg">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold">سامانه جستجوی مخاطبین دانشگاه</h1>
        <p class="text-blue-100 text-sm mt-1">واحد علوم و تحقیقات</p>
      </div>
    </header>

    <!-- بخش اصلی محتوا -->
    <main class="container mx-auto p-4 mt-6">
      <!-- باکس جستجو -->
      <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <label class="block text-gray-700 text-sm font-bold mb-2">جستجوی نام یا واحد:</label>
        <input 
          type="text" 
          placeholder="مثلاً: واحد آموزش یا دکتر حسنی..."
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />
      </div>

      <!-- محل قرارگیری لیست مخاطبین (در مرحله بعد) -->
      <div class="mt-8 text-center text-gray-400">
        <p>لیست مخاطبین اینجا نمایش داده خواهد شد...</p>
      </div>
    </main>
  </div>
</template>

<script setup>
// اینجا بعداً کدهای مربوط به جستجو را می‌نویسیم
</script>





