/**
 * api/v2/channels/chatroom/rules.d.ts
 * Type for https://kick.com/api/v2/channels/<name>/chatroom/rules
 * 
 * method: GET
 */

// RESPONSE
export declare type ApiV2ChannelChatroomRules = 
{
  status: {
    code: number;
    message: string;
  };
  data: {
    rules: string;
  };
} /* no error */
| 
{
  error: string;
  message: string;
  status: number;
}; /* pseudo dont existe*/