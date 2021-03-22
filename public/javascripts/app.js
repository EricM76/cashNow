const $ = (element) => {
    return document.querySelector(element);
};

const selectOrigen = document.querySelector('#selectOrigen');
const opcionesOrigen = document.querySelector('#opcionesOrigen');
const contenidoSelectOrigen = document.querySelector('#selectOrigen .contenido-select');
const origen = $("#metodoOrigen");

const selectDestino = document.querySelector('#selectDestino');
const opcionesDestino = document.querySelector('#opcionesDestino');
const contenidoSelectDestino = document.querySelector('#selectDestino .contenido-select');
const destino = $("#metodoDestino");


const montoOrigen = $('#montoOrigen');
const montoDestino = $('#montoDestino');
const msgError = $("#msgError");

document.querySelectorAll('#opcionesOrigen > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelectOrigen.innerHTML = e.currentTarget.innerHTML;
		selectOrigen.classList.toggle('active');
		opcionesOrigen.classList.toggle('active');
		origen.value = e.currentTarget.querySelector('.titulo').getAttribute('data-id');

        getValor(montoOrigen.value, origen.value, destino.value)
	});
});

selectOrigen.addEventListener('click', () => {
	selectOrigen.classList.toggle('active');
	opcionesOrigen.classList.toggle('active');
});

document.querySelectorAll('#opcionesDestino > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelectDestino.innerHTML = e.currentTarget.innerHTML;
		selectDestino.classList.toggle('active');
		opcionesDestino.classList.toggle('active');
		destino.value = e.currentTarget.querySelector('.titulo').getAttribute('data-id');
    
        getValor(montoOrigen.value, origen.value, destino.value)
	});
});

selectDestino.addEventListener('click', () => {
	selectDestino.classList.toggle('active');
	opcionesDestino.classList.toggle('active');
});


const getValor = (montoOrigen, origen, destino) => {
    if ($("#montoOrigen").value > 0 && origen != destino) {

        fetch('http://localhost:3000/apis/valorOrigen', {
            method: 'POST',
            body: JSON.stringify({
                montoOrigen,
                origen,
                destino
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then(response => response.json())
            .then(result => {
                montoDestino.value = result.montoDestino
                console.log(result.percepcion)
            })
    }
}

const getValorSalida = (montoDestino, origen, destino) => {

    if ($('#montoDestino').value > 0 && origen != destino) {
        fetch('http://localhost:3000/apis/valorDestino', {
            method: 'POST',
            body: JSON.stringify({
                montoDestino,
                origen,
                destino
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result.montoOrigen)
                montoOrigen.value = result.montoOrigen
            })
    }    
}

const verifyMethod = (origen, destino) => {
  
    if (origen == destino) {
        alert('Error!!!')
        msgError.innerHTML = "Elije otro sistema";
    } else {
        msgError.innerHTML = null;
    }
}


$("#montoOrigen").addEventListener("input", () => {

    getValor(montoOrigen.value, origen.value, destino.value)
    
});

$('#montoDestino').addEventListener('input', () => {
    getValorSalida(montoDestino.value, origen.value, destino.value)
})

