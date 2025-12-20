/**
 * api/v1/kicks/balance.d.d.ts
 * Type for https://web.kick.com/api/v1/kicks/balance
 * 
 * method: GET
 */
// RESPONSE
export declare type ApiV1KicksBalance = {
  balance: {
    available: number;
    last_updated: string;
    user_id: number;
  };
  message: string;
};