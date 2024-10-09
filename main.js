function calculateTicketPrice(event) {
    // Impedisce il comportamento predefinito del form (refresh della pagina)
    event.preventDefault();

    // Recupera i valori dagli input
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    // Definisce il prezzo base per chilometro
    const pricePerKm = 0.21;
    let ticketPrice = km * pricePerKm;

    // Applica gli sconti in base all'età
    if (age < 18) {
        ticketPrice *= 0.8; // Sconto 20% per minorenni
    } else if (age >= 65) {
        ticketPrice *= 0.6; // Sconto 40% per over 65
    }
    document.getElementById('ticketPrice').textContent = `Il prezzo del biglietto è: ${ticketPrice.toFixed(2)} €`;
}

// Aggiunge l'evento 'submit' al form per eseguire il calcolo
document.getElementById('ticketForm').addEventListener('submit', calculateTicketPrice);
