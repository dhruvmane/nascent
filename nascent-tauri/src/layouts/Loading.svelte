<script>
    import "../styles.css"
    import AppBar from '../components/App/AppBar.svelte'
</script>

<main class="app">
    <AppBar />
    <div class="flex-1">
        <slot />
    </div>
</main>