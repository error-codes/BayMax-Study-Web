<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '详情',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
            },
          ]"
          :dropDownActions="[
            {
              label: '禁用',
              popConfirm: {
                title: '是否禁用？',
                confirm: handleOpen.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';

import { realNameListApi } from '/@/api/demo/projectManage';
const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left',
    width: 140,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 130,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: 140,
  },
  {
    title: '身份证号',
    dataIndex: 'idNumber',
    width: 140,
  },
  {
    title: '银行卡号',
    dataIndex: 'bankCard',
    width: 140,
  },
  {
    title: '创建时间',
    width: 200,
    dataIndex: 'createTime',
  },
];
export default defineComponent({
  components: { BasicTable, TableAction },
  setup() {
    const [registerTable] = useTable({
      title: 'TableAction组件及固定列示例',
      api: realNameListApi,
      columns: columns,
      rowSelection: { type: 'radio' },
      bordered: true,
      actionColumn: {
        width: 160,
        title: 'Action',
        dataIndex: 'action',
        slots: { customRender: 'action' },
      },
    });
    function handleDelete(record: Recordable) {
      console.log('点击了详情', record);
    }
    function handleOpen(record: Recordable) {
      console.log('点击了禁用', record);
    }
    return {
      registerTable,
      handleDelete,
      handleOpen,
    };
  },
});
</script>
