let busca = document.querySelector("#pacientes__busca-formulario");
busca.addEventListener("input", function(){
    console.log(busca.value);
    let pacienteTR = document.querySelectorAll(".pacientes__exibir-corpo");

    if(busca.value.length > 0){
        for(let i =0; i<pacienteTR.length; i++){
            let paciente = pacienteTR[i];
            let pacienteNome = paciente.querySelector(".pacientes__exibir-item--nome").textContent;
            let regex = new RegExp(busca.value, "i");
            if(regex.test(pacienteNome)){
                paciente.classList.remove("paciente__exibir-filtro");
            }
            else{
                paciente.classList.add("paciente__exibir-filtro");
            }
        }
    }
    else{
        for(let i =0; i<pacienteTR.length; i++){
            let paciente = pacienteTR[i];
            paciente.classList.remove("paciente__exibir-filtro");
        }
    }
});

