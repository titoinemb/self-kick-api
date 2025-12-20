/**
 * api/v1/user/session.d.d.ts
 * Type for https://web.kick.com/api/v1/user/session
 * 
 * method: GET
 */
// RESPONSE
export declare type ApiV1UserSession = {
  data: {
    session_id: string;
  };
  message: string;
};