<script>
    import SignInImage from '$lib/assets/typography/SIGN IN.svg'
</script>
<main class="p-7 text-white">

    <h1 class="w-75"><img alt="login" src={SignInImage}></h1>

    <div class="my-10 flex flex-col gap-2.5">
        <label class="flex flex-col">
            Enter username
            <input class="p-2 bg-white rounded text-black">
        </label>

        <label class="flex flex-col">
            Enter email
            <input class="p-2 bg-white rounded text-black">
        </label>
    
        <label class="flex flex-col">
            Enter password
            <input class="p-2 bg-white rounded text-black" type="password">
        </label>
        
        <label class="flex flex-col">
            Re-enter password
            <input class="p-2 bg-white rounded text-black" type="password">
        </label>
        
        <button class="p-2 bg-nascent-dark rounded">Sign Up</button>
    </div>
    
</main>