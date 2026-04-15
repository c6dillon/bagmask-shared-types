import { UserType } from './user-type';

export interface AuthData {
  email: string;
  password: string;
  userType?: UserType;
  userCompanyType?: string;
  userCompanyName?: string;
  mailingList?: boolean;
  recruiterCompanyUID?: string;
  recruiterFName?: string;
  recruiterLName?: string;
  promoCode?: string;
}
