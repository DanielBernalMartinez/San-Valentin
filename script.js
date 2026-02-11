const btnNo = document.getElementById("no");
const btnSi = document.getElementById("si");
const musica = document.getElementById("musica");
const playBtn = document.getElementById("play");

playBtn.addEventListener("click", () => {
    musica.play();
});

btnNo.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - btnNo.clientWidth);
    const y = Math.random() * (window.innerHeight - btnNo.clientHeight);

    btnNo.style.position = "absolute";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
});

btnSi.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#ff4e8b;color:white;font-family:sans-serif;text-align:center;">
            <div>
                <h1>Sabía que dirías que sí ❤️</h1>
                <p>Eres lo mejor que me ha pasado 💖</p>
            </div>
        </div>
    `;
});
