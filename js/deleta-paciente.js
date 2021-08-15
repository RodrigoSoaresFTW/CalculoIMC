let btnDeleteConfirm = document.querySelector("#pacientes__delete-confirm");

let tbody = document.querySelector(".pacientes__tbody");

let btnDelete = document.querySelectorAll("#btnDelete");

let pacientes = document.querySelectorAll(".pacientes__exibir-corpo");


tbody.addEventListener("click", function(){
    
    //for(let i=0; i<pacientes.length; i++){}
    pacientes.forEach(function(paciente){
        paciente.addEventListener("click", function(){
            let elemento = paciente.firstElementChild;
            let clicado = elemento.parentElement;
    
            
            btnDeleteConfirm.addEventListener("click", function(){
                clicado.remove();
            });
            console.log(clicado);
            
        });
        
    });
    console.log();
    
})

