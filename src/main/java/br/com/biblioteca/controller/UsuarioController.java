package br.com.biblioteca.controller;

import br.com.biblioteca.model.Usuario;
import br.com.biblioteca.service.UsuarioService;


import java.io.IOException;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/cadastro")
    public String mostrarFormularioCadastro(Model model) {
        model.addAttribute("usuario", new Usuario());
        return "usuario/cadastro";
    }

    @PostMapping("/cadastro")
    public String cadastrarUsuario(
        @ModelAttribute Usuario usuario,
        @RequestParam("confirmaSenha") String confirmaSenha,
        @RequestParam("documentoFoto") MultipartFile documentoFoto,
        @RequestParam("comprovanteEndereco") MultipartFile comprovanteEndereco,
        Model model) {

        if (!usuario.getSenha().equals(confirmaSenha)) {
            model.addAttribute("mensagem", "As senhas devem ser iguais!");
            return "usuario/cadastro";
        }

        try {
            usuario.setDocumentoFotoBase64(toBase64(documentoFoto));
            usuario.setComprovanteEnderecoBase64(toBase64(comprovanteEndereco));

            usuarioService.salvarUsuario(usuario);

            model.addAttribute("mensagem", "Usuário cadastrado com sucesso!");
        } catch (Exception e) {
            e.printStackTrace(); 
            model.addAttribute("mensagem", "Erro ao cadastrar usuário: " + e.getMessage());
        }

        return "usuario/confirmacao-cadastro";
    }

    
    private String toBase64(MultipartFile file) throws IOException {
        return Base64.getEncoder().encodeToString(file.getBytes());
    }
}
