<template>
  <BaseFormField :title="title" :error="error">
    <textarea
      class="form__input form__input--area"
      v-model="dataValue"
      :placeholder="placeholder"
    ></textarea>
  </BaseFormField>
</template>

<script>
import formaFieldMixin from "@/mixins/formaFieldMixin";

export default {
  mixins: [formaFieldMixin],
};
</script>
