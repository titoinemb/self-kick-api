/**
 * api/v1/chat.d.d.ts
 * Type for https://kick.com/api/v1/chat/<id>/category
 * 
 * method: GET
 */
// list of category
type Category = "history";
// badge datas
type Badge = {
  type: string;
  text: string;
  count: number | never;
};
// message datas
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
// pinned message datas
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
//
type Datas = {
  "history": {
    message: Message[];
    cursor: string;
    pinned_message: PinnedMessage | null;
  };
};
// RESPONSE
export declare type ApiV1Chat<D extends Category = Category> = {
  data:   Datas[D] /** valide category and id */
        | {} /** no id */
        | { type: "Not Found"; } /** no category */;
  message: string;
};