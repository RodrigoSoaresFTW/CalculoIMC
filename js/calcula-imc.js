calculaImcGeral();


function calculaImcGeral(){
    let pacientes = document.querySelectorAll(".pacientes__exibir-corpo");
    
    for(let i=0; i<pacientes.length; i++){
        let paciente = pacientes[i];
        
        let peso = paciente.querySelector(".pacientes__exibir-item--peso").textContent;
        
        let altura = paciente.querySelector(".pacientes__exibir-item--altura").textContent;

        let imc = paciente.querySelector(".pacientes__exibir-item--imc");
        imc.textContent = CalculaIMC(peso, altura);
    }
}

function CalculaIMC(peso, altura){
    let imcCalc = 0;
        imcCalc = peso / (altura * altura);
    let erroPeso = document.querySelector("#pacientes__adicionar-erro--peso");
    erroPeso.classList.add("pacientes__adicionar-erro--peso");

    let erroAltura = document.querySelector("#pacientes__adicionar-erro--altura");
    erroAltura.classList.add("pacientes__adicionar-erro--altura");


        if(peso >0 && peso <= 500){
            if(altura >0 && altura <2.5){
                return imcCalc.toFixed(2);

            }
            else{
                erroAltura.classList.remove("pacientes__adicionar-erro--altura");
               
                return;
               //return imcCalc = "altura inválida";
            }
        }
        else{
            erroPeso.classList.remove("pacientes__adicionar-erro--peso");
            return;
        }


        
}