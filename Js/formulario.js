const validarFormulario = ()=> {
    let name = document.getElementById("nombre");
    let password = document.getElementById("password");
    let nameERROR = document.getElementById("nombreERROR");
    let passwordERROR = document.getElementById("passwordERROR");
    let span = document.getElementById("span");
    let count;
    if (name.value == "") {
        let msj = "Ingrese un valor para el campo de Nombre";
        nameERROR.classList.add("text-danger");
        nameERROR.textContent = msj;
        return false;
    }else {
        names = name.value;
        for (let i = 0; i < names.length; i++) {
            if (names[i] == "@"){
                count = i;
                for (let j = i; j < names.length; j++) {
                    if (names[j] == ".") {
                        let msj = "Seleccionó Email";
                        nameERROR.classList.add("text-info");
                        nameERROR.textContent = msj;
                    };
                };
            };
        };
        if (count == null) {
            let msj = "Seleccionó Nombre de Usuario";
            nameERROR.classList.add("text-info");
            nameERROR.textContent = msj;
        };
    };

    if (password.value == "") {
        let mjs = "Ingrese un valor para el campo de Contraseña";
        passwordERROR.classList.add("text-danger");
        passwordERROR.textContent = mjs;
        return false;
    }else {
        passwordERROR.innerHTML = "";	
    };

    if (password.value.length >= 8) {
        nameCapitalize1 = name.value.charAt(0).toUpperCase();
        for (let i = 0; i < names.length; i++) {
            if (names[i] == "@") {}}
        nameCapitalize2 = name.value.slice(1, count);
        nameCapitalize = nameCapitalize1 + nameCapitalize2;
        mjs = `Hola ${nameCapitalize}! seamos cientificos de datos 😎`;
        span.textContent = mjs;
        return false;
    }else {
        let mjs = "Ingrese un valor con mas de 8 carácteres para el campo de Contraseña";
        passwordERROR.classList.add("text-danger");
        passwordERROR.textContent = mjs;
    }
};

document.getElementById('btn-formulario').addEventListener("click", validarFormulario);