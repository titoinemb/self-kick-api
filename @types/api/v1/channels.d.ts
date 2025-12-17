/**
 * api/v1/channels.d.d.ts
 * Type for https://kick.com/api/v1/channels/<name>
 * 
 * method: GET
 */
// informations for a sub badge
type SubscriberBadge = {
  id: number;
  channel_id: number;
  months: number;
  badge_image: {
    srcset: string;
    src: string;
  };
};
// informations for a game category
type Category = {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  tags: string[];
  description: null | string;
  deleted_at: null | string;
  is_mature: boolean;
  is_promoted: boolean;
  viewers: number;
  is_fallback: boolean;
  banner: {
    responsive: string;
    url: string;
  };
  category: {
    id: number;
    name: string;
    slug: string;
    icon: string;
  };
};
//
type AscendingLinks = {
  id: number;
  channel_id: number;
  description: string;
  link: string;
  created_at: string;
  updated_at: string;
  order: number;
  title: string;
};
//
type PreviousLivestreams = {
  id: number;
  slug: string;
  channel_id: number;
  created_at: string;
  session_title: string;
  is_live: boolean;
  risk_level_id: null; // edit
  start_time: string;
  source: string;
  twitch_channel: null | string;
  duration: number;
  language: string;
  is_mature: boolean;
  viewers_count: number;
  thumbnail: {
    src: string;
    srcset: string;
  };
  viewers: number;
  lang_iso: string;
  tags: string[];
  categories: Category[];
  video: {
    id: number;
    live_stream_id: number;
    slug: null | string;
    thumb: null | string;
    s3: null | string;
    trading_platform_id: null; // edit
    created_at: string;
    updated_at: string;
    uuid: string;
    viewers: number;
    deleted_at: null | string;
    is_pruned: boolean;
    is_private: boolean;
    status: string;
  };
};
//
type Media = {
  id: number;
  model_type: string;
  model_id: number;
  collection_name: string;
  name: string;
  file_name: string;
  mime_type: string;
  disk: string;
  size: number;
  manipulations: []; // edit
  custom_properties: {
    generated_conversions: {
      fullsize: boolean;
    };
  };
  responsive_images: {
    fullsize: {
      urls: string[];
      base64svg: string;
    };
  };
  order_column: number;
  created_at: string;
  updated_at: string;
  uuid: string;
  conversions_disk: string;
};
// RESPONSE
export declare type ApiV1Channels = {
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
  subscriber_badges: SubscriberBadge[];
  banner_image: {
    responsive: string;
    url: string;
  };
  recent_categories: Category[];
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
    twitch_channel: null | string;
    duration: number;
    language: string;
    is_mature: boolean;
    viewer_count: number;
    thumbnail: {
      responsive: string;
      url: string;
    };
    viewers: number;
    lang_iso: string;
    tags: string[];
    categories: Category[];
  };
  role: null; // edit
  muted: boolean;
  follower_badges: any[]; // edit
  offline_banner_image: {
    src: string;
    srcet: string;
  };
  can_host: boolean;
  user: {
    id: number;
    username: string;
    agreed_to_terms: boolean;
    email_verified_at: string;
    bio: string;
    country: string;
    state: string;
    city: string;
    instagram: string;
    twitter: string;
    youtube: string;
    discord: string;
    tiktok: string;
    facebook: string;
    gender: null | string;
    profile_pic: string;
  };
  chatroom: {
    id: number;
    chatable_type: string;
    channel_id: number;
    created_at: string;
    updated_at: string;
    chat_mode_old: string;
    chat_mode: string;
    slow_mode: boolean;
    chatable_id: number;
    followers_mode: boolean;
    subscribers_mode: boolean;
    emotes_mode: boolean;
    message_interval: number;
    following_min_duration: number;
  };
  ascending_links: AscendingLinks[];
  plan: {
    id: number;
    channel_id: number;
    stripe_plan_id: string;
    amount: string;
    created_at: string;
    updated_at: string;
  };
  previous_livestreams: PreviousLivestreams[];
  verified: {
    id: number;
    channel_id: number;
    created_at: string;
    updated_at: string;
  };
  media: Media[];
};