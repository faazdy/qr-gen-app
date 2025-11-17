<template>
    <nav>
        <div class="logo">
            <img src="../assets/img/logo.png" alt="">
        </div>
        <div class="tags">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/app">Generate a QR</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em 1.8em;
    
    ul{
        display: flex;
        gap: 20px;
        list-style: none;
    }
    a{
        color: black;
        text-decoration: none;
        margin: 0 1em;
    }

    img{
        width: auto;
        height: 60px;
        object-fit: contain;
    }
}
</style>