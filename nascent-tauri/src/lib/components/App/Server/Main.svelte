<script>
    import Channels from '$lib/components/App/Server/Channels.svelte'
    import Content from '$lib/components/App/Server/Content.svelte'
    import MemberList from '$lib/components/App/Server/MemberList.svelte'
    import ServerNav from './ServerNav.svelte';
    import ServerInfo from './ServerInfo.svelte'
    import UserPill from './UserPill.svelte';
</script>


<main class="relative flex w-full h-full overflow-hidden">

    <div class="flex flex-col h-full bg-white/5 rounded-l-xl p-2">
        <div class="flex-1 min-h-0 flex flex-col">
            <ServerInfo />
            <Channels />
        </div>
        <!-- User Information -->
        <div class="stickybottom-1.5 left-1.5">
            <UserPill />
        </div>
    </div>
    <div class="flex w-full flex-col">
        <ServerNav />
        <div class="flex-1 flex flex-row">
            <Content />
            <MemberList />
        </div>
    </div>
</main>
