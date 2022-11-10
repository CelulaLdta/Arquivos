let boleto = document.getElementsByClassName('boleto');
let cartao = document.getElementsByClassName('cartao');
let pix = document.getElementsByClassName('pix');

function showPix() {
    pix.classList.toggle('ativo');

    if(boleto.classList.contains('ativo') || cartao.classList.contains('ativo')) {
        boleto.classList.remove('ativo');
        cartao.classList.remove('ativo');
    }

    console.log('clicou pix')
    }

    cartao.addEventListener('click', () => {
        pix.classList.toggle('ativo')
    })

    boleto.addEventListener('click', () => {
        pix.classList.toggle('ativo')
    })


