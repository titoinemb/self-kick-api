/**
 * api/v2/channels.d.d.ts
 * Type for https://kick.com/api/v2/channels/<name>/<category>
 * 
 * method: GET
 */
// list of category
type Category =   "chatroom"
                  | "videos"
                  | "leaderboards"
                  | "polls"
                  | "clips"
                  | "recent-categories"
                  | "goals"
                  | "links"
                  | "" /* no category*/;


export declare type ApiV2Channels = {

};