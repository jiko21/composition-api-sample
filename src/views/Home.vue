<template>
  <div class="home">
    <Todo />
  </div>
</template>

<script lang="ts">
import {createComponent} from '@vue/composition-api';
import Todo from "@/components/normal/Todo.vue"; // @ is an alias to /src

const Home = createComponent({
  components: {
    Todo,
  }
});

export default Home;
</script>
