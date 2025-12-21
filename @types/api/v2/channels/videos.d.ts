/**
 * api/v2/channels/videos.d.d.ts
 * Type for https://kick.com/api/v2/channels/<name>/videos
 * 
 * method: GET
 */
// catgeory informations
type Category = {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  tags: string[];
  description: string;
  deleted_at: null;//edit
  is_mature: boolean;
  is_promoted: boolean;
  viewers: number;
  is_fallback: boolean;
  banner: {
    responsive: string;
    url: string;
  };
};
// video informations
type Video = {
  id: number;
  slug: string;
  channel_id: number;
  created_at: string;
  session_title: string;
  is_live: boolean;
  risk_level_id: null; // edit
  start_time:	string;
  source:	string;
  twitch_channel: null; // edit
  duration: number;
  language: string;
  is_mature: boolean;
  viewer_count: number;
  tags: string[];
  thumbnail: {
    src: string;
    srcset: string;
  };
  views: number;
  video: {
    id: number;
    live_stream_id: number;
    slug: null; //edit
    thumb: null; //edit
    s3: null;//ediut
    trading_platform_id: null;//edit
    created_at: string;
    updated_at: string;
    uuid: string;
    views: number;
    deleted_at: null;//edit
    is_pruned: boolean;
    is_private: boolean;
    status: string;
  };
  categories: Category[];
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
    can_host: boolean;
  };
};
// RESPONSE
export declare type ApiV2ChannelsVideos = Video[];