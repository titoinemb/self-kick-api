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
// RESPONSE
export declare type ApiV2MessageSendResponse = {
  status: {
    error: boolean;
    code: number;
    message: string;
  };
  data: {
    id: string;
    chatroom_id: number;
    content: string;
    type: string; /** "message" | "" edit */
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
};
// REQUEST
export declare type ApiV2MessageSendRequest = {
  content: string;
  type: string; /** "message" | "" edit */
};