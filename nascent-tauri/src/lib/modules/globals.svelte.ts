import { loadConfigFromFile } from 'vite';
import type { USER, SERVERORGROUP, CHANNELORCATEGORY, CHANNEL_TYPE } from './types';

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
    servers: SERVERORGROUP[] | undefined = $derived(this.activeUserProfile?.servers)
    selectedServer: SERVERORGROUP | null = $state(null)
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
        let template: SERVERORGROUP = {
            id: templateServerId,
            channels: [
                {
                    id: crypto.randomUUID(),
                    guild_id: templateServerId,
                    info: {
                        name: "this-is-a-channel",
                        createdAt: new Date().getTime(),
                        type: "STREAMING",
                        description: "This is a description."
                    },
                    isCategory: false
                },
                {
                    id: crypto.randomUUID(),
                    guild_id: templateServerId,
                    info: {
                        name: "this-is-a-category",
                        createdAt: new Date().getTime(),
                        type: "",
                        description: ""
                    },
                    isCategory: true,
                    categoryChannels: [
                        {
                            id: crypto.randomUUID(),
                            guild_id: templateServerId,
                            info: {
                                name: "this-is-a-channel",
                                createdAt: new Date().getTime(),
                                type: "CHATTING",
                                description: "This is a description."
                            },
                            isCategory: false
                        }
                    ]
                }
            ],
            info: {
                created_at: new Date().getTime(),
                members: [],
                server_name: "My Server",
                server_owner: App.activeUserProfile?.id!,
                server_icon: "",
            },
            isGroup: false
        }

        if (!Array.isArray(template)) {
            // @ts-ignore
            this.activeUserProfile?.servers.push(template)
        }
        console.log("Created New Server.")
        
    }

    selectedChannel: CHANNELORCATEGORY | null = $state(null);
  setSelectedChannel(channel: CHANNELORCATEGORY) {
    this.selectedChannel = channel;
  }

  isMemberslistHidden = $state(false);
  toggleMemberList() {
    this.isMemberslistHidden = !this.isMemberslistHidden;
  }

}

export const App = new ApplicationState();