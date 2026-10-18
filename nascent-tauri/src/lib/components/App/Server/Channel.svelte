<!-- CHANNEL PILL -->
<script lang="ts">
    import type { CHANNEL, CHANNEL_TYPE } from '$lib/modules/types';
    import Icon from '@iconify/svelte';
    let { channel }: {channel: CHANNEL} = $props()
    let icons: Record<CHANNEL_TYPE, string> = {
        "CHATTING": "akar-icons:hashtag",
        "NOTICE_BOARD": "bx:news",
        "STREAMING": "icon-park-solid:volume-notice",
    }
</script>

<main class="cursor-pointer duration-300 hover:bg-white/10 opacity-50 flex items-center gap-2 px-2 py-1 rounded">
    <div class="text-xl">
        <Icon icon={icons[channel.info.type]}/>
    </div>

    <div class="flex-1">
        <p>{channel.info.channel_name}</p>
    </div>

    <!-- Extra Buttons (Invite and Settings for Mods) -->
    <div class="flex items-center">
        <button class="p-1 cursor-pointer hover:bg-black/10 text-xl"><Icon icon="mdi:account-multiple-plus"/></button>
        <button class="p-1 cursor-pointer hover:bg-black/10 text-xl"><Icon icon="boxicons:cog-filled"/></button>
    </div>
</main>