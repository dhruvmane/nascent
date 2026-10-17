<script lang="ts">
    import { App } from '$lib/modules/globals.svelte'; 
    import ServerIcon from '$lib/components/App/Server/Icon.svelte';
    import Icon from '@iconify/svelte';
    import NN from '$lib/assets/typography/NN.svg'

    // "HOME" | "EXPLORE" | "CREATE"
    let selectedButton = $state("HOME")
    function setButtonWidget(enumString: string): void {
        selectedButton = enumString;
    }
</script>

<main class="flex flex-col gap-1 rounded-xl">

    <!-- Home Button -->
    <button onclick={() => setButtonWidget("HOME")} class="relative group/home size-10 rounded-xl justify-items-center text-xl hover:bg-nascent/30 duration-300 cursor-pointer bg-nascent/10">
        <img class="size-5" src={NN} alt="Home" />
        <p class="opacity-0 duration-300 group-hover/home:opacity-100 z-10 text-[12px] w-31 p-2 text-center top-1/2 -translate-y-1/2 border border-dim left-12 absolute bg-dark rounded-xl">DMs</p>
        <div class="
            {selectedButton !== 'HOME' ? 'opacity-0' : 'opacity-100'} duration-300 group-hover/home:opacity-100 z-10 
            w-2 {selectedButton !== 'HOME' ? 'h-2' : 'h-full'} 
            -translate-y-1/2 -left-3.25 top-1/2 absolute bg-white/50 rounded-r-xl">       
        </div>        
    </button>
    
    {#each App.servers as server}
        <ServerIcon />
    {/each}

    <div class="flex flex-col gap-1">
        <button onclick={() => setButtonWidget("CREATE")} class="relative group/create size-10 rounded-xl justify-items-center text-xl hover:bg-red-400/30 duration-300 cursor-pointer bg-red-400/10">
            <Icon icon="akar-icons:circle-plus-fill" />
            <p class="opacity-0 duration-300 group-hover/create:opacity-100 z-10 text-[12px] w-31 p-2 text-center top-1/2 -translate-y-1/2 border border-dim left-12 absolute bg-dark rounded-xl">Create New Server</p>
            <div class="
                {selectedButton !== 'CREATE' ? 'opacity-0' : 'opacity-100'} duration-300 group-hover/create:opacity-100 z-10 
                w-2 {selectedButton !== 'CREATE' ? 'h-2' : 'h-full'} 
                -translate-y-1/2 -left-3.25 top-1/2 absolute bg-white/50 rounded-r-xl">       
            </div>
        </button>
        <button onclick={() => setButtonWidget("EXPLORE")} class="size-10 relative group/explore rounded-xl justify-items-center text-xl hover:bg-blue-400/30 duration-300 cursor-pointer bg-blue-400/10">
            <Icon icon="bi:compass-fill"/>
            <p class="opacity-0 duration-300 group-hover/explore:opacity-100 z-10 text-[12px] w-31 p-2 text-center top-1/2 -translate-y-1/2 border border-dim left-12 absolute bg-dark rounded-xl">Find Servers</p>
            <div class="
                {selectedButton !== 'EXPLORE' ? 'opacity-0' : 'opacity-100'} duration-300 group-hover/explore:opacity-100 z-10 
                w-2 {selectedButton !== 'EXPLORE' ? 'h-2' : 'h-full'} 
                -translate-y-1/2 -left-3.25 top-1/2 absolute bg-white/50 rounded-r-xl">       
            </div>
        </button>
    </div>
</main>
