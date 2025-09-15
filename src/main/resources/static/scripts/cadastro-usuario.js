function enableDropzone(dropzoneId, inputId, spanId) {
    const dropzone = document.getElementById(dropzoneId);
    const input = document.getElementById(inputId);
    const span = document.getElementById(spanId);

    dropzone.addEventListener('click', () => input.click());

    dropzone.addEventListener('dragover', function(e) {
        e.preventDefault();
        dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', function(e) {
        dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', function(e) {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            input.files = e.dataTransfer.files;
            span.textContent = e.dataTransfer.files[0].name;
        }
    });

    input.addEventListener('change', function() {
        if(this.files.length > 0) {
            span.textContent = this.files[0].name;
        } else {
            span.textContent = 'Arraste e solte o arquivo aqui ou clique para selecionar';
        }
    });
}

enableDropzone('dropzone-documento', 'documento', 'span-documento');
enableDropzone('dropzone-comprovante', 'comprovante', 'span-comprovante');
