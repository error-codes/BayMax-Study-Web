import { defHttp } from '/@/utils/http/axios';
import { InnerUserParams, ServiceUserParams, RealNameParams, InnerUserListGetResultModel, RealNameListGetResultModel, ServiceUserListGetResultModel } from './model/projectManageModel';

enum Api {
  INNER_LIST = '/projectManage/getInnerUserList',
  SERVICE_LIST = '/projectManage/getServiceUserList',
  REALNAME_LIST = '/projectManage/getRealNameList',
}

/**
 * @description: Get sample list value
 */

export const innerUserListApi = (params: InnerUserParams) =>
  defHttp.get<InnerUserListGetResultModel>({
    url: Api.INNER_LIST,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });

export const serviceUserListApi = (params: ServiceUserParams) =>
  defHttp.get<ServiceUserListGetResultModel>({
    url: Api.SERVICE_LIST,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });

export const realNameListApi = (params: RealNameParams) =>
  defHttp.get<RealNameListGetResultModel>({
    url: Api.REALNAME_LIST,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
