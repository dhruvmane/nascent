<!-- CHANNEL PILL -->
<script lang="ts">
    import { App } from '$lib/modules/globals.svelte';
    import type { CHANNELORCATEGORY, CHANNEL_TYPE } from '$lib/modules/types';
    import Icon from '@iconify/svelte';
    let { channel }: {channel: CHANNELORCATEGORY} = $props()
    let icons: Record<CHANNEL_TYPE, string> = {
        "": "",
        "CHATTING": "akar-icons:hashtag",
        "NOTICE_BOARD": "bx:news",
        "STREAMING": "icon-park-solid:volume-notice",
    }
</script>

{#if !channel.isCategory}
    <button onclick={() => App.setSelectedChannel(channel)} class="w-full cursor-pointer duration-300 hover:bg-white/10 opacity-50 flex items-center gap-2 px-2 py-1 rounded">
        <div class="text-xl">
            <Icon icon={icons[channel.info.type]}/>
        </div>
        <div class="flex-1 text-left">
            <p>{channel.info.name}</p>
        </div>
        <!-- Extra Buttons (Invite and Settings for Mods) -->
        <div class="flex items-center">
            <div class="p-1 cursor-pointer hover:bg-black/10 text-xl"><Icon icon="mdi:account-multiple-plus"/></div>
            {#if App.selectedServer?.info.server_owner === App.activeUserProfile?.id}
                <div class="p-1 cursor-pointer hover:bg-black/10 text-xl"><Icon icon="boxicons:cog-filled"/></div>
            {/if}
        </div>
    </button>
    
{:else}
    <details class="my-3">
        <summary class="cursor-pointer hover:opacity-100 opacity-50 px-1 content-none text-[12px]">{channel.info.name}</summary>
        {#each channel.categoryChannels as subChannel}
            <button onclick={() => App.setSelectedChannel(subChannel)} class="w-full cursor-pointer duration-300 hover:bg-white/10 opacity-50 flex items-center gap-2 px-2 py-1 rounded">
                <div class="text-xl">
                    <Icon icon={icons[subChannel.info.type]}/>
                </div>
                <div class="flex-1 text-left">
                    <p>{subChannel.info.name}</p>
                </div>
                <!-- Extra Buttons (Invite and Settings for Mods) -->
                <div class="flex items-center">
                    <div class="p-1 cursor-pointer hover:bg-black/10 text-xl"><Icon icon="mdi:account-multiple-plus"/></div>
                    {#if App.selectedServer?.info.server_owner === App.activeUserProfile?.id}
                        <div class="p-1 cursor-pointer hover:bg-black/10 text-xl"><Icon icon="boxicons:cog-filled"/></div>
                    {/if}
                </div>
            </button>
        {/each}
    </details>
{/if}