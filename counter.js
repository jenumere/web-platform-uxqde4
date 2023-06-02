const Counter = {
  data() {
    return {
      count: 0,
    };
  },
  template: 'Le compteur vaut : {{count}}',
  created() {
    setInterval(() => {
      this.count += 1;
    }, 1000);
  },
};
export default Counter;
