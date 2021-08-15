let importaPaciente = document.querySelector("#importaPaciente");
let idPaciente = 3;

importaPaciente.addEventListener("click", function(event){
    event.preventDefault();

    let conexao = new XMLHttpRequest();
    conexao.open("get", "https://api-pacientes.herokuapp.com/pacientes");
    conexao.send();
    conexao.addEventListener("load", function(){
        if(conexao.status == 200){
            let pacientes = JSON.parse(conexao.responseText);
            
            pacientes.forEach(function(paciente){
                let pacienteTR = document.createElement("tr");
                pacienteTR.classList.add("pacientes__exibir-corpo");
                pacienteTR.classList.add("text-center");
                pacienteTR.setAttribute("id", "paciente__"+idPaciente);
                
                let pacienteNomeTD = document.createElement("td");
                pacienteNomeTD.textContent = paciente.nome;
                pacienteNomeTD.classList.add("pacientes__exibir-item--nome");
                pacienteNomeTD.classList.add("border");
                pacienteNomeTD.classList.add("text-center");
                

                let pacientePesoTD = document.createElement("td");
                pacientePesoTD.textContent = paciente.peso;
                pacientePesoTD.classList.add("pacientes__exibir-item--peso");
                pacientePesoTD.classList.add("border");
                pacientePesoTD.classList.add("text-center");

                let pacienteAlturaTD = document.createElement("td");
                pacienteAlturaTD.textContent = paciente.altura;
                pacienteAlturaTD.classList.add("pacientes__exibir-item--altura");
                pacienteAlturaTD.classList.add("border");
                pacienteAlturaTD.classList.add("text-center");

                let pacienteGoduraTD = document.createElement("td");
                pacienteGoduraTD.textContent = paciente.gordura;
                pacienteGoduraTD.classList.add("pacientes__exibir-item--gordura");
                pacienteGoduraTD.classList.add("border");
                pacienteGoduraTD.classList.add("text-center");

                let pacienteImcTD = document.createElement("td");
                pacienteImcTD.textContent = CalculaIMC(paciente.peso, paciente.altura);
                pacienteImcTD.classList.add("pacientes__exibir-item--imc");
                pacienteImcTD.classList.add("border");
                pacienteImcTD.classList.add("text-center");

                let pacienteUpdate = document.createElement("a");
                pacienteUpdate.textContent = "Alterar";
                pacienteUpdate.setAttribute("href", "#");
                pacienteUpdate.classList.add("btn");
                pacienteUpdate.classList.add("btn-warning");
                pacienteUpdate.classList.add("ms-2");
                pacienteUpdate.setAttribute("id", "#btnUpdate");
                pacienteUpdate.setAttribute("data-bs-toggle", "modal");
                pacienteUpdate.setAttribute("data-bs-target", "#pacientes__update");

                let pacienteDelete = document.createElement("a");
                pacienteDelete.textContent = "Deletar";
                pacienteDelete.setAttribute("href", "#");
                pacienteDelete.classList.add("btn");
                pacienteDelete.classList.add("btn-danger");
                pacienteDelete.setAttribute("id", "#btnDelete");
                pacienteDelete.setAttribute("data-bs-toggle", "modal");
                pacienteDelete.setAttribute("data-bs-target", "#pacientes__delete");

                let pacienteOperacaoTD = document.createElement("td");
                pacienteOperacaoTD.classList.add("border");
                pacienteOperacaoTD.classList.add("text-center");
                pacienteOperacaoTD.classList.add("pacientes__exibir-item--operacoes");
                pacienteOperacaoTD.classList.add("pe-2");
                pacienteOperacaoTD.classList.add("justify-content-around");
                    
                pacienteOperacaoTD.appendChild(pacienteUpdate);
                pacienteOperacaoTD.appendChild(pacienteDelete);

                pacienteTR.appendChild(pacienteNomeTD);
                pacienteTR.appendChild(pacientePesoTD);
                pacienteTR.appendChild(pacienteAlturaTD);
                pacienteTR.appendChild(pacienteGoduraTD);
                pacienteTR.appendChild(pacienteImcTD);
                pacienteTR.appendChild(pacienteOperacaoTD);
                
                let pacienteTbody = document.querySelector(".pacientes__tbody");
                pacienteTbody.appendChild(pacienteTR);
                idPaciente++;
                
                tbody.addEventListener("load", function(){
                    console.log(tbody.children);
                });
            });

            
        }
        else{
            let erroAjax = document.querySelector(".paciente__import-erro");
            erroAjax.classList.remove("erro__import");
        }
        
    });

})