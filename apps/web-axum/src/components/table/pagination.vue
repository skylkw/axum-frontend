<script setup lang="ts">
import type { Table } from '@tanstack/vue-table';

import {
  Button,
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@vben/common-ui';

interface DataTablePaginationProps {
  table: Table<any>;
}
defineProps<DataTablePaginationProps>();
</script>

<template>
  <div
    class="flex select-none items-center justify-center px-2 sm:justify-between"
  >
    <div class="text-muted-foreground hidden flex-1 text-sm sm:block">
      {{ table.getSelectedRowModel().rows.length }} 行已选中，共
      {{ table.getRowCount() }} 行。
    </div>
    <div class="flex items-center space-x-6 lg:space-x-8">
      <div class="flex items-center space-x-2">
        <Select
          :model-value="`${table.getState().pagination.pageSize}`"
          @update:model-value="table.setPageSize!"
        >
          <SelectTrigger class="h-8 w-[4.5rem]">
            <SelectValue
              :placeholder="`${table.getState().pagination.pageSize}`"
            />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem
              v-for="pageSize in [5, 10, 15, 20, 25, 30, 40, 50]"
              :key="pageSize"
              :value="`${pageSize}`"
            >
              {{ pageSize }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Pagination
        :default-page="1"
        :items-per-page="table.getState().pagination.pageSize"
        :sibling-count="1"
        :total="table.getRowCount()"
        show-edges
      >
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
          <PaginationFirst
            :disabled="!table.getCanPreviousPage()"
            @click="table.setPageIndex(0)"
          />
          <PaginationPrev
            :disabled="!table.getCanPreviousPage()"
            @click="table.previousPage()"
          />
          <template v-for="(item, index) in items">
            <PaginationListItem
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <Button
                :variant="
                  item.value === table.getState().pagination.pageIndex + 1
                    ? 'default'
                    : 'outline'
                "
                class="h-10 w-10 p-0"
                @click="table.setPageIndex(item.value - 1)"
              >
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>
          <PaginationNext
            :disabled="!table.getCanNextPage()"
            @click="table.nextPage()"
          />
          <PaginationLast
            :disabled="!table.getCanNextPage()"
            @click="table.setPageIndex(table.getPageCount() - 1)"
          />
        </PaginationList>
      </Pagination>
    </div>
  </div>
</template>
