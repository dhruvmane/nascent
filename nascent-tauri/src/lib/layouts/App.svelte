<script>
    import "../../styles.css"
    import AppBar from '$lib/components/App/AppBar.svelte'
    import Tray from "$lib/components/App/AppBar/Tray.svelte"
    import Servers from '$lib/components/App/ServerSidebar.svelte';

    let { children  } = $props()
    const components = [Tray]
</script>

<main class="app">
    <AppBar components={components} />
    <div class="flex-1 w-full">
        {@render children?.()}
    </div>
</main>