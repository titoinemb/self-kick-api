/**
 * api/v2/channels/identity.d.ts
 * Type for https://kick.com/api/v2/channels/<channel_id>/users/<your_id>/identity/
 * 
 * method: GET and PUT
 * juste send DELETE for delete the pinned message
 * ans send POST with data message for pin message
 */
// list of badge in a channel
type BadgeList =    "og"
                  | "vip"
                  | "broadcaster"
                  | "moderator"
                  | "subscriber";
// list of color for u pseudo in chat
type ColorList =    "#1475E1"
                  | "#FFD899"
                  | "#FFC466"
                  | "#FF9D00"
                  | "#FBCFD8"
                  | "#F2708A"
                  | "#E9113C"
                  | "#DEB2FF"
                  | "#BC66FF"
                  | "#B9D6F6"
                  | "#72ACED"
                  | "#BAFEA3"
                  | "#75FD46"
                  | "#93EBE0"
                  | "#00CCB3"
//
type BadgeData = {
  type: string;
  text: string;
  active: boolean;
  count: never | number;
};
// REQUEST
export declare type ApiV2ChannelsIdentityRequest =
  never | /** for GET */
  {
    badges: BadgeList[];
    color: ColorList;
  }; /** for PUT */
// RESPONSE
export declare type ApiV2ChannelsIdentityResponse = {
  status: {
    error: false;
    message: string;
    code: number;
  };
  data: {
    identity: {
      badges:   BadgeList[] /** for PUT */
              | BadgeData[] /** for GET */;
      color: ColorList;
    };
  }
};