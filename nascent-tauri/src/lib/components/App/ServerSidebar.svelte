<script>
    import { App } from '$lib/modules/globals.svelte'; 
    import ServerIcon from '$lib/components/App/Server/Icon.svelte'
</script>

<main class="flex flex-col gap-2 rounded-xl">
    {#each App.servers as server}
        <ServerIcon />
    {/each}
</main>
