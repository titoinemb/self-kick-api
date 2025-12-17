/**
 * api/v1/kicks.d.ts
 * Type for https://web.kick.com/api/v1/kicks/<channel id>/<category>
 * 
 * method: GET
 */
type Category =   "leaderboard"
                | "pinned-gifts";
// top gifters stats
type KicksGifts = {
  quality: number;
  user_id: number;
  username: string
};
// datas for category
type Datas = {
  "leaderboard": {
    kicks_gifts_lifetime: KicksGifts[];
    kicks_gifts_lifetime_enabled: boolean;
    kicks_gifts_month: KicksGifts[];
    kicks_gifts_month_enabled: boolean;
    kicks_gifts_week: KicksGifts[];
    kicks_gifts_week_enabled: boolean;
  };
  "pinned-gifts": {
    pinned_gifts: []; // edit
  };
};
// RESPONSE
export declare type ApiV1Kicks<D extends Category = Category> = {
  data:   Datas[D] /** valide category and id */
        | { type: "Not Found"; } /** for no category/id or dont existe */;
  message: string;
};