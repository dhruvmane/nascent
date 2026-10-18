<script>
    import { App } from '$lib/modules/globals.svelte';
    import Channel from './Channel.svelte'
</script>

<div class="w-full my-2 h-full overflow-auto">
    {#each App.selectedServer?.channels as channel}
        <Channel channel={channel} />
    {/each}
</div>