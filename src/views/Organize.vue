<template>
  <div class="about">
    <h1>Todo Apps with Code Organization</h1>
    <Todo />
    <SubForm/>
  </div>
</template>
<script lang="ts">
import {createComponent} from "@vue/composition-api";
import Todo from '@/components/organize/Todo.vue';
import SubForm from '@/components/organize/SubForm.vue';

export default createComponent({
  components: {
    Todo,
    SubForm,
  },
});
</script>
