const $ = (element) => {
    return document.querySelector(element)
}     
$('#metodoDestino').addEventListener('change',()=>{
    if($('#montoOrigen').value > 0 && $('#metodoOrigen').value !== $('#metodoDestino').value){
        $('form').submit()
    }
})

$('#montoOrigen').addEventListener('change',()=>{
    if($('#metodoOrigen').value !== $('#metodoDestino').value){
        $('form').submit()
    }
})