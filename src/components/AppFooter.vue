<template>
  <footer class="mt-16 mb-10">
    <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs md:text-sm text-gray-500 font-bold mb-6">
        <a href="https://ec.iau.ir/fa/content/281" class="footer-link">
          <span>راهنما و فیلم های آموزشی</span>
          <span class="text-lg">🎞️</span>
        </a>
        <span class="hidden md:block text-gray-200">|</span>
        <a href="https://vadamap.ec.iau.ir/contacts.php" class="footer-link">
          <span>مرکز دانلود و فایل‌های راهنما</span>
          <span class="text-lg">📥</span>
        </a>
        <span class="hidden md:block text-gray-200">|</span>
        <a href="https://vadamap.ec.iau.ir/contacts.php" class="footer-link">
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
</template>

<style scoped>
.footer-link {
  @apply flex items-center gap-2 hover:text-blue-600 transition-colors;
}
</style>