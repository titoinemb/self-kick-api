/**
 * api/v2/channels/followed.d.d.ts
 * Type for https://web.kick.com/api/v1/kicks/balance
 * 
 * method: GET
 */
// channel informations
type Channel = {
  is_live: boolean;
  profile_picture: string;
  channel_slug: string;
  viewer_count: number;
  category_name: string;
  user_username: string;
  session_title: null | string;
};
// RESPONSE
export declare type ApiV1KicksBalance = Channel[];