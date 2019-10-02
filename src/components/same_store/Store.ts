import {reactive, ref} from "@vue/composition-api";

const todos = ref([] as string[]);

const useTodos = () => {

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
