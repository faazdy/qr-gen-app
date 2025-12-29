<template>
    <main>
        <section class="hero">
            <h1>Instant QR Codes for <span class="important">Anything</span></h1>
            <h2>Generate and download in seconds.</h2>

            <img src="../assets/img/hero.png" alt="hero-pic">

            <div class="btns-container">
                <router-link to="/app" class="btn-primary">Generate a QR</router-link>
                <a href="#about" class="btn-secondary">Learn more</a>
            </div>
        </section>

        <section class="about">
            <h2 class="main-subtitle" id="about">Why QRMe?</h2>
            <br>

            <p>
                QRMe is the fastest and simplest tool for creating QR codes on the web.
                Whether you need a quick link for your business, a code for a school project,
                or a way to share your social media in one tap, QRMe makes it effortless.
            </p>
            <br>
            <p>
                Just type or paste any URL, generate your QR instantly, and download it in high quality.
                <b>No sign-ups. No complications.</b> Just fast, reliable QR codes made for everyone.
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
        <section class="cta-final">
            <h2 class="main-subtitle">Start Creating QR Codes Now</h2>
            <p>
                Generate custom QR codes instantly — no limits, no accounts, and completely free.
                Just enter your link, click generate, and download your QR in seconds.
            </p>

            <router-link to="/app" class="btn-primary">Get Started</router-link>
        </section>


    </main>

</template>

<style scoped>
.hero img {
    margin-top: 3em;
    width: 100%;
    border-radius: 20px;
}

.hero .btns-container {
    margin-top: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.atributes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: center;
    align-items: center;
    gap: 10px;

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin: 1em;
        border: 1px solid rgba(0,0,0,0.08);
        padding: 1em;
        border-radius: 20px;

        img {
            width: auto;
            height: 50px;
            object-fit: contain;
        }
    }
}

.cta-final {
    text-align: center;
    padding: 4em 2em;
    margin-top: 2em;

    p {
        max-width: 600px;
        margin: 0 auto 1.8em auto;
        opacity: 0.9;
        line-height: 1.6;
    }

    .btn-primary {
        padding: 1em 2em;
        font-size: 1rem;
    }
}


</style>