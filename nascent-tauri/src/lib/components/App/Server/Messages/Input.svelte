<script>
    import { App } from "$lib/modules/globals.svelte";
</script>

<main class="flex items-center p-1 bg-black/20 m-1 rounded-xl">
    <textarea class="outline-0 px-4 py-2.5 flex-1" placeholder={`Message #${App.selectedChannel?.info.name}`}></textarea>
</main>