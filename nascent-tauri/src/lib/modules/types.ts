// SERVER
export interface SERVER {
    id: string,
    info: {
        server_name: string,
        server_owner: string,
        server_icon?: string,
        created_at: number,
        members?: USER[],
    },
    channels?: CHANNEL[],
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
    servers: SERVER[] | SERVER[][],
}

export type CHANNEL_TYPE = "CHATTING" | "NOTICE_BOARD" | "STREAMING"

// CHANNEL
export interface CHANNEL {
    id: string,
    guild_id: string,
    info: {
        channel_name: string,
        createdAt: number,
        type: CHANNEL_TYPE,
        description: string,
    }
}
