<!-- Loading Page -->
<script>
    import { App } from '../modules/globals.svelte';
    import LoadingLayout from '../layouts/Loading.svelte'
    import NascentTypography from '../assets/typography/NASCENT.svg'
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';

    onMount(() => App.startLoadingTips());

    const links = [
        {icon: "akar-icons:discord-fill", href: "discord.com/app"},
        {icon: "akar-icons:github-fill", href: "https://github.com/dhruvmane/nascent"},
    ]
</script>

<LoadingLayout>
    <div class="flex flex-col justify-items-center items-center w-full min-h-screen p-5">

        <div class="flex-3 my-5 w-120">
            <img src={NascentTypography} alt="Nascent">
        </div>

        <div class="flex flex-2 flex-col items-center gap-2">
            <div class="flex flex-row p-2 bg-white/10 rounded-xl items-center gap-2">
                <Icon icon="eos-icons:loading" />
                <h1>Loading</h1>
            </div>

            <div class="my-0.5">
                {App.currentLoadingBarTip}
            </div>
            
            <!-- Loading Bar -->
            <div class="w-100 h-2 bg-white/10 rounded-full overflow-hidden">
                <div class="rounded-full h-full bg-nascent transition-all duration-300" style="width: {App.loadingBarPercentage}%;">
                    
                </div>
            </div>

            <!-- Extra Buttons -->
            <div class="flex flex-row gap-1 opacity-40">
                {#each links as link}
                    <a class="p-1 hover:scale-105 text-2xl" target="_blank" rel="noopener" href={link.href}><Icon icon={link.icon}/></a>
                {/each}
            </div>
        </div>
        
    </div>
</LoadingLayout>
