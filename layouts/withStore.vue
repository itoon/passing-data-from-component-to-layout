<template>
  <div class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1>{{ title }}</h1>
          </div>
        </div>
      </div>
    </div>    
    <nuxt/>    
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'With Store Layout'
    }
  },
  watch: {
    '$store.getters.state.title': function(val) {      
      this.changeTitle(val)
    },
    '$store.state.title': function(val) {      
      this.changeTitle(val)
    }    
    /*
    '$store.state.title': (newVal, oldVal) {
      this.changeTitle(newVal) // can't access this
    }
    */
  },
  methods: {
    changeTitle(title){
      this.title = title
    }
  }
}
</script>