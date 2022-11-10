/*function esconde(el) {
    document.getElementById(el).style.display = 'none';
}
function mostra(el) {
    document.getElementById(el).style.display = 'block';
} 
function toggle(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none"){
        document.getElementById(el).style.display = 'block';        
    }                    
    else{
        document.getElementById(el).style.display = 'none';
    }
} */

    
    var button = document.getElementById("pix");


    button.addEventListener("click", function(){
        var btnpix = document.querySelector('.iwXaTu'); 
        btnpix.classList.toggle('active');

    if(card.classList.contains('active')){
        return button.textContent = 'Read less';
    }

    button.textContent = 'Read less';
});
    
   



