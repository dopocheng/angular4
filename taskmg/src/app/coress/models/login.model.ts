import { User } from './user.model';

export interface Login {
  //  和 service return 返回的字段要匹配
  login?: User;
  id?: string;
  err?: string;
  uri?: string;
  access_token?: string;
}
