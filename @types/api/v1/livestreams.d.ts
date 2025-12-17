/**
 * api/v1/livestreams.d.ts
 * Type for https://web.kick.com/api/v1/livestreams/<category>?language=<lang>
 * 
 * method: GET
 */
type Category = "featured";
// live streams informations
type Livestreams = {
  id: string;
  title: string;
  viewer_count: number;
  thumbnail: {
    src: string;
    srcset: string;
  };
  start_time: string;
  channel: {
    id: number;
    slug: string;
    profile_pic: string;
    username: string;
  };
  category: {
    id: number;
    name: string;
    slug: string;
  };
  language: string;
  is_mature: boolean;
  tags: string[];
};

type Datas = {
  "featured": {
    livestreams: Livestreams[];
  };
};

export declare type LiveStreams<D extends Category = Category> = {
  data:   Datas[D] /** valide categorie and language */
        | {} /** language dont existe */
        | { type: "Not Found"; } /** categorie dont existe */;
  message: string;
};