<template>
  <div class="Todo">
    <h2>Sub form</h2>
    <input v-model="state.todo" />
    <button @click="onSubmit">追加</button>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        {{todo}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {createComponent, reactive} from '@vue/composition-api';
import useTodos from './Store';

const Todo = createComponent({
  setup() {
    const {addTodo, todos} = useTodos();
    const state = reactive({
      todo: '',
    });
    const onSubmit = () => {
      addTodo(state.todo);
      state.todo = '';
    };
    return {
      state,
      onSubmit,
      todos,
    };
  },
});

export default Todo;
</script>

<style scoped>

</style>
