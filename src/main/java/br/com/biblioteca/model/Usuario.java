package br.com.biblioteca.model;

import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(unique = true)
    private String email;

    private String senha;

    @Lob
    private String documentoFotoBase64;

    @Lob
    private String comprovanteEnderecoBase64;

    private LocalDateTime dataCadastro = LocalDateTime.now();
}
