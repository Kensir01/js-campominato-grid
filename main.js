document.getElementById('bottone').addEventListener('click', play);


function play() {
    
    const NUMERO_BOMBE = 16;

    console.log('Avvio del gioco');

    const gioco = document.getElementById('grid');

    gioco.innerHTML = "";

    const difficolta = document.getElementById('difficolta').value;

    let numeroCelle;
    let cellePerRiga;
    const tentativi = [];

    switch (difficolta) {
        case "facile":
        default:
            numeroCelle = 100;
            break;
        case "normale":
            numeroCelle = 81;
            break;
        case "difficile":
            numeroCelle = 49;
            break;
    }

    generaCampoGioco(numeroCelle);


    const bombe = generaBombe(NUMERO_BOMBE, numeroCelle);
    console.log(bombe);
    
    function generaCampoGioco(numeroCelle) {

        cellePerRiga = Math.sqrt(numeroCelle);
    
        for (let i = 1; i <= numeroCelle; i++) {
    
            const nodo = document.createElement('div');
            nodo.classList.add('square');
    
            const dimensione = `calc(100% / ${cellePerRiga})`;
            nodo.style.width = dimensione;
            nodo.style.height = dimensione;
    
            nodo.innerText = i;
    
            nodo.addEventListener('click', handleCellClick);
            gioco.appendChild(nodo);

        }
    
        return true;

    }

    function handleCellClick() {
        this.classList.add('clicked');
        this.removeEventListener('click', handleCellClick);

        const cell = parseInt(this.innerText);

        if (bombe.includes(cell)) {
           terminaGioco();
        } else {
            tentativi.push(cell);
        }

        console.log('Al momento hai cliccato su:' + tentativi);

    }

    function terminaGioco() {
        const quadrati = document.getElementsByClassName('square');

        for (let i = 0; i < quadrati.length; i++){

            if (bombe.includes(parseInt(quadrati[i].innerText)))
                quadrati[i].classList.add('bomb');
        }
    }

    function generaBombe(numeroBombe, numeroCelle) {
        const bombeGenerate = [];
        while (bombeGenerate.length < numeroBombe) {
            const bomba = getRandomNumber(1, numeroCelle);
             if (!bombeGenerate.includes(bomba)) {
                bombeGenerate.push(bomba);
            }
        }    
        return bombeGenerate;
    } 
    
    

}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}












// const play = document.getElementById('bottone')


// bottone.addEventListener('click',
//     function() {
//         for (let i = 1; i<=64; i++) {

//             const node = document.createElement('div');
//             node.classList.add('square');
        
//             node.addEventListener('click', function(){
//                 console.log(this);
//                 this.classList.add('clicked');
//             })
        
//             gridElement.appendChild(node);
        
//         }
//     }
// );