/**
 * login.d.ts
 * Type for 
 * 
 * method: POST
 */
// REQUEST
export declare type LoginRequest = {
  code: string /* | never or null */;
  email: string;
  isMobileRequest: boolean;
  on_time_password: string /* | never or null */;
  password: string
};
// RESPONSE
export declare type LoginResponse = {
  token: string;
  "2fa_required": boolean;
};