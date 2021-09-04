<template>
<div>{{a}}</div>
<button @click="a++">添加</button>
{{msg}}
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: ['msg'],
  setup(n,c){
    let a = ref(0)
    console.log(n,c,a)
    return{
      a
    }
  }
}
</script>
<style scoped></style>
