var button = document.getElementById('pix');

button.addEventListener('click', function(){
    var card = document.querySelector('.card');
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return button.textContent = 'Read less';
    }

    button.textContent = 'Read less';
});