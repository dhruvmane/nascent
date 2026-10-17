<script>
    import Icon from '@iconify/svelte';
</script>
<div data-tauri-drag-region class="flex sticky top-0 w-full text-white">

    <div class="flex ml-auto">
        <button class="py-2 px-4 hover:bg-white/10">
            <Icon icon="codicon:chrome-minimize"/>
        </button>

        <button class="py-2 px-4 hover:bg-white/10">
            <Icon icon="mdi:checkbox-blank-outline"/>
        </button>
    
        <button class="py-2 px-4 hover:bg-red-900/90">
            <Icon icon="akar-icons:cross"/>
        </button>
    </div>
</div>
