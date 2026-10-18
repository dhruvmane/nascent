// SERVER
export interface SERVERORGROUP {
    id: string,
    info: {
        server_name: string,
        server_owner: string,
        server_icon?: string,
        created_at: number,
        members?: USER[],
    },
    channels?: CHANNELORCATEGORY[],
    isGroup: boolean,
    groupedServers?: SERVERORGROUP[]         // same interface, but isGroup = false
}

// USER
export interface USER {
    id: string,
    info: {
        username: string,
        description: string,
        email: string,
        avatar_url: string,
        banner_url: string,
        createdAt: number,
    },
    servers: SERVERORGROUP[],
}

export type CHANNEL_TYPE = "CHATTING" | "NOTICE_BOARD" | "STREAMING" | ""

// CHANNEL
export interface CHANNELORCATEGORY {
    id: string,
    guild_id: string,
    info: {
        name: string,
        createdAt: number,
        type: CHANNEL_TYPE,
        description: string,
    },
    isCategory: boolean,
    categoryChannels?: CHANNELORCATEGORY[]          // same interface, but isCategory = false
}
