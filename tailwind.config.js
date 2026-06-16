/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'iau-blue':'#1f4e79' , //آبی اصلی دانشگاه
        'iau-gray': '#f4f4f5', // رنگ پس‌زمینه صفحات
      },
        fontFamily: {
        'vazir': ['Vazirmatn', 'sans-serif'], // اگر از فونت وزیر استفاده می‌کنی
      }
    },
  },
  plugins: [],
}


