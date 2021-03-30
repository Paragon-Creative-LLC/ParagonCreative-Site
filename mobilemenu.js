new Vue({
  el: "#app",
  data: {
    open: false,
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
});
