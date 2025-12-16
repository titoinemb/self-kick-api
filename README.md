# SELF KICK API Documentation

### 1. Get Current Viewers
- **Endpoint:** `https://kick.com/current-viewers?ids[]=<livestream_id>`
- **Method:** GET
- **Description:** for get livestream_id is with <a href="#2-get-informations-from-channel">channel informations</a>
- **Type:** <a href="./@types/api/current-viewers.d.ts">File</a>

#### Response:
```json
{
  "livestream_id": <Number>,
  "viewers": <Number>
}
```

### 2. Get informations from channel
- **Endpoint:** `https://kick.com/api/v1/channels/<name>`
- **Method:** GET
- **Description:** 
- **Type:** <a href="./@types/api/channel/api-v1-channels.d.ts">File</a>

#### Response:
```json
{
  "id": <Number>,
  "user_id": <Number>,
  "slug": <String>,
  "is_banned": <Boolean>,
  "playback_url": <String>,
  "name_updated_at": <String>,
  "vod_enabled": <Boolean>,
  "subscription_enabled": <Boolean>,
  "is_affiliate": <Boolean>,
  "followersCount": <Number>,
  "subscriber_badges": [
    {
      "id": <Number>,
      "channel_id": <Number>,
      "months": <Number>,
      "badge_image": {
        "srcset": <String>,
        "src": <String>
      }
    }
  ],
  "banner_image": {
    "responsive": <String>,
    "url": <String>
  },
  "recent_categories": [
    {
      "id": <Number>,
      "category_id": <Number>,
      "name": <String>,
      "slug": <String>,
      "tags": [<String>],
      "description": <Null>,
      "deleted_at": <Null>,
      "is_mature": <Boolean>,
      "is_promoted": <Boolean>,
      "viewers": <Number>,
      "is_fallback": <Boolean>,
      "banner": {
        "responsive": <String>,
        "url": <String>
      },
      "category": {
        "id": <Number>,
        "name": <String>,
        "slug": <String>,
        "icon": <String>
      }
    }
  ],
  "livestream": {
    "id": <Number>,
    "slug": <String>,
    "channel_id": <Number>,
    "created_at": <String>,
    "session_title": <String>,
    "is_live": <Boolean>,
    "risk_level_id": <Null>,
    "start_time": <String>,
    "source": <Null>,
    "twitch_channel": <Null>,
    "duration": <Number>,
    "language": <String>,
    "is_mature": <Boolean>,
    "viewer_count": <Number>,
    "thumbnail": {
      "responsive": <String>,
      "url": <String>
    },
    "viewers": <Number>,
    "lang_iso": <String>,
    "tags": [<String>],
    "categories": [<Categories>]
  },
  "role": <Null>,
  "muted": <Boolean>,
  "follower_badges": [],
  "offline_banner_image": {
    "src": <String>,
    "srcet": <String>
  },
  "can_host": <Boolean>,
  "user": {
    "id": <Number>,
    "username": <String>,
    "agreed_to_terms": <Boolean>,
    "email_verified_at": <String>,
    "bio": <String>,
    "country": <String>,
    "state": <String>,
    "city": <String>,
    "instagram": <String>,
    "twitter": <String>,
    "youtube": <String>,
    "discord": <String>,
    "tiktok": <String>,
    "facebook": <String>,
    "gender": <Null>
  },
  "chatroom": {
    "id": <Number>,
    "chatable_type": <String>,
    "channel_id": <Number>,
    "created_at": <String>,
    "updated_at": <String>,
    "chat_mode_old": <String>,
    "chat_mode": <String>,
    "slow_mode": <Boolean>,
    "chatable_id": <Number>,
    "followers_mode": <Boolean>,
    "subscribers_mode": <Boolean>,
    "emotes_mode": <Boolean>,
    "message_interval": <Number>,
    "following_min_duration": <Number>
  },
  "ascending_links": [
    {
      "id": <Number>,
      "channel_id": <Number>,
      "description": <String>,
      "link": <String>,
      "created_at": <String>,
      "updated_at": <String>,
      "order": <Number>,
      "title": <String>
    }
  ],
  "plan": {
    "id": <Number>,
    "channel_id": <Number>,
    "stripe_plan_id": <String>,
    "amount": <String>,
    "created_at": <String>,
    "updated_at": <String>
  },
  "previous_livestreams": [
    {
      "id": <Number>,
      "slug": <String>,
      "channel_id": <Number>,
      "created_at": <String>,
      "session_title": <String>,
      "is_live": <Boolean>,
      "risk_level_id": <Null>,
      "start_time": <String>,
      "source": <String>,
      "twitch_channel": <Null>,
      "duration": <Number>,
      "language": <String>,
      "is_mature": <Boolean>,
      "viewers_count": <Number>,
      "thumbnail": {
        "src": <String>,
        "srcset": <String>
      },
      "viewers": <Number>,
      "lang_iso": <String>,
      "tags": [<String>],
      "categories": [<Categories>],
      "video": {
        "id": <Number>,
        "live_stream_id": <Number>,
        "slug": <Null>,
        "thumb": <Null>,
        "s3": <Null>,
        "trading_platform_id": <Null>,
        "created_at": <String>,
        "updated_at": <String>,
        "uuid": <String>,
        "viewers": <Number>,
        "deleted_at": <Null>,
        "is_pruned": <Boolean>,
        "is_private": <Boolean>,
        "status": <String>
      }
    }
  ],
  "verified": {
    "id": <Number>,
    "channel_id": <Number>,
    "created_at": <String>,
    "updated_at": <String>
  },
  "media": [
    {
      "id": <Number>,
      "model_type": <String>,
      "model_id": <Number>,
      "collection_name": <String>,
      "name": <String>,
      "file_name": <String>,
      "mime_type": <String>,
      "disk": <String>,
      "size": <Number>,
      "manipulations": [],
      "custom_properties": {
        "generated_conversions": {
          "fullsize": <Boolean>
        }
      },
      "responsive_images": {
        "fullsize": {
          "urls": [<String>],
          "base64svg": <String>
        }
      },
      "order_column": <Number>,
      "created_at": <String>,
      "updated_at": <String>,
      "uuid": <String>,
      "conversions_disk": <String>
    }
  ]
}
```

### 3. Get channel emotes
- **Endpoint:** `https://kick.com/emotes/<name>`
- **Method:** GET
- **Description:** get channel emotes
- **Type:** <a href="./@types/api/emotes.d.ts">File</a>

#### Response:
```json
{
  "response": [
    {
      "id": <Number>,
      "user_id": <Number>,
      "slug": <String>,
      "is_banned": <Boolean>,
      "playback_url": <String>,
      "name_updated_at": <String or null>,
      "vod_enabled": <Boolean>,
      "subscription_enabled": <Boolean>,
      "is_affiliate": <Boolean>,
      "emotes": [
        {
          "id": <Number>,
          "channel_id": <Number or null>,
          "name": <String>,
          "subscribers_only": <Boolean>
        }
      ],
      "can_host": <Boolean>,
      "user": {
        "id": <Number>,
        "username": <String>,
        "agreed_to_terms": <Boolean>,
        "email_verified_at": <String>,
        "bio": <String>,
        "country": <String or null>,
        "state": <String or null>,
        "city": <String or null>,
        "instagram": <String>,
        "twitter": <String>,
        "youtube": <String>,
        "discord": <String>,
        "tiktok": <String>,
        "facebook": <String>,
        "gender": <String or null>
      }
    },
    {
      "name": <String>,
      "id": <String>,
      "emotes": [
        {
          "id": <Number>,
          "channel_id": <Number or null>,
          "name": <String>,
          "subscribers_only": <Boolean>
        }
      ]
    },
    {
      "name": <String>,
      "id": <String>,
      "emotes": [
        {
          "id": <Number>,
          "channel_id": <Number or null>,
          "name": <String>,
          "subscribers_only": <Boolean>
        }
      ]
    }
  ]
}
```