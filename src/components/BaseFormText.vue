<template>
  <BaseFormField :title="title" :error="error">
    <input
      v-model="dataValue"
      class="form__input"
      type="type"
      :placeholder="placeholder"
    />
  </BaseFormField>
</template>

<script>
import formaFieldMixin from "@/mixins/formaFieldMixin";

export default {
  props: {
    default: 'text'
  },
  mixins: [formaFieldMixin],
};
</script>
