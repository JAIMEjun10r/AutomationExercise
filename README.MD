# E-commerce Test Automation

Este projeto é uma automação de testes para um e-commerce de teste, utilizando Playwright com TypeScript. Ele foi desenvolvido para garantir que as funcionalidades principais do site estejam funcionando corretamente.

## Funcionalidades

O projeto inclui testes para as seguintes funcionalidades:

- **Login de Usuário**
  - Login com credenciais corretas.
  - Login com credenciais incorretas.
  - Login com email correto e senha errada.
  - Validação de campos obrigatórios no login.
  - Logout do usuário.

- **Gerenciamento de Produtos**
  - Visualização de detalhes do produto.
  - Pesquisa de produtos.
  - Adição de produtos ao carrinho.

- **Registro de Usuário**
  - Validação de registro de usuário com email existente.
  - Formulário de contato para suporte.

## Requisitos

- Node.js
- TypeScript
- Playwright
- dotenv

## Configuração

1. Clone o repositório:

   ```bash
        git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
        cd seu-repositorio
   ```

3. Instale as dependências:

   ```bash
        npm install     
   ```

4. Configure as variáveis de ambiente:
   ```bash  
        CORRECT_EMAIL=seu_email@exemplo.com
        CORRECT_PASSWORD=sua_senha
        CORRECT_USER=usuario_existente       
   ```

5. Execute os testes:
   ```bash
        npx playwright test
   ```

Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.