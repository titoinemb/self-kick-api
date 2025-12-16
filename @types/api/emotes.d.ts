/**
 * emotes.d.ts
 * Type for /api/emotes/<name>
 */
type Emote = {
  id: number;
  channel_id: number | null;
  name: string;
  subscribers_only: boolean;
};

export declare type Emotes = [
  {
    id: number;
    user_id: number;
    slug: string;
    is_banned: boolean;
    playback_url: string;
    name_updated_at: null | string;
    vod_enabled: boolean;
    subscription_enabled: boolean;
    is_affiliate: boolean;
    emotes: Emote[];
    can_host: boolean;
    user: {
      id: number;
      username: string;
      agreed_to_terms: boolean;
      email_verified_at: string;
      bio: string;
      country: null | string;
      state: null | string;
      city: null | string;
      instagram: string;
      twitter: string;
      youtube: string;
      discord: string;
      tiktok: string;
      facebook: string;
      gender: null | string;
    };
  },
  {
    name: string;
    id: string;
    emotes: Emote[];
  },
  {
    name: string;
    id: string;
    emotes: Emote[];
  },
];