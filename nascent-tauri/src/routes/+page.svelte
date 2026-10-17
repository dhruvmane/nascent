<!-- Loading Page -->
<script>
    // import the newly created Application instance
    import { App } from '$lib/modules/globals.svelte';
    import LoadingLayout from '$lib/layouts/Loading.svelte'
    import NascentTypography from '$lib/assets/typography/NASCENT.svg'
    // import TaglineTypography from '$lib/assets/typography/IMPROVED WATCH PARTY EXPERIENCE.svg'
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';
    // begin loading new loading tips
    onMount(() => App.startLoadingTips());
    
</script>

<LoadingLayout>
    <div class="flex flex-col justify-items-center items-center w-full min-h-screen p-5 text-white">

        <div class="flex-3 my-5 w-120">
            <img src={NascentTypography} alt="Nascent">
        </div>

        <div class="flex flex-1 flex-col items-center gap-2">
            <a href="/app" class="flex flex-row p-2 bg-white/10 rounded-xl items-center gap-2">
                <Icon icon="eos-icons:loading" />
                <h1>Loading</h1>
            </a>

            <div class="my-0.5">
                {App.currentLoadingBarTip}
            </div>

            <!-- Loading Bar -->
            <div class="w-100 h-2 bg-white/10 rounded-full overflow-hidden">
                <div class="rounded-full h-full bg-nascent transition-all duration-300" style="width: {App.loadingBarPercentage}%;">
                    
                </div>
            </div>

        </div>

    </div>
</LoadingLayout>
