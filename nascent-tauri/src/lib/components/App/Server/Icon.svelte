<script lang="ts">
    import { App } from "$lib/modules/globals.svelte";
    let { index } = $props()
</script>

<!-- Home Button -->
<button onclick={() => App.setSelectedServer(index)} class="relative group/home size-10 rounded-xl justify-items-center text-xl hover:bg-nascent/30 duration-300 cursor-pointer bg-nascent/10">
    {#if App.selectedServer && !Array.isArray(App.servers[index])}
        {@const server = App.servers[index]}
        <img class="size-5" src={server.info.server_icon} alt="Home" />
        <p class="opacity-0 duration-300 group-hover/home:opacity-100 z-10 text-[12px] w-31 p-2 text-center top-1/2 -translate-y-1/2 border border-dim left-12 absolute bg-dark rounded-xl">DMs</p>
        <div class="
            {App.selectedServer.id !== App.servers[index].id ? 'opacity-0' : 'opacity-100'} duration-300 group-hover/home:opacity-100 z-10 
            w-2 {App.selectedServer.id !== App.servers[index].id ? 'h-2' : 'h-full'} 
            -translate-y-1/2 -left-3.25 top-1/2 absolute bg-white/50 rounded-r-xl">       
        </div>   
    {/if}    
</button>