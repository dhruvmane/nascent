<script>
    import Servers from '$lib/components/App/ServerSidebar.svelte';
    import AppLayout from '$lib/layouts/App.svelte'
    import ServerMain from '$lib/components/App/Server/Main.svelte'
</script>

<AppLayout>
    <div class=" text-white flex px-2 gap-2 h-[90dvh]">
        <!-- SERVERS -->
        <div class="flex flex-col overflow-y-auto">
            <Servers />
        </div>

        <!-- SERVER-CONTENT -->
        <div class="mx-1 rounded-xl bg-white/5 w-full h-[90dvh] flex-1 ">
            <ServerMain />
        </div>
        
    </div>
</AppLayout>