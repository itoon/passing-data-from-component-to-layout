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
    <nuxt @changeTitle="title = $event" />    
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Title from Layout'
    }
  }
}
</script>