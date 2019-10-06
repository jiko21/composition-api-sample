<template>
  <div class="todo-form">
    <input v-model="text"/>
    <button v-show="isValid" @click="submit">Add</button>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';

export default Vue.extend({
  name: 'TodoForm',
  props: {
    onSubmit: {
      type: Function as PropType<(text: string) => void>,
      required: true,
    },
  },
  data() {
    return {
      text: '',
    };
  },
  computed: {
    isValid(): boolean {
      return this.text.length > 0;
    },
  },
  methods: {
    submit() {
      this.onSubmit(this.text);
      this.text = '';
    },
  },
});
</script>

<style scoped>

</style>
