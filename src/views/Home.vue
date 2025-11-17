<template>
  <main>
    <section class="hero">
        <h1>Instant QR Codes for Anything</h1>
        <h2>Generate and download in seconds.</h2>
        <img src="https://m.media-amazon.com/images/I/61qbMx4oXJL._AC_UF1000,1000_QL80_.jpg" alt="">
        <div class="btns-container">
            <router-link to="/app" class="btn-primary">Generate a QR</router-link>
            <a href="#about" class="btn-secondary">s</a>
        </div>
    </section>

    <section class="about">
        <h2 class="main-subtitle" id="about">Why QRMe ?</h2>
        <br>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsam, excepturi odit adipisci iure cupiditate illum deserunt ipsum pariatur quasi architecto accusamus explicabo, mollitia fugit sequi laudantium consequatur, repellendus commodi!
        </p>
    </section>

    <section class="atributes">
        <div class="card">
            <img src="../assets/img/web.png" alt="item">
            <strong>URL to QR</strong>
        </div>
        <div class="card">
            <img src="../assets/img/dw.png" alt="item">
            <strong>Download QR Image</strong>
        </div>
        <div class="card">
            <img src="../assets/img/ck.png" alt="item">
            <strong>Ready Instantly</strong>
        </div>
    </section>
    <hr>
</main>
<footer>
    <div class="logo">
        <img src="../assets/img/logo.png" alt="logo">
        <br>
        <p>QRMe App | 2025</p>
    </div>
    <div class="tags">
        <ul>
            <li class="footer-title">QRMe</li>
            <li><a href="/">Home</a></li>
            <li><router-link to="/app">Generate a QR</router-link></li>
            <li><a href="#">GitHub Code</a></li>
            <li><a href="#">API</a></li>
        </ul>
        <ul>
            <li class="footer-title">About</li>
            <li>QRMe App by: <a href="https://leorengifodev.vercel.app/">Leonardo</a></li>
            <li><a href="https://github.com/faazdy">GitHub</a></li>
        </ul>
    </div>
</footer>
</template>

<style scoped>
    .hero img{
        margin-top: 3em;
        width: 100%;
        border-radius: 20px;
    }

    .hero .btns-container{
        margin-top: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .atributes{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        justify-content: center;
        align-items: center;
        gap: 10px;

        .card{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            margin: 1em;
           /* border: 1px solid rgb(228, 228, 228);
            padding: 1em;
            border-radius: 20px;*/

            img{
                width: auto;
                height: 50px;
                object-fit: contain;
            }
        }
    }


    footer{
        padding: 1em;
        padding-top: 1.5em;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .logo{text-align: center;}
        p{font-size: 15px;}
        img{width: 50px; filter: saturate(0%);}

        .tags{
            display: flex;
            justify-content: flex-end;
            gap: 15px;
        }

        ul{
            width: 100%;
            list-style: none;
            margin: 0 1em;
            display: flex;
            flex-direction: column;
            gap: 8px;

            a{
                color: #8b8b8b;
            }
        }
    }
</style>