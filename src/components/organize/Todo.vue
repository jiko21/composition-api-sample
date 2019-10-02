<template>
  <div class="Todo">
    <h1>Todo Apps</h1>
    <TodoForm :onSubmit="addTodo"/>
    <TodoList
      :todos="todos"
      :delete="deleteTodo"
    />
  </div>
</template>

<script lang="ts">
import {createComponent, reactive} from '@vue/composition-api';
import TodoList from '@/components/normal/TodoList.vue';
import TodoForm from '@/components/normal/TodoForm.vue';
import useTodos from './Store';

const Todo = createComponent({
  components: {
    TodoList,
    TodoForm,
  },
  setup() {
    const {todos, deleteTodo, addTodo} = useTodos();

    return {
      todos,
      deleteTodo,
      addTodo,
    };
  },
});

export default Todo;
</script>

<style scoped>

</style>
