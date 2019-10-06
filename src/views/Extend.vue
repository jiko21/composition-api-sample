<template>
  <div class="home">
    <Todo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Todo from "@/components/extend/Todo.vue"; // @ is an alias to /src

export default Vue.extend({
  name: 'Extend',
  components: {
    Todo,
  },
});
</script>
