package br.com.biblioteca.model;

import static br.com.biblioteca.enums.StatusUsuario.PENDENTE;
import static java.time.LocalDateTime.now;

import java.time.LocalDateTime;

import br.com.biblioteca.enums.StatusUsuario;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

@Entity
@Data
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome deve ser preenchido")
    @Size(max = 50, message = "O nome deve ter no máximo 50 caracteres")
    @Pattern(regexp = "^[\\p{L} ]+$", message = "O nome deve conter apenas letras")
    private String nome;

    @NotBlank(message = "O e-mail deve ser preenchido")
    @Column(unique = true)
    @Size(max = 60, message = "O e-mail deve ter no máximo 60 caracteres")
    @Pattern(
        regexp = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$",
        message = "E-mail inválido"
    )
    private String email;

    @NotBlank(message = "A senha deve ser preenchida")
    @Size(min = 8, message = "A senha deve ter no mínimo 8 caracteres")
    @Pattern(
        regexp = "^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+=\\-{}\\[\\]:;\"'<>,.?/\\\\|]).{8,}$",
        message = "A senha deve conter pelo menos uma letra maiúscula, um número e um símbolo"
    )
    private String senha;

    @NotBlank(message = "Documento com foto é obrigatório")
    @Column(columnDefinition = "TEXT")
    private String documentoFotoBase64;

    @NotBlank(message = "Comprovante de endereço é obrigatório")
    @Column(columnDefinition = "TEXT")
    private String comprovanteEnderecoBase64;
    
    @Column(name = "data_cadastro")
    private LocalDateTime dataCadastro = now();
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusUsuario status = PENDENTE;
}
