<script>
    import Icon from '@iconify/svelte';
    import placeholder from '$lib/assets/images/placeholder/user.png'
</script>
<main class="rounded-xl flex gap-2 w-full p-2 bg-extradark px-2">
    <!-- PROFILE PICTURE -->
    <div class="flex flex-col relative">
        <div class="rounded-full size-9 bg-white/10 overflow-hidden">
            <img src={placeholder} alt="placeholder"/>
        </div>

        <div class="absolute bottom-0 right-0">
            <Icon icon="ic:round-do-not-disturb-on"/>
        </div>
    </div>

    <!-- USERNAME AND STATUS -->
    <div class="flex flex-col min-w-0 flex-1">
        <h1 class="text-[13px]">barden</h1>
        <p class="text-[11px] truncate">Do not Disturb</p>
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