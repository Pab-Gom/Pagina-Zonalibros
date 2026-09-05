const botonLogin = document.getElementById("boton-login");
const login = document.getElementById("inicio-datos");

botonLogin.addEventListener("click",function(){
    login.classList.toggle("d-none");

    if(login.classList.contains("d-none")){
        botonLogin.textContent="Login";
    } else{
        botonLogin.textContent="Volver";
    }

})