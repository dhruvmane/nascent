<script>
    import LoginImage from '$lib/assets/typography/LOGIN.svg'
</script>
<main class="p-7 text-white">

    <h1 class="w-75"><img alt="login" src={LoginImage}></h1>

    <div class="my-10 flex flex-col gap-2.5">
        <label class="flex flex-col">
            Enter username or email
            <input class="p-2 bg-white rounded text-black">
        </label>
    
        <label class="flex flex-col">
            Enter password
            <input class="p-2 bg-white rounded text-black" type="password">
            <a class="text-[12px]">Forgot Password?</a>
        </label>

        <button class="p-2 bg-nascent-dark rounded">Login</button>
        <a class="text-center text-[10px]">Don't have an account? Create One Here.</a>
    </div>
    
</main>