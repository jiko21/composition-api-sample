<template>
  <div class="Todo">
    <h1>Todo Apps</h1>
    <TodoForm :onSubmit="putTodo"/>
    <TodoList
      :todos="state.todos"
      :delete="deleteTodo"
    />
  </div>
</template>

<script lang="ts">
import {createComponent, reactive} from '@vue/composition-api';
import TodoList from '@/components/normal/TodoList.vue';
import TodoForm from '@/components/normal/TodoForm.vue';

const Todo = createComponent({
  components: {
    TodoList,
    TodoForm,
  },
  setup() {
    const state = reactive({
      todos: [] as string[],
    });

    const putTodo = (todo: string) => {
      state.todos.push(todo);
    };

    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1);
    };

    return {
      state,
      putTodo,
      deleteTodo,
    };
  },
});

export default Todo;
</script>

<style scoped>

</style>
