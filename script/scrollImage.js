var left = 0;
function animate() {
    requestAnimationFrame( animate );
    document.getElementById("scrollImage").style.backgroundPosition = left-- + 'px' +' 0' ;
}
animate();