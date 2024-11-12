# API de Catálogo de Produtos

## Descrição

Este projeto é uma API desenvolvida em Node.js para gerenciar um catálogo de produtos, com funcionalidades de CRUD (Criação, Leitura, Atualização e Exclusão) para produtos e catálogos. A aplicação inclui autenticação JWT para proteção de rotas e usa MongoDB como banco de dados.

## Tecnologias Utilizadas

- **Node.js**: Utilizado para construir a API.
- **MongoDB**: Banco de dados NoSQL para armazenar informações de produtos, catálogos e usuários.
- **Mongoose**: ODM (Object Data Modeling) para conectar e estruturar os dados no MongoDB.
- **JWT (JSON Web Token)**: Autenticação baseada em tokens para proteger rotas.
- **bcrypt**: Criptografia de senhas dos usuários.
- **Express**: Framework para a construção das rotas e middlewares.
  
## Funcionalidades Principais

1. **API de Produtos**:
   - CRUD completo para produtos, com informações como nome, descrição, preço, quantidade em estoque e data de criação.
2. **API de Catálogos**:
   - CRUD completo para catálogos, associando produtos e usuários.
3. **Autenticação**:
   - Autenticação JWT para proteger rotas de criação, atualização e exclusão.
   - Registro e login de usuários com criptografia de senha usando bcrypt.
4. **Documentação da API**:
   - Detalhes dos endpoints, parâmetros, métodos HTTP, e respostas.

## Estrutura do Projeto

- `src/`
  - `config/`: Configurações do banco de dados e variáveis de ambiente.
  - `controllers/`: Contém a lógica para os endpoints de produtos, catálogos e autenticação de usuários.
  - `middlewares/`: Contém o middleware de autenticação JWT.
  - `models/`: Esquemas MongoDB para produtos, catálogos e usuários.
  - `routes/`: Definições de rotas da API.

## Configuração

1. Clone este repositório.

2. Instale as dependências:
   ```bash
   npm install

3. Configure as variáveis de ambiente:
   - Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
      PORT=
      MONGO_URI=
      JWT_SECRET=

4. Para iniciar o servidor:
   ```bash
   npm start

5. Acesse a API na URL: http://localhost:3000 -> Isso um exemplo com a porta sendo 3000
