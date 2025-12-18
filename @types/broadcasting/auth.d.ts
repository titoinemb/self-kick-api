/**
 * /api/current-viewers.d.ts
 * Type for https://kick.com/broadcasting/auth
 * 
 * method: POST
 */

// REQUEST
export declare type BroadcastingAuthRequest = {
  /**
   * for event: pusher:subscribe
   * in data: {
   *  auth: "", // this is do u want get
   *  channel: "" // this is the "channel_name" in this type
   *              // but for example private-${your_id} and private-userfeed.${your_id}
   *              // is not the same auth token so for get the good auth token set the specific "channel"
   * }
   */
  channel_name: string;
  socket_id: string; // the socket id return in connection
};