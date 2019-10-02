<template>
  <div class="todo-list">
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        {{todo}}
        <button @click="onDelete(i)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {createComponent, PropType} from '@vue/composition-api';

const TodoList = createComponent({
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
  setup(props) {
    const onDelete = (index: number) => {
      props.delete(index);
    };
    return {
      onDelete,
    };
  }
});

export default TodoList;
</script>

<style scoped>
/* NO NEED TO ADAPT DESIGN */
</style>
