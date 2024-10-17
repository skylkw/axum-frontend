<script setup lang="ts">
import { ref } from 'vue';

import { Switch } from '@vben/common-ui';

const switchState = ref(false);
</script>

<template>
  <Switch v-model:checked="switchState" />
  <div>{{ switchState }}</div>
</template>
