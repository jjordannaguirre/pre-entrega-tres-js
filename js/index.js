const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', () => {
    Swal.fire({
        icon: 'info',
        title: 'Hasta pronto!',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        localStorage.removeItem('login_success')
        window.location.href = 'login.html'
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loan-form');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtener los valores del formulario
        const amount = parseFloat(document.getElementById('amount').value);
        const rate = parseFloat(document.getElementById('rate').value);
        const months = parseInt(document.getElementById('months').value);
        
        if (validarValores(amount, rate, months)) {
            const interesMensual = rate / 12 / 100;
            const pagoMensual = (amount * interesMensual) / (1 - Math.pow(1 + interesMensual, -months));
            const montoTotal = pagoMensual * months;
            const totalIntereses = montoTotal - amount;

            const resultado = `
                <h3>Resultados</h3>
                <p><strong>Monto del Préstamo:</strong> $${amount.toFixed(2)}</p>
                <p><strong>Tasa de Interés Anual:</strong> ${rate.toFixed(2)}%</p>
                <p><strong>Plazo del Préstamo:</strong> ${months} meses</p>
                <p><strong>Pago Mensual:</strong> $${pagoMensual.toFixed(2)}</p>
                <p><strong>Total de Intereses:</strong> $${totalIntereses.toFixed(2)}</p>
                <p><strong>Monto Total a Pagar:</strong> $${montoTotal.toFixed(2)}</p>
            `;
            resultsDiv.innerHTML = resultado;
        } else {
            resultsDiv.innerHTML = '<p>Por favor, ingrese valores válidos y positivos.</p>';
        }
    });

    function validarValores(monto, interes, meses) {
        return monto > 0 && interes > 0 && meses > 0;
    }
});
