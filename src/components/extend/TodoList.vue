<template>
  <div class="todo-list">
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        {{ todo }}
        <button @click="onDelete(i)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';

export default Vue.extend({
  name: 'TodoList',
  props: {
    todos: {
      type: Array as PropType<string[]>,
      required: true,
    },
    delete: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onDelete(index: number) {
      this.delete(index);
    },
  },
});
</script>

<style scoped>
/* NO NEED TO ADAPT DESIGN */
</style>
