import { Users } from './user';
import { Err } from './err';

export interface UserRegister {
  //  和 service return 返回的字段要匹配
  register?: Users;
  userId?: string;
  err?: string;
  token?: string;
  uri?: string;
}