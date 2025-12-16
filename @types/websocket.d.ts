/**
 * websocket.d.ts
 * Type for wss://ws-us2.pusher.com/app/32cbd69e4b950bf97679
 */
// list of events
type Events = "App\\Events\\ChatMessageEvent"
              | "pusher:subscribe"
              | "pusher_internal:subscription_succeeded"
              | "ping"
              | "pong"
              | "App\\Events\\MessageDeletedEvent";
// list of events for explude channel in racine of json
type ExcludeChannel = "ping"
                      | "pong"
                      | "pusher_internal:subscription_succeeded"
                      | "pusher:subscribe";
// list of events message
type Message =  "reply"
                | "message"
                | "celebration";
//
type Badge = {
  type: string;
  text: string;
  count: number;
};
//
type TypeMessaePlayloadMap = {
  "reply": {
    original_sender: {
      id: number;
      username: string;
    };
    original_message: {
      id: string;
      content: string;
    };
    message_ref: string;
  };
  "message": {
    message_ref: string;
  };
  "celebration": {
    "celebration": {
      id: string;
      type: string;
      total_months: string;
      created_at: string;
    }
  }
};
//
type EventPayloadMap<M extends Message = Message> = {
  "App\\Events\\ChatMessageEvent": {
    id: string;
    chatroom: number;
    content: string;
    type: M;
    create_at: string;
    sender: {
      id: number;
      username: string;
      slug: string;
      identity: {
        color: string;
        badges: Badge[];
      };
    };
    metadata: TypeMessaePlayloadMap[M];
  };
  "pusher:subscribe": {
    auth: string;
    channel: string;
  };
  "pusher_internal:subscription_succeeded": {};
  "ping": {};
  "pong": {};
  "App\\Events\\MessageDeletedEvent": {
    id: string;
    message: {
      id: string;
    };
    aiModerated: boolean;
    violatedRules: []; // edit
  };
};
// exclude or not channel data
type WithChannel<E extends Events> = E extends ExcludeChannel
  ? { channel?: never }   // must be omitted
  : { channel: string };  // required
// RESPONSE
export declare type WebSocketKick<E extends Events = Events> = {
  event: E;
  data: EventPayloadMap[E];
} & WithChannel<E>;