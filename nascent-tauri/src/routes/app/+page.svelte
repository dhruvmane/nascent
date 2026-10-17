<script>
    import Servers from '$lib/components/App/ServerSidebar.svelte';
    import AppLayout from '$lib/layouts/App.svelte'
    import ServerMain from '$lib/components/App/Server/Main.svelte'
</script>

<AppLayout>
    <div class="min-h-screen text-white flex p-2 gap-2">
        <!-- SERVERS -->
        <div class="flex flex-col overflow-y-auto">
            <Servers />
        </div>

        <!-- SERVER-CONTENT -->
        <div class="mx-1 rounded-xl bg-white/5 min-h-screen w-full flex-1">
            <ServerMain />
        </div>
        
    </div>
</AppLayout>