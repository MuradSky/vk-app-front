<script setup>
    const onSubmit = () => {
        fetch(import.meta.env.VITE_BACKEND_URL).then(r => r.text()).then(console.log)
    }
</script>

<template>
    <div class="form">
        <form @submit.prevent="onSubmit">
            <input type="email" name="email" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <button>Sign in</button>
        </form>
    </div>
</template>

<style global>
    @import url(https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css);

    .form {
        max-width: 464px;
        margin: 50px auto;
        padding: 32px;
    }
</style>