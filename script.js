const artigos = {
    artigo1: {
        titulo: "Hobbys",
        capaLobby: "imagens/capa-artigo1.jpg",
        bannerArtigo: "imagens/banner-artigo1.jpg",
        texto: `
            <div class="categoria-artigo hobbys">
                <h3>Hobbys:</h3>
                <div class="item-artigo">
                    <img src="imagens/hobby-desenhar.jpg" alt="Desenhar" loading="lazy" onerror="this.style.display='none'">
                    <p>1. Desenhar</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/hobby-jogar.jpg" alt="Jogar com retardados" loading="lazy" onerror="this.style.display='none'">
                    <p>2. Jogar com retardados</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/hobby-animes.jpg" alt="Assistir meus animes" loading="lazy" onerror="this.style.display='none'">
                    <p>3. Assistir meus animes</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/hobby-musicas.jpg" alt="Escutar músicas" loading="lazy" onerror="this.style.display='none'">
                    <p>4. Escutar músicas</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/hobby-dormir.jpg" alt="Dormir" loading="lazy" onerror="this.style.display='none'">
                    <p>5. Dormir</p>
                </div>
            </div>
        `
    },

    artigo2: {
        titulo: "O que Gosta",
        capaLobby: "imagens/capa-artigo2.jpg",
        bannerArtigo: "imagens/hollow-knight.webm",
        texto: `
            <div class="categoria-artigo jogos">
                <h3>Jogos:</h3>
                <div class="item-artigo">
                    <video src="imagens/hollow-knight.webm" autoplay loop muted playsinline></video>
                    <p>1. Hollow Knight</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/minecraft.jpg" alt="Minecraft" loading="lazy" onerror="this.style.display='none'">
                    <p>2. Minecraft</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/fortnite.jpg" alt="Fortnite" loading="lazy" onerror="this.style.display='none'">
                    <p>3. Fortnite</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/brawl-stars.jpg" alt="Brawl Stars" loading="lazy" onerror="this.style.display='none'">
                    <p>4. Brawl Stars</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/roblox.jpg" alt="Roblox" loading="lazy" onerror="this.style.display='none'">
                    <p>5. Roblox</p>
                </div>
            </div>

            <div class="categoria-artigo comidas">
                <h3>Comidas:</h3>
                <div class="item-artigo">
                    <img src="imagens/lasanha.jpg" alt="Lasanha" loading="lazy" onerror="this.style.display='none'">
                    <p>1. Lasanha</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/lentilha.jpg" alt="Lentilha" loading="lazy" onerror="this.style.display='none'">
                    <p>2. Lentilha</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/picanha.jpg" alt="Picanha" loading="lazy" onerror="this.style.display='none'">
                    <p>3. Picanha</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/frutas.jpg" alt="Frutas" loading="lazy" onerror="this.style.display='none'">
                    <p>4. Frutas</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/yakisoba.jpg" alt="Yakisoba" loading="lazy" onerror="this.style.display='none'">
                    <p>5. Yakisoba</p>
                </div>
            </div>

            <div class="categoria-artigo musicas">
                <h3>Músicas:</h3>
                <div class="item-artigo">
                    <img src="imagens/cicatrizes.jpg" alt="Cicatrizes" loading="lazy" onerror="this.style.display='none'">
                    <p>1. Cicatrizes (Slow GM)</p>
                    <button type="button" onclick="tocarTrecho('audio/cicatrizes.mp3', 30, 45, this)">▶ Ouvir trecho</button>
                </div>
                <div class="item-artigo">
                    <img src="imagens/backlight.jpg" alt="Backlight" loading="lazy" onerror="this.style.display='none'">
                    <p>2. Backlight (Ado)</p>
                    <button type="button" onclick="tocarTrecho('audio/backlight.mp3', 45, 60, this)">▶ Ouvir trecho</button>
                </div>
                <div class="item-artigo">
                    <img src="imagens/5-minutos.jpg" alt="5 Minutos" loading="lazy" onerror="this.style.display='none'">
                    <p>3. 5 Minutos (Dan)</p>
                    <button type="button" onclick="tocarTrecho('audio/5-minutos.mp3', 20, 35, this)">▶ Ouvir trecho</button>
                </div>
                <div class="item-artigo">
                    <img src="imagens/akaza.jpg" alt="3 é o Número do Akaza" loading="lazy" onerror="this.style.display='none'">
                    <p>4. 3 é o Número do Akaza (Slow GM)</p>
                    <button type="button" onclick="tocarTrecho('audio/akaza.mp3', 15, 30, this)">▶ Ouvir trecho</button>
                </div>
                <div class="item-artigo">
                    <img src="imagens/caliente.jpg" alt="Caliente" loading="lazy" onerror="this.style.display='none'">
                    <p>5. Caliente (Novatroop)</p>
                    <button type="button" onclick="tocarTrecho('audio/caliente.mp3', 40, 55, this)">▶ Ouvir trecho</button>
                </div>
            </div>

            <div class="categoria-artigo animes">
                <h3>Animes:</h3>
                <div class="item-artigo">
                    <img src="imagens/gachiakuta.jpg" alt="Gachiakuta" loading="lazy" onerror="this.style.display='none'">
                    <p>1. Gachiakuta</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/one-piece.jpg" alt="One Piece" loading="lazy" onerror="this.style.display='none'">
                    <p>2. One Piece</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/horimiya.jpg" alt="Horimiya" loading="lazy" onerror="this.style.display='none'">
                    <p>3. Horimiya</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/pokemon.jpg" alt="Pokemon" loading="lazy" onerror="this.style.display='none'">
                    <p>4. Pokemon</p>
                </div>
                <div class="item-artigo">
                    <img src="imagens/dandadan.jpg" alt="DanDaDan" loading="lazy" onerror="this.style.display='none'">
                    <p>5. DanDaDan</p>
                </div>
            </div>
        `
    },

    artigo3: {
        titulo: "Projeto Futuro",
        capaLobby: "imagens/capa-artigo3.jpg",
        bannerArtigo: "imagens/banner-artigo3.jpg",
        texto: `

        <p>1. Fazer um jogo com meus amigos</p>
        <p>2. Trabalhar com Conserto/Montagem de PC</p>
        <p>3. Ter o meu PC</p>
        <p>4. Melhorar nos meus desenhos</p>
        `
    }
};

let playerAtual = null;
let timerParada = null;
let botaoAtivo = null;

function ehVideoWebm(src) {
    return /\.webm(\?.*)?$/i.test(src || "");
}

function criarHtmlMidia(src, alt = "", classeExtra = "") {
    if (!src) return "";

    if (ehVideoWebm(src)) {
        return `<video class="midia-web ${classeExtra}" src="${src}" autoplay loop muted playsinline></video>`;
    }

    return `<img class="midia-web ${classeExtra}" src="${src}" alt="${alt}" loading="lazy" onerror="this.style.display='none'">`;
}

function pararMusica() {
    if (timerParada) {
        clearTimeout(timerParada);
        timerParada = null;
    }

    if (playerAtual) {
        playerAtual.pause();
        playerAtual.currentTime = 0;
        playerAtual = null;
    }

    if (botaoAtivo) {
        botaoAtivo.textContent = "▶ Ouvir trecho";
        botaoAtivo = null;
    }
}

function tocarTrecho(src, inicioSegundos, fimSegundos, botao) {
    const eraOMesmoBotao = botaoAtivo === botao;
    pararMusica();

    if (eraOMesmoBotao) {
        return;
    }

    const audio = new Audio(src);
    playerAtual = audio;
    botaoAtivo = botao;
    botao.textContent = "⏹ Parar";

    audio.addEventListener("loadedmetadata", () => {
        const inicioSeguro = Math.min(inicioSegundos, Math.max(0, audio.duration - 1));
        audio.currentTime = inicioSeguro;
        audio.play().catch((err) => {
            console.error("Erro ao reproduzir áudio:", err);
            pararMusica();
        });
    });

    audio.addEventListener("timeupdate", () => {
        if (audio.currentTime >= fimSegundos) {
            pararMusica();
        }
    });

    audio.addEventListener("ended", pararMusica);

    const duracaoMs = Math.max(1000, (fimSegundos - inicioSegundos) * 1000);
    timerParada = setTimeout(() => {
        pararMusica();
    }, duracaoMs + 500);
}

function renderizarLobby() {
    const container = document.getElementById("listaArtigos");
    if (!container) return;

    container.innerHTML = "";

    Object.entries(artigos).forEach(([chave, artigo], index) => {
        const card = document.createElement("article");
        card.className = "card";
        card.style.animationDelay = `${0.04 + index * 0.06}s`;
        card.onclick = () => abrirArtigo(chave);

        const midiaLobbyHtml = criarHtmlMidia(artigo.capaLobby, artigo.titulo, "lobby-capa");
        const bannerLobbyHtml = artigo.bannerArtigo
            ? `<div class="lobby-banner-faixa">${criarHtmlMidia(artigo.bannerArtigo, `Banner de ${artigo.titulo}`, "lobby-banner-midia")}</div>`
            : "";

        card.innerHTML = `
            <div class="lobby-capa-box">
                ${midiaLobbyHtml}
            </div>
            ${bannerLobbyHtml}
            <h3>Artigo ${index + 1}</h3>
            <p>${artigo.titulo}</p>
        `;

        container.appendChild(card);
    });
}

function animarCardsArtigos() {
    const cards = document.querySelectorAll("#listaArtigos .card");
    cards.forEach((card) => {
        card.style.animation = "none";
        void card.offsetWidth;
        card.style.animation = "";
    });
}

function inicio() {
    voltar();
}

function pesquisar() {
    const termo = document.getElementById("pesquisa").value.toLowerCase().trim();
    const cards = document.querySelectorAll("#listaArtigos .card");

    cards.forEach((card) => {
        const textoCard = card.textContent.toLowerCase();
        card.hidden = termo !== "" && !textoCard.includes(termo);
    });
}

function abrirArtigo(nome) {
    const artigo = artigos[nome];
    if (!artigo) return;

    pararMusica();

    const mainEl = document.querySelector("main");
    if (mainEl) mainEl.classList.remove("lobby-ativo");

    document.getElementById("inicio").hidden = true;
    document.getElementById("categoria").hidden = true;
    document.getElementById("sobre").hidden = true;
    document.getElementById("paginaArtigo").hidden = false;

    const bannerHtml = artigo.bannerArtigo
        ? `<div class="artigo-banner">${criarHtmlMidia(artigo.bannerArtigo, `Banner de ${artigo.titulo}`, "artigo-banner-midia")}</div>`
        : "";

    document.getElementById("conteudoArtigo").innerHTML = `
        ${bannerHtml}
        <h1>${artigo.titulo}</h1>
        <div class="informacoes-artigo">
            ${artigo.texto}
        </div>
    `;

    definirEstadoLobby(false);

    window.scrollTo(0, 0);
}

function voltar() {
    pararMusica();

    const mainEl = document.querySelector("main");
    if (mainEl) mainEl.classList.add("lobby-ativo");

    document.getElementById("paginaArtigo").hidden = true;

    document.getElementById("inicio").hidden = false;
    document.getElementById("categoria").hidden = false;
    document.getElementById("sobre").hidden = false;

    animarCardsArtigos();
    window.scrollTo(0, 0);

    definirEstadoLobby(true);
}

function definirEstadoLobby(ativo) {
    const mainEl = document.querySelector("main");
    if (!mainEl) return;
    mainEl.classList.toggle("lobby-ativo", ativo);
}



definirEstadoLobby(true);
renderizarLobby();