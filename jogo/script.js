document.addEventListener("DOMContentLoaded", () => {
    const reel1 = document.getElementById("reel1");
    const reel2 = document.getElementById("reel2");
    const reel3 = document.getElementById("reel3");
    const spinButton = document.getElementById("spin");
    const scoreDisplay = document.getElementById("score");
    let score = 0;

    // Array de símbolos do tigre
    const tigerSymbols = ["🐯", "🐅", "🐆"];

    // Função para girar um único carretel
    function spinReel(reel) {
        const randomIndex = Math.floor(Math.random() * tigerSymbols.length);
        reel.textContent = tigerSymbols[randomIndex];
    }

    // Função para girar todos os carreteis
    function spinAllReels() {
        spinReel(reel1);
        spinReel(reel2);
        spinReel(reel3);
        checkWin();
    }

    // Função para verificar se o jogador ganhou
    function checkWin() {
        if (reel1.textContent === reel2.textContent && reel2.textContent === reel3.textContent) {
            score += 100; // Aumenta a pontuação se todos os símbolos forem iguais
            scoreDisplay.textContent = score;
            alert("Parabéns! Você ganhou 100 pontos!");
        }
    }

    // Evento de clique do botão Girar
    spinButton.addEventListener("click", () => {
        spinAllReels();
    });
});
