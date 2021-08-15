let btnAdicionaPaciente = document.querySelector("#adicionaPaciente");

btnAdicionaPaciente.addEventListener("click", function(event){
    event.preventDefault();
    adicionaPaciente();
});



function adicionaPaciente(){
    let form = document.querySelector(".pacientes__adicionar-form");    
    let pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("pacientes__exibir-corpo");
    pacienteTR.classList.add("text-center");
    pacienteTR.setAttribute("id", "paciente__"+idPaciente);
    

    let pacienteNome = form.inputNome.value;
    let PacienteNomeTD = document.createElement("td");
    PacienteNomeTD.textContent = pacienteNome;
    PacienteNomeTD.classList.add("pacientes__exibir-item--nome");
    PacienteNomeTD.classList.add("border");
    pacienteTR.appendChild(PacienteNomeTD)

    
    let pacientePeso = form.inputPeso.value;
    let PacientePesoTD = document.createElement("td");
    PacientePesoTD.textContent = pacientePeso;
    PacientePesoTD.classList.add("pacientes__exibir-item--Peso");
    PacientePesoTD.classList.add("border");
    pacienteTR.appendChild(PacientePesoTD)
    
    let pacienteAltura = form.inputAltura.value;
    let PacienteAlturaTD = document.createElement("td");
    PacienteAlturaTD.textContent = pacienteAltura;
    PacienteAlturaTD.classList.add("pacientes__exibir-item--altura");
    PacienteAlturaTD.classList.add("border");
    pacienteTR.appendChild(PacienteAlturaTD)
    
    let pacienteGordura = form.inputGordura.value;
    let PacienteGorduraTD = document.createElement("td");
    PacienteGorduraTD.textContent = pacienteGordura;
    PacienteGorduraTD.classList.add("pacientes__exibir-item--gordura");
    PacienteGorduraTD.classList.add("border");
    pacienteTR.appendChild(PacienteGorduraTD)

    if(CalculaIMC(pacientePeso, pacienteAltura) > 0){
        let pacienteImc = CalculaIMC(pacientePeso, pacienteAltura);
        let pacienteImcTD = document.createElement("td");
        pacienteImcTD.textContent = pacienteImc;
        pacienteImcTD.classList.add("pacientes__exibir-item--imc");
        pacienteImcTD.classList.add("border");
        pacienteTR.appendChild(pacienteImcTD);
    }
    
    

    
    let operacao = document.createElement("td");
    operacao.classList.add("pacientes__exibir-item--operacoes");
    operacao.classList.add("border");
    operacao.classList.add("pe-2");
    operacao.classList.add("d-flex");
    operacao.classList.add("justify-content-around");

    let btnUpdate = document.createElement("a");
    btnUpdate.textContent = "Alterar";
    btnUpdate.classList.add("btn");
    btnUpdate.classList.add("btn-warning");
    btnUpdate.classList.add("ms-2");

    let btnDelete = document.createElement("a");
    btnDelete.textContent = "Deletar";
    btnDelete.classList.add("btn");
    btnDelete.classList.add("btn-danger");

    pacienteTR.appendChild(operacao);
    operacao.appendChild(btnUpdate);
    operacao.appendChild(btnDelete);

    form.reset();

    let tBody = document.querySelector(".pacientes__tbody");
    
    
    if(CalculaIMC(pacientePeso, pacienteAltura) > 0){
        tBody.appendChild(pacienteTR);
    }
    

}