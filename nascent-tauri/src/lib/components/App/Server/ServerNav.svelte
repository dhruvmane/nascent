<script lang="ts">
    import { App } from '$lib/modules/globals.svelte';
    import type { CHANNEL_TYPE } from '$lib/modules/types';
    import Icon from '@iconify/svelte'
    let channelIcons: Record<CHANNEL_TYPE, string> = {
        "": "",
        "CHATTING": "akar-icons:hashtag",
        "NOTICE_BOARD": "bx:news",
        "STREAMING": "icon-park-solid:volume-notice",
    }
</script>

<main class="w-full p-3 px-4 flex h-15">
    <div class="flex items-center gap-4 py-2 opacity-50 text-xl">
        <Icon icon={channelIcons[App.selectedChannel?.info.type!]} />
        <p>{App.selectedChannel?.info.name}</p>
        <div class="opacity-50">
            <Icon icon="andrsrxn:dot"/>
        </div>
        <p class="text-[14px]">{App.selectedChannel?.info.description}</p>
    </div>
</main>