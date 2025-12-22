/**
 * api/v1/kicks/pinned-gifts.d.ts
 * Type for https://web.kick.com/api/v1/kicks/<channel id>/pinned-gifts
 * 
 * method: GET
 */
// RESPONSE
export declare type ApiV1KicksPinned_gift = {
  data: {
    pinned_gifts: []; // edit
  };
  message: string;
};