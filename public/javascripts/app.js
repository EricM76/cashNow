window.addEventListener("load", () => {

    const $ = (element) => {
        return document.querySelector(element);
    };

    const montoOrigen = $('#montoOrigen');
    const montoDestino = $('#montoDestino');
    const origen = $("#metodoOrigen");
    const destino = $("#metodoDestino");
    const msgError = $("#msgError");

    const getValor = (montoOrigen, origen, destino) => {
        if ($("#montoOrigen").value > 0 && origen != destino) {

            fetch('http://localhost:3000/apis/valor', {
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
                })
        }
    }

    const verifyMethod = (origen, destino) => {
        if (origen == destino) {
            msgError.innerHTML = "Elije otro sistema";
        } else {
            msgError.innerHTML = null;
        }
    }

    origen.addEventListener("change", () => {

        getValor(montoOrigen.value, origen.value, destino.value)

        verifyMethod(origen.value, destino.value)

    });

    destino.addEventListener("change", () => {

        getValor(montoOrigen.value, origen.value, destino.value)

        verifyMethod(origen.value, destino.value)

    });

    $("#montoOrigen").addEventListener("input", () => {

        getValor(montoOrigen.value, origen.value, destino.value)
        
    });
});
