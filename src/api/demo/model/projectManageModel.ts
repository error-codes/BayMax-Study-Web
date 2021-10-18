import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type InnerUserParams = BasicPageParams;
export type ServiceUserParams = BasicPageParams;
export type RealNameParams = BasicPageParams;

export interface InnerUserListItem {
  id: string;
  name: string;
  phone: string;
  idNumber: string;
  bankCard: string;
  createTime: string;
  endTime: string;
  status: number;
}

export interface ServiceUserListItem {
  id: string;
  name: string;
  phone: string;
  idNumber: string;
  bankCard: string;
  createTime: string;
  endTime: string;
  status: number;
}

export interface RealNameListItem {
  id: string;
  name: string;
  phone: string;
  idNumber: string;
  bankCard: string;
  createTime: string;
  endTime: string;
  status: number;
}
/**
 * @description: Request list return value
 */
export type InnerUserListGetResultModel = BasicFetchResult<InnerUserListItem>;
export type ServiceUserListGetResultModel = BasicFetchResult<ServiceUserListItem>;
export type RealNameListGetResultModel = BasicFetchResult<RealNameListItem>;
