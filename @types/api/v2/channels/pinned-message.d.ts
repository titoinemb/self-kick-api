/**
 * api/v2/channels/pinned-message.d.ts
 * Type for https://kick.com/api/v2/channels/<name>/pined-message
 * 
 * method: POST and DELETE
 * juste send DELETE for delete the pinned message
 * ans send POST with data message for pin message
 */
// badge datas
type Badge = {
  type: string;
  text: string;
  count: number | never;
};
//
type Metadata = {
  "message": {
    message_ref: string;
  };
  "reply": {
    message_ref: string;
    original_message: {
      content: string;
      id: string;
    };
    original_sender: {
      id: number;
      username: string;
    };
  };
};
//
type PinnedData = {
  id: number;
  username: string;
  slug: string;
  identity: {
    color: string;
    badges: Badge[];
  };
};
// REQUEST
export declare type ApiV2ChannelPinnedMessageRequest<T extends "message" | "reply"> = {
  duration: number;
  message: {
    chatroom_id: number;
    content: string;
    created_at: string;
    id: string;
    sender: {
      id: number;
      identity: {
        badges: Badge[];
        color: string;
      };
      slug: string;
      username: string;
    };
    type: T;
    metadata: Metadata[T];
  }
};
// RESPONSE
export declare type ApiV2ChannelPinnedMessageResponse<T extends "message" | "reply"> = {
  status: {
    error: boolean;
    message: string;
    code: number;
  };
  data:   PinnedData /** for POST with datas */
        | null /** for DELETE */;
};