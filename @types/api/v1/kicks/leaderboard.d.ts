/**
 * api/v1/kicks/leaderboard.d.d.ts
 * Type for https://web.kick.com/api/v1/kicks/<channel id>/leaderboard
 * 
 * method: GET
 */
// top gifters stats
type KicksGifts = {
  quality: number;
  user_id: number;
  username: string
};
// RESPONSE
export declare type ApiV1KicksBalance = {
  data: {
    kicks_gifts_lifetime: KicksGifts[];
    kicks_gifts_lifetime_enabled: boolean;
    kicks_gifts_month: KicksGifts[];
    kicks_gifts_month_enabled: boolean;
    kicks_gifts_week: KicksGifts[];
    kicks_gifts_week_enabled: boolean;
  };
  message: string;
};