addEventListener('DOMContentLoaded', ()=>{
    const contadores=document.querySelectorAll('.contador_cantidad');
    const velocidad=1000;

    const animarContadores=()=>{
        for (const contador of contadores) {
            const actualizar_contador=()=>{
                let cantidad_maxima=+contador.dataset.cantidadTotal,
                    valor_actual=+contador.innerText,
                    incremento=cantidad_maxima/velocidad;

                
                if(valor_actual < cantidad_maxima){
                    contador.innerText= Math.ceil( valor_actual + incremento)
                    setTimeout(actualizar_contador, 5)
                    console.log(contador.innerText)
                }else{
                    contador.innerText=cantidad_maxima

                }

            }
            actualizar_contador()
        }
        
    }

    const mostrarContadores= elementos=>{
        elementos.forEach(elemento => {
            if (elemento.isIntersecting){
                elemento.target.classList.add('animar');
                elemento.target.classList.remove('ocultar');
                setTimeout(animarContadores, 300)
            }
        });

    }

    //Api para saber cuando algo es visible en el viewport (IntersectionObserver)

    const observer= new IntersectionObserver(mostrarContadores, {
        threshold:0.25 //0 - 1
    })

    const elementosHTML= document.querySelectorAll('.contador_cantidad')
    elementosHTML.forEach(elementoHTML=>{
        observer.observe(elementoHTML)
    })


})













// addEventListener('DOMContentLoaded', ()=>{
//     const contadores= document.querySelectorAll('.hero__number');
//     const velocidad= 100000000;

//     const animarContadores=()=>{
//         console.log('animar contadores', contadores.length)
//         for (const contador of contadores) {

//             const actualizar_contador= ()=>{
//                 console.log('actualizando contador')
//                 let cantidad_maxima= +contador.dataset.cantidad,
//                     valor_actual= +contador.innerText,
//                     incremento= cantidad_maxima/velocidad

//                 if(valor_actual < cantidad_maxima) {
//                     contador.innerText= Math.ceil(valor_actual + incremento)
//                     setTimeout(actualizar_contador,5);

//                 }else{
//                     contador.innerText=cantidad_maxima;
//                 }

//             }
//             actualizar_contador()

//         }
//     }
//     const mostrarContadores=elementos=>{
//         elementos.forEach(elemento => {
//             if(elemento.isIntersecting){
//                 elemento.target.classList.add('animar');
//                 elemento.target.classList.remove('ocultar');
//                 setTimeout(animarContadores, 300)

//             }
            
//         });
//     }
//     const observer= new IntersectionObserver(mostrarContadores, {
//         threshold:0.05
//     })

//     const elementosHTML=document.querySelectorAll('.hero__number');
//     elementosHTML.forEach(elementoHTML=>{
//         observer.observe(elementoHTML)
//     })
// })
