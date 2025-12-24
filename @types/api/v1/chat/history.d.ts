/**
 * api/v1/chat/history.d.ts
 * Type for https://web.kick.com/api/v1/chat/<channel_id>/history
 * 
 * method: GET
 */
// badge informations
type Badge = {
  type: string;
  text: string;
  count: number | never;
};
// message informations
type Message = {
  id: string;
  chat_id: number;
  user_id: number;
  content: string;
  metadata: string;
  sender: {
    id: number;
    slug: string;
    username: string;
    identity: {
      color: string;
      badges: Badge[];
    };
  };
  created_at: string;
};
// pinned messages informations
type PinnedMessage = {
  message: {
    id: string;
    chat_id: number;
    user_id: number;
    content: string;
    type: string;
    metadata: string;
    sender: {
      id: number;
      slug: string;
      username: string;
      identity: {
        color: string;
        badges: Badge[];
      };
    };
    created_at: string;
  };
  pinned_by: {
    id: number;
    slug: string;
    username: string;
    identity: {
      color: string;
      badges: Badge[];
    };
  };
};
// RESPONSE
export declare type ApiV1ChatHistory = {
  data: {
    messages: Message[];
    cursor: string;
    pinned_message: PinnedMessage |  null;
  };
  message: string;
};