<script>
    import Icon from '@iconify/svelte';
    import { getCurrentWindow } from '@tauri-apps/api/window';
    
    // App Navbar takes extra components as props
    // to display from left to right.
    let { components = [] } = $props()

    const appWindow = getCurrentWindow()
    
</script>
<div data-tauri-drag-region class="flex sticky top-0 w-full text-white bg-extradark">

    <div id="extra-components" class="ml-auto">
        {#each components as component}
            {@render component?.()}
        {/each}
    </div>
    
    <div class="flex">
        <button onclick={() => appWindow.minimize()} class="py-2 px-4 hover:bg-white/10">
            <Icon icon="codicon:chrome-minimize"/>
        </button>

        <button onclick={() => appWindow.toggleMaximize()} class="py-2 px-4 hover:bg-white/10">
            <Icon icon="mdi:checkbox-blank-outline"/>
        </button>
    
        <button onclick={() => appWindow.close()} class="py-2 px-4 hover:bg-red-900/90">
            <Icon icon="akar-icons:cross"/>
        </button>
    </div>
</div>
