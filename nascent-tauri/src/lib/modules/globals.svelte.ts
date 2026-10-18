import { loadConfigFromFile } from 'vite';
import type { USER, SERVER, CHANNEL, CHANNEL_TYPE } from './types';

// Store Application State for Reactivity
export class ApplicationState {
    
    // PROFILES
    activeUserProfile: USER | null = $state(null)
    locallySavedUserProfiles : USER[] = $state([])
    setActiveUserProfile(userId: string): USER {
        if (this.locallySavedUserProfiles.length === 0) {
            const userTemplate: USER = {
                id: crypto.randomUUID(),
                info: {
                    avatar_url: "",
                    banner_url: "",
                    createdAt: new Date().getTime(),
                    description: "",
                    email: "",
                    username: "barden",
                },
                servers: []
            }
            this.activeUserProfile = userTemplate
            return this.activeUserProfile;
        }
        // Find from saved profiles and load.
        this.activeUserProfile = this.locallySavedUserProfiles.find((profile: USER) => profile.id === userId)!
        return this.activeUserProfile;
    }

    constructor() {
        this.setActiveUserProfile("")
    }
    
    private loadingBarTips = [
        "Welcome to Nascent!",
        "Nascent is heavily inspired by Discord and Fluxer!",
        "You can have an animated profile and banner, for free!",
        "Nascent is Open Source, btw!",
    ]
    currentLoadingBarTip = $state(this.loadingBarTips[0]);
    private loadingBarTipDuration = 5000;  // 10 seconds
    
    // cycle between new loading tips:
    private pickRandomTip() {
        // avoid repeating the same tip back-to-back
        if (this.loadingBarTips.length < 2) return this.loadingBarTips[0];
        let tip: string;
        do {
            tip = this.loadingBarTips[
                Math.floor(Math.random() * this.loadingBarTips.length)
            ];
        } while (tip === this.currentLoadingBarTip);
        return tip;
    }

    startLoadingTips() {
        this.currentLoadingBarTip = this.pickRandomTip();

        const timer = setInterval(() => {
            this.currentLoadingBarTip = this.pickRandomTip();

            // fake loading bar simulator
            if (this.loadingBarPercentage < 100) {
                 this.loadingBarPercentage += Math.floor(Math.random() * 20);
            }
            
        }, this.loadingBarTipDuration);

        return () => clearInterval(timer);
    }

    // Loading Bar Simulate
    loadingBarPercentage = 0;

    // user servers
    servers: SERVER[] | SERVER[][] | undefined = $derived(this.activeUserProfile?.servers)
    selectedServer: SERVER | null = $state(null)
    selectedSidebarButton: "HOME" | "EXPLORE" | "CREATE" | "" = $state("")
    setSelectedServer(heirarchicalIndex: number, isGroup?: boolean, groupIndex?: number) {
        this.selectedSidebarButton = "";
            
        // If the selected server is in a group, highlight the group.
        if (isGroup && this.servers && groupIndex && Array.isArray(this.servers[heirarchicalIndex])) {
            this.selectedServer = this.servers[heirarchicalIndex][groupIndex] 
            return;
        } 

        // Highlight as normal.
        if (this.servers && this.servers[heirarchicalIndex] && !Array.isArray(this.servers[heirarchicalIndex])) {
            this.selectedServer = this.servers[heirarchicalIndex]
        }
    }

    // CREATING A NEW SERVER
    createServer() {
        let templateServerId = crypto.randomUUID()
        let template: SERVER = {
            id: templateServerId,
            channels: [
                {
                    id: crypto.randomUUID(),
                    guild_id: templateServerId,
                    info: {
                        channel_name: "this-is-a-channel",
                        createdAt: new Date().getTime(),
                        type: "STREAMING",
                        description: "This is a description."
                    }
                }
            ],
            info: {
                created_at: new Date().getTime(),
                members: [],
                server_name: "My Server",
                server_owner: App.activeUserProfile?.id!,
                server_icon: "",
            }
        }

        if (!Array.isArray(template)) {
            // @ts-ignore
            this.activeUserProfile?.servers.push(template)
        }
        console.log("Created New Server.")
        
    }

    selectedChannel: CHANNEL | null = $state(null);
    setSelectedChannel(channelId: string) {
        // App.servers looks like [{}, {}, [{}, {}]]
        // where each {} can be a server, and every sub-array
        // of {} are "groups".

        App.servers?.forEach((server) => {
            // handle grouping
            // here, "server" becomes "group"
            if (Array.isArray(server)) {
                const group = server;
                // in this group, the first {} is information
                // about the group itself (color / name / icon etc.)
                // so check if the first {} has channels; if not => its 
                // group information and not a server, hence skip it.
                (group.filter((object) => object.channels)).forEach((subServer: SERVER) => {
                    if (subServer.channels) {
                        subServer.channels.forEach((channel) => {
                            if (channel.id === channelId) {
                                this.selectedChannel = channel;
                                return;
                            }
                        })
                    }
                })
            } else {
                server.channels?.forEach((channel) => {
                    if (channel.id === channelId) {
                        this.selectedChannel = channel
                    }
                })
            }
        })
    }

}

export const App = new ApplicationState();