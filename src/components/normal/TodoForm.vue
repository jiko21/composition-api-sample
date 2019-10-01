<template>
  <div class="todo-form">
    <input v-model="state.text"/>
    <button v-show="isValid" @click="submit">Add</button>
  </div>
</template>

<script lang="ts">
import {computed, createComponent, PropType, reactive} from '@vue/composition-api';

const TodoForm = createComponent({
  props: {
    onSubmit: {
      type: Object as PropType<(text: string) => void>,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      text: '',
    });

    const isValid = computed(
      () => state.text.length > 0
    );

    const submit = () => {
      props.onSubmit(state.text);
      state.text = '';
    };

    return {
      state,
      submit,
      isValid
    };
  }
});

export default TodoForm;
</script>

<style scoped>

</style>
