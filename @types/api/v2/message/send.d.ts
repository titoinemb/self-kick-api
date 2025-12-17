/**
 * api/v2/message/send.d.d.ts
 * Type for https://kick.com/api/v2/messages/send/<id>
 * 
 * method: POST
 */
// badge datas
type Badge = {
  type: string;
  text: string;
  count: number | never;
};
// reply data for request
type ReplyDataRequest = {
  original_message: {
    content: string;
    id: string;
  };
  original_sender: {
    id: number;
    username: string;
  };
};
// reply data for response
type ReplyDataResponse = {
  original_message: {
    id: string;
    chatroom_id: number;
    content: string;
    type: string;
    created_at: string;
    sender: {
      id: number;
      username: string;
      slug: string;
      identity: {
        color: string;
        badges: Badge[];
      };
    };
    metadata: {
      message_ref: string;
    };
  };
  original_sender: {
    id: number;
    username: string;
    slug: string;
    identity: {
      color: string;
      badges: Badge[];
    };
  };
  message_ref: string;
};
// RESPONSE
export declare type ApiV2MessageSendResponse<T extends "message" | "reply"> = {
  status: {
    error: boolean;
    code: number;
    message: string;
  };
  data: {
    id: string;
    chatroom_id: number;
    content: string;
    type: T;
    created_at: string;
    sender: {
      id: number;
      username: string;
      slug: string;
      identity: {
        color: string;
        badges: Badge[];
      };
      metadata: {
        message_ref: string;
      };
    };
  };
  metadata: T extends "reply" ? ReplyDataResponse : never;
};
// REQUEST
export declare type ApiV2MessageSendRequest<T extends "message" | "reply"> = {
  content: string;
  type: T;
  metadata: T extends "reply" ? ReplyDataRequest : never;
};