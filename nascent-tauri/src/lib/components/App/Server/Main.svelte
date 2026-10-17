<script>
    import Channels from '$lib/components/App/Server/Channels.svelte'
    import Content from '$lib/components/App/Server/Content.svelte'
    import MemberList from '$lib/components/App/Server/MemberList.svelte'
</script>

<main class="flex w-full h-full">
    <Channels />
    <Content />
    <MemberList />
</main>