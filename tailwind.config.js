/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./assets/css/*.css",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily:{
        playfair:["Playfair Display" , 'sans-seriff']
      },
  },
  plugins: [],

}
}
