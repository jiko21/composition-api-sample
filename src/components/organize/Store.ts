import {reactive, ref} from "@vue/composition-api";

const useTodos = () => {
  const todos = ref([] as string[]);

  const addTodo = (todo: string) => {
    todos.value.push(todo);
  };
  const deleteTodo = (position: number) => {
    todos.value.splice(position, 1);
  };
  return {
    todos,
    addTodo,
    deleteTodo,
  };
};

export default useTodos;
