<script>
    import Icon from '@iconify/svelte';
</script>
<main class="rounded-xl flex gap-2 w-fit p-2 bg-extradark px-2">
    <!-- PROFILE PICTURE -->
    <div class="flex flex-col relative">
        <div class="rounded-full size-9 bg-white/10">
        </div>

        <div class="absolute bottom-0 right-0">
            <Icon icon="ic:round-do-not-disturb-on"/>
        </div>
    </div>

    <!-- USERNAME AND STATUS -->
    <div class="flex flex-col">
        <h1 class="text-[13px]">barden</h1>
        <p class="text-[11px]">Do not Disturb</p>
    </div>

    <!-- MUTE / DEAFEN / SETTINGS -->
    <div class="flex gap-3 ml-10">
        <div class="flex items-center text-xl">
            <button class="p-1">
                <Icon icon="codicon:mic-filled" />
            </button>
        </div>

        <div class="flex items-center text-xl">
            <button class="p-1">
                <Icon icon="bi:headphones" />
            </button>
        </div>
        
        <div class="flex items-center text-xl">
            <button class="p-1">
                <Icon icon="boxicons:cog-filled" />
            </button>
        </div>
    </div>
</main>