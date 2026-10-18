<script>
    import Icon from '@iconify/svelte'
</script>

<main class="py-2 px-4 flex items-center bg-black/15 rounded-tl-xl">
    <div class="flex-1">
        <div class="w-fit px-5 py-1 duration-300 hover:cursor-pointer rounded hover:bg-black/30">
            <h1>My Server</h1>
        </div>
    </div>

    <!-- INVITE BUTTON -->
    <div>
        <button class="text-2xl">
            <Icon icon="mdi:account-multiple-plus" />
        </button>
    </div>
</main>