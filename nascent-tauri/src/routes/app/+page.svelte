<script>
    import Servers from '$lib/components/App/ServerSidebar.svelte';
    import AppLayout from '$lib/layouts/App.svelte'
    import ServerMain from '$lib/components/App/Server/Main.svelte'
</script>

<AppLayout>
    <div class=" text-white flex px-2 gap-2 h-[95dvh]">
        <!-- SERVERS -->
        <div class="flex flex-col">
            <Servers />
        </div>

        <!-- SERVER-CONTENT -->
        <div class="mx-1 rounded-xl bg-white/5 w-full h-full flex-1 ">
            <ServerMain />
        </div>
        
    </div>
</AppLayout>