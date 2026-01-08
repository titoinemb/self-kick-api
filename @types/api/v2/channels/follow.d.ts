/**
 * api/v2/channels/follow.d.ts
 * Type for https://kick.com/api/v2/channels/<channel name>/follow
 * 
 * method: GET, DELETE
 */
// RESPONSE
export declare type CurrentViewers = {
  status: boolean;
  channel: {
    id: number;
    user_id: number;
    slug: string;
    is_banned: boolean;
    playback_url: string;
    name_updated_at: null | string;
    vod_enabled: boolean;
    subscription_enabled: boolean;
    is_affiliate: boolean;
    can_host: boolean;
    user: never | {
      id: number;
      username: string;
      agreed_to_terms: boolean;
      email_verified_at: string;
      bio: null | string;
      country: null | string;
      state: null | string;
      city: null | string;
      instagram: null | string;
      twitter: null | string;
      youtube: null | string;
      discord: null | string;
      tiktok: null | string;
      facebook: null | string;
      gender: null | string;
    };
  };
};