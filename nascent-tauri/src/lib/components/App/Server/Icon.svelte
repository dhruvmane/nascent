<script lang="ts">
    import { App } from "$lib/modules/globals.svelte";
    import placeholderIcon from '$lib/assets/images/placeholder/server.jpg';

    let { server, index } = $props();

    const isSelected = $derived(App.selectedServer?.id === server?.id);
</script>

{#if server && !Array.isArray(server)}
    <div class="relative size-10">
        <!-- active / hover indicator -->
        <span
            class="pointer-events-none absolute -left-3 top-1/2 -translate-y-1/2 w-2 rounded-r-xl bg-white/50 duration-300
                   {isSelected ? 'h-full opacity-100' : 'h-2 opacity-0'}
                   peer-hover:opacity-100"
        ></span>

        <button
            onclick={() => App.setSelectedServer(index)}
            class="peer size-full rounded-xl overflow-hidden grid place-items-center bg-nascent/10 hover:bg-nascent/30 duration-300 cursor-pointer"
        >
            <img
                class="size-full object-cover"
                src={server.info.server_icon || placeholderIcon}
                alt={server.info.server_name}
            />
        </button>

        <!-- tooltip -->
        <span
            class="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 z-10 w-32 p-2 text-center text-[12px]
                   border border-dim bg-dark rounded-xl opacity-0 duration-300 peer-hover:opacity-100"
        >
            {server.info.server_name}
        </span>
    </div>
{/if}