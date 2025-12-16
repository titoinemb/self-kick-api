/**
 * current-viewers.d.ts
 * Type for /current-viewers?ids[]=<livestream_id>
 * 
 * How to get livestream_id ? :
 * use /api/v1/channels/<name>
 * and in the json livestream.id
 */
// RESPONSE
declare type CurrentViewers = {
  livestream_id: number;  // Number representing the livestream ID
  viewers: number;        // Number of current viewers
};