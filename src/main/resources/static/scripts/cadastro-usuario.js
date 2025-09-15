function showError(id, message) {
    const div = document.getElementById('erro-' + id);
    div.innerText = message;
    div.style.display = message ? 'block' : 'none';
}
function clearError(id) {
    showError(id, '');
}

function validarNome() {
    const v = nome.value;
    if (!v) { showError('nome', 'O nome deve ser preenchido'); return false; }
    if (!/^[A-Za-zÀ-ú\s]+$/.test(v)) { showError('nome', 'O nome deve conter apenas letras'); return false; }
    clearError('nome'); return true;
}
function validarEmail() {
    const v = email.value;
    if (!v) { showError('email', 'O e-mail deve ser preenchido'); return false; }
    if (!/^[A-Za-z0-9\.\-_]+@[A-Za-z0-9\-_]+\.[A-Za-z\.]+$/.test(v)) { showError('email', 'E-mail inválido'); return false; }
    clearError('email'); return true;
}
function validarSenha() {
    const v = senha.value;
    if (!v) { showError('senha', 'A senha deve ser preenchida'); return false; }
    if (v.length < 8) { showError('senha', 'A senha deve ter no mínimo 8 caracteres'); return false; }
    if (!/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}/.test(v)) {
        showError('senha', 'A senha deve conter pelo menos uma letra maiúscula, um número e um símbolo'); return false;
    }
    clearError('senha'); return true;
}
function validarConfirmaSenha() {
    if (confirmaSenha.value !== senha.value) {
        showError('confirmaSenha', 'As senhas devem ser iguais'); return false;
    }
    clearError('confirmaSenha'); return true;
}
function validarDocumento() {
    if (!documento.files[0]) { showError('documento', 'Documento com foto é obrigatório'); return false; }
    clearError('documento'); return true;
}
function validarComprovante() {
    if (!comprovante.files[0]) { showError('comprovante', 'Comprovante de endereço é obrigatório'); return false; }
    clearError('comprovante'); return true;
}

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirmaSenha');
const documento = document.getElementById('documento');
const comprovante = document.getElementById('comprovante');

nome.addEventListener('blur', validarNome);
email.addEventListener('blur', validarEmail);
senha.addEventListener('blur', validarSenha);
confirmaSenha.addEventListener('blur', validarConfirmaSenha);
documento.addEventListener('change', validarDocumento);
comprovante.addEventListener('change', validarComprovante);

document.getElementById('formCadastro').addEventListener('submit', function(e) {
    let ok = true;
    if (!validarNome()) ok = false;
    if (!validarEmail()) ok = false;
    if (!validarSenha()) ok = false;
    if (!validarConfirmaSenha()) ok = false;
    if (!validarDocumento()) ok = false;
    if (!validarComprovante()) ok = false;
    if (!ok) e.preventDefault();
});

function setupDropzone(dropzoneId, inputId, spanId) {
    const dropzone = document.getElementById(dropzoneId);
    const input = document.getElementById(inputId);
    const span = document.getElementById(spanId);

    dropzone.addEventListener("click", () => input.click());

    dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", (e) => {
        e.preventDefault();
        dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropzone.classList.remove("dragover");
        input.files = e.dataTransfer.files;
        span.textContent = input.files[0] ? input.files[0].name : span.dataset.default;
        validarCampos();
    });

    input.addEventListener("change", () => {
        span.textContent = input.files[0] ? input.files[0].name : span.dataset.default;
        validarCampos();
    });
}

setupDropzone("dropzone-documento", "documento", "span-documento");
setupDropzone("dropzone-comprovante", "comprovante", "span-comprovante");
