<script>
    import { App } from '$lib/modules/globals.svelte';
    import Input from './Messages/Input.svelte'
</script>
<main class="relative bg-white/10 w-full h-full">
    
    {#if App.selectedChannel}
        <div class="absolute bottom-0 p-1 w-full">
            <Input />
        </div>
    {/if}
    
</main>