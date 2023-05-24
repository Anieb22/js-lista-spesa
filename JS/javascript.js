let lista_spesa = ['uova', 'zucchero', 'sale', 'olio', 'pepe', 'pollo', 'pane', 'cereali'];
let spesa = 0;

const lista = document.getElementById('lista-spesa')


while(spesa < lista_spesa.length){
    let lista_prodotti = document.createElement("li")
    lista_prodotti.textContent = lista_spesa[spesa];
    lista.appendChild(lista_prodotti);
    spesa++
    console.log(spesa)
}