<template>
  <div class="Todo">
    <h1>Todo Apps (Vue.extend ver)</h1>
    <TodoForm :onSubmit="putTodo"/>
    <TodoList
      :todos="todos"
      :delete="deleteTodo"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoList from '@/components/extend/TodoList.vue';
import TodoForm from '@/components/extend/TodoForm.vue';

export default Vue.extend({
  name: 'Todo',
  components: {
    TodoList,
    TodoForm,
  },
  data() {
    return {
      todos: [] as string[],
    };
  },
  methods: {
    putTodo(todo: string): void {
      this.todos.push(todo);
    },
    deleteTodo(index: number): void {
      this.todos.splice(index, 1);
    },
  },
});
</script>

<style scoped>

</style>
