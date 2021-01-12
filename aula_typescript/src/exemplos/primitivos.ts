export function exemploTipos() {
    const numero: number = 5;
    const nome: string = 'Stefan';
    const ehHumano: boolean = false;

    console.log('O número é ' + numero.toString());
    console.log('O nome é ' + nome);
    console.log('Ele é humano? ' + ehHumano);
}

export function exemploIfLoop() {
    let contador: number = 0

    while (contador <= 5) {
        let nome: string = 'Stefan'
        if (contador === 2 || nome === 'Stefan') {
            console.log("Chegou ao dois")
        } else {
            console.log("Não chegou")
        }
        console.log('Contador ' + contador);
        contador++
    }
}