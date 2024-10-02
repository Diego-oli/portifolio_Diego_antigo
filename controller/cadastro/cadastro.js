
        // Validação básica de CPF (apenas formatação correta, não autenticidade)
        function validarCPF(cpf) {
            cpf = cpf.replace(/[^\d]+/g,''); // Remove caracteres não numéricos
            if (cpf.length !== 11) {
                return false;
            }
            return true; // Validação simples, sem verificação de dígitos
        }

        // Validação básica de telefone
        function validarTelefone(telefone) {
            const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
            return regexTelefone.test(telefone);
        }

        // Função de submissão do formulário
        function validarFormulario(event) {
            event.preventDefault(); // Evita o envio do formulário diretamente

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const dataNascimento = document.getElementById('data_nascimento').value;
            const genero = document.getElementById('genero').value;
            const telefone = document.getElementById('telefone').value;
            const cpf = document.getElementById('cpf').value;
            const endereco = document.getElementById('endereco').value;

            if (!validarCPF(cpf)) {
                alert('CPF inválido. Insira um CPF no formato 000.000.000-00.');
                return;
            }

            if (!validarTelefone(telefone)) {
                alert('Telefone inválido. Insira no formato (00) 00000-0000.');
                return;
            }

            // Exibir uma confirmação antes de enviar
            const confirmar = confirm(`
                Confirme seus dados:
                Nome: ${nome}
                Email: ${email}
                Senha: *****
                Data de Nascimento: ${dataNascimento}
                Gênero: ${genero}
                Telefone: ${telefone}
                CPF: ${cpf}
                Endereço: ${endereco}
            `);

            if (confirmar) {
                alert("Cadastro realizado com sucesso!");
                // Aqui você pode enviar o formulário (ou fazer uma requisição AJAX)
                // Por enquanto, apenas resetaremos o formulário
                document.querySelector('form').reset();
            }
        }

        // Adiciona o evento de submissão ao carregar a página
        window.onload = function() {
            const form = document.querySelector('form');
            form.addEventListener('submit', validarFormulario);
        };