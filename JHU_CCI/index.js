const vm = new Vue({
    el: '#app',
    data: {
      info: [],
      search:''
    },
    mounted() {
      axios.get("https://data.sfgov.org/resource/vmnk-skih.json")
     
      .then(response => {this.info = response.data})

    },
    computed: {
      filteredList() {
        return info.filter(info => {
          return common_name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
   
  });
