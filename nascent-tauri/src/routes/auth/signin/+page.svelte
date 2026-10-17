<script>
    import Login from "$lib/components/App/Auth/Login.svelte";
    import MinimalLayout from "$lib/layouts/Minimal.svelte"
</script>

<MinimalLayout>

    <!-- [ [LOGIN TAB] <BLOGS> ] -->
    <div class="flex min-h-[90vh] w-full items-center justify-center">
        <div class="overflow-hidden flex gap-2">
            <div class="rounded-xl border border-dim">
                <Login />
            </div>
            <div>
                <!-- Blog -->
                <div class="min-w-100">
                </div>
            </div>

        </div>
    </div>
</MinimalLayout>