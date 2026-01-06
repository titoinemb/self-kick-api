/**
 * api/v2/channels/chatroom/rules.d.ts
 * Type for https://kick.com/api/v2/channels/<name>/chatroom
 * 
 * method: GET
 */

// RESPONSE
export declare type ApiV2ChannelChatroom = 
{
  id: number,
  slow_mode: {
    enabled: boolean,
    message_interval: number,
  },
  subscribers_mode: {
    enabled: boolean,
  },
  followers_mode: {
    enabled: boolean,
  },
  emotes_mode: {
    enabled: boolean,
  },
  advanced_bot_protection: {
    enabled: boolean,
    remaining_time: number,
  },
  account_age: {
    enabled: boolean,
    min_duration: number
  },
  pinned_message: null | string,
  show_quick_emotes: {
    enabled: boolean,
  },
  show_banners: {
    enabled: boolean,
  },
  gifts_enabled: {
    enabled: boolean,
  },
  gifts_week_enabled: {
    enabled: boolean,
  },
  gifts_month_enabled: {
    enabled: boolean,
  },
} /* no error */
| 
{
  error: string;
  message: string;
  status: number;
}; /* pseudo dont existe*/