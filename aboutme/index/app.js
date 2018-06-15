window.onload = function(){
    var btn = document.querySelector('#returnfn');
    btn.addEventListener('click',function(){
        window.history.go(-1)
    })
}