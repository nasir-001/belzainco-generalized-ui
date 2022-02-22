module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'about-image': "url('src/assets/img/rectangle1.png')",
        'bg-image': "url('src/assets/img/rectangle3.png')"
      }
    },
  },
  plugins: [],
  prefix: "tw-",
};
