<script setup lang="ts">
import type { Column } from '@tanstack/vue-table';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@vben/common-ui';

import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
} from '@radix-icons/vue';

import { $t } from '#/locales';

interface DataTableColumnHeaderProps {
  column: Column<any, any>;
  title: string;
}

defineProps<DataTableColumnHeaderProps>();
</script>

<template>
  <div
    v-if="column.getCanSort()"
    :class="[$attrs.class ?? '']"
    class="flex items-center space-x-2"
  >
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          class="data-[state=open]:bg-accent -ml-4 h-8"
          size="default"
          variant="ghost"
        >
          <span>{{ title }}</span>
          <ArrowDownIcon
            v-if="column.getIsSorted() === 'desc'"
            class="ml-2 h-4 w-4"
          />
          <ArrowUpIcon
            v-else-if="column.getIsSorted() === 'asc'"
            class="ml-2 h-4 w-4"
          />
          <CaretSortIcon v-else class="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem @click="column.toggleSorting(false)">
          <ArrowUpIcon class="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
          {{ $t('table.asc') }}
        </DropdownMenuItem>
        <DropdownMenuItem @click="column.toggleSorting(true)">
          <ArrowDownIcon class="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
          {{ $t('table.desc') }}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="column.toggleVisibility(false)">
          <EyeNoneIcon class="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
          {{ $t('table.hide') }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <div v-else :class="$attrs.class" class="text-nowrap">
    {{ title }}
  </div>
</template>
