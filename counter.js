const Counter = {
  data() {
    return {
      count: 0,
    };
  },
  template: '{{time()}}Le compteur vaut : {{count}}, son double vaut : {{countX2}}',
  created() {
    setInterval(() => {
      this.count += 1;
    }, 1000);
  },
  methods: {
    time() {
      var date = new Date();
      var hour = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      if (hour < 10) hour = '0' + hour;
      if (min < 10) min = '0' + min;
      if (sec < 10) sec = '0' + sec;
      return '' + hour + ':' + min + ':' + sec + ' ';
    },
  },
  computed : {
    countX2(){
      return 2 * this.count;
    }
  }
};
export default Counter;
