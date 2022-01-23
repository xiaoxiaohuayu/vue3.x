<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1 class="AAA">{{ msg }}</h1>
</template>
<script lang="ts"></script>

<style lang="less" scoped>
a {
  color: #42b983;
}
.title {
  color: @color_;
}

.title2 {
  color: @color_1;
}
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
