/**
 * api/v1/video.d.d.ts
 * Type for https://kick.com/api/v1/video/<uuid>
 * 
 * method: GET
 */
// category informations
type Category = {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  tags: string[];
  description: string | null;
  deleted_at: string | null;
  is_mature: boolean;
  is_promoted: boolean;
  viewers: number;
  is_fallback: boolean;
  category: {
    id: number;
    name: string;
    slug: string;
    icon: string;
  };
};
// RESPONSE
export declare type ApiV1Video = {
  id: number;
  live_stream_id: number;
  slug: null | string;
  thumb: null | string;
  s3: null | string;
  trading_platform_id: null;// edit
  created_at: string;
  updated_at: string;
  uuid: string;
  viewers: number;
  deleted_at: null | string;
  id_pruned: boolean;
  is_private: boolean;
  status: string;
  source: string;
  livestream: {
    id: number;
    slug: string;
    channel_id: number;
    created_at: string;
    session_title: string;
    is_live: boolean;
    risk_level_id: null; // edit
    start_time: string;
    source: null; // edit
    twitch_channel: null;//edit
    duration: number;
    language: string;
    is_mature: boolean;
    viewer_count: number;
    tags: string[];
    thumbnail: string;
    channel: {
      id: number;
      user_id: number;
      slug: string;
      is_banned: boolean;
      playback_url: string;
      name_updated_at: string;
      vod_enabled: boolean;
      subscription_enabled: boolean;
      is_affiliate: boolean;
      followersCount: number;
      user: {
        profilepic: string;
        bio: string;
        twitter: string | null;
        facebook: string | null;
        instagram: string | null;
        youtube: string | null;
        discord: string | null;
        tiktok: string | null;
        username: string | null;
      };
      can_host: boolean;
      verified: {
        id: number;
        channel_id: number;
        created_at: string;
        updated_at: string;
      };
    };
    categories: Category[];
  };
};