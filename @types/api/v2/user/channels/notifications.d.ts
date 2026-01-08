/**
 * api/v2/user/channels/notifications.d.ts
 * Type for https://kick.com/api/v2/user/channels/<channel name>/notifications
 * 
 * method: PUT
 */
// RESPONSE
export declare type ApiV2UserChannelsNotificationResponse = {
  status: {
    error: boolean;
    code: number;
    message: string;
  };
  data: {
    user_id: number;
    channel_id: number;
    enabled: boolean;
  };
};
// REQUEST
export declare type ApiV2UserChannelsNotificationRequest = {
  enabled: boolean;
};