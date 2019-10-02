<template>
  <div class="todo-form">
    <input v-model="state.text"/>
    <button @click="submit">Add</button>
  </div>
</template>

<script lang="ts">
    import {createComponent, PropType, reactive} from '@vue/composition-api';

const TodoForm = createComponent({
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      text: '',
    });

    const submit = () => {
      props.onSubmit(state.text);
      state.text = '';
    };

    return {
      state,
      submit,
    };
  }
});

export default TodoForm;
</script>

<style scoped>

</style>
