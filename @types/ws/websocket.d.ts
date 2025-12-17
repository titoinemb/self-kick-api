/**
 * ws/websocket.d.ts
 * Type for wss://ws-us2.pusher.com/app/32cbd69e4b950bf97679
 * 
 * method: websocket
 */
// list of events
type Events =   "App\\Events\\ChatMessageEvent"
              | "pusher:subscribe"
              | "pusher_internal:subscription_succeeded"
              | "ping"
              | "pong"
              | "App\\Events\\MessageDeletedEvent"
              | "pusher:connection_established"
              | "PointsUpdated"
              | "RewardRedeemedEvent"
              | "App\\Events\\StreamHostEvent";
// list of events for explude channel in racine of json
type ExcludeChannel =   "ping"
                      | "pong"
                      | "pusher_internal:subscription_succeeded"
                      | "pusher:subscribe";
// list of events message
type Message =    "reply"
                | "message"
                | "celebration";
// badge informations
type Badge = {
  type: string;
  text: string;
  count: number | never;
};
// list of type message
type TypeMessaePlayloadMap = {
  // replay to a message
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
  // juste send message
  "message": {
    message_ref: string;
  };
  // sub with message
  "celebration": {
    "celebration": {
      id: string;
      type: string;
      total_months: string;
      created_at: string;
    };
  };
};
// list of event in websockets
type EventPayloadMap<M extends Message = Message> = {
  // new message
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
  // connecte to websocket
  "pusher:subscribe": {
    auth: string;
    channel: string;
  };
  "pusher_internal:subscription_succeeded": {};
  "ping": {};
  "pong": {};
  // message delete by modo
  "App\\Events\\MessageDeletedEvent": {
    id: string;
    message: {
      id: string;
    };
    aiModerated: boolean;
    violatedRules: []; // edit
  };
  "pusher:connection_established" : {
    socket_id: string;
    activity_timeout: number;
  };
  // buy reward by channel points
  "RewardRedeemedEvent": {
    reward_title: string;
    user_id: number;
    channel_id: number;
    username: string;
    user_input: string;
    reward_background_color: string; // HEX code color
  };
  // hosting event
  "App\\Events\\StreamHostEvent": {
    chatroom_id: number;
    optional_message: null | string;
    number_viewers: number;
    host_username: string;
  };
  /**
   * private event
   * 
   * this list of event is your private event juste visible by you
   */
  "PointsUpdated": {
    reason: string;
    points: number;
    balance: number;
    user_id: number;
    channel_id: number;
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