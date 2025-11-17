<template>
    <main>
        <section class="not-found">
            <h1>Oh! Page not found.</h1>
            <h2><span class="important">404 error.</span></h2>
            <router-link to="/" class="btn-primary">Go to home</router-link>
        </section>
    </main>
</template>

<style scoped>
.not-found{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    gap: 1.5em;
}
</style>