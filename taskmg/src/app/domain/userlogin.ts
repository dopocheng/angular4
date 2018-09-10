// export interface UserLogin {
//     mobile: string;
//     password: string;
//     userId ?: string;
//     userNickName ?: string;
//     status ?: string;
//   }
import { Login } from './user';
import { Err } from './err';

export interface UserLogin {
  //  和 service return 返回的字段要匹配
  login?: Login;
  userId?: string;
  err?: string;
  token?: string;
  uri?: string;
}