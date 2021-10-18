<template>
  <div class="p-4">
    <div class="my-2">
      <div>
        <a-button color="error" class="ml-2 ant-btn ant-btn-primary">批量删除</a-button>
        <a-button class="ml-2 ant-btn ant-btn-primary">导入</a-button>
        <a-button class="ml-2 ant-btn ant-btn-primary">导出</a-button>
      </div>
    </div>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '详情',
              icon: 'mdi:card-account-details-outline',
              onClick: handleDelete.bind(null, record),
            },
            {
              label: '禁用',
              color: 'error',
              icon: 'icon-park-outline:delete-mode',
              popConfirm: {
                title: '是否禁用？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: () => {
                return record.status === 'enable';
              },
            },
            {
              label: '启用',
              color: 'success',
              icon: 'icon-park-outline:success',
              popConfirm: {
                title: '是否启用？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: (_action) => {
                return record.status !== 'enable';
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
  import { BasicTable, useTable, BasicColumn, TableAction, FormSchema } from '/@/components/Table';

  import { serviceUserListApi } from '/@/api/demo/projectManage';
  import { t } from '/@/hooks/web/useI18n';
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
  export const searchFormSchema: FormSchema[] = [
    {
      field: 'name',
      label: t('routes.demo.user.search'),
      component: 'Input',
      colProps: { span: 12 },
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: 'TableAction组件及固定列示例',
        api: serviceUserListApi,
        columns: columns,
        rowSelection: { type: 'checkbox' },
        bordered: true,
        useSearchForm: true,
        actionColumn: {
          width: 160,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
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
