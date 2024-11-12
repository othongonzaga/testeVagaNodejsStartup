# Documentação da API para Gerenciamento de Catálogo de Produtos

## Endpoints Disponíveis

---

### 1. Autenticação de Usuários

#### 1.1 Registro de Usuário

- **Método HTTP**: `POST`
- **Endpoint**: `/api/auth/register`
- **Descrição**: Registra um novo usuário no sistema.

- **Parâmetros**:

  - `username` (string, obrigatório): Nome de usuário para o login.
  - `password` (string, obrigatório): Senha para o login.

- **Exemplo de Requisição**:

  ```json
  {
    "username": "exemploUser",
    "password": "senha123"
  }
  ```

- **Resposta**:
  - **201**: `{"message": "Usuário registrado com sucesso"}`
  - **400**: `{"error": "Username and password are required"}`
  - **500**: `{"error": "Erro ao registrar usuário"}`

---

#### 1.2 Login de Usuário

- **Método HTTP**: `POST`
- **Endpoint**: `/api/auth/login`
- **Descrição**: Autentica um usuário e gera um token JWT.

- **Parâmetros**:

  - `username` (string, obrigatório): Nome de usuário para o login.
  - `password` (string, obrigatório): Senha para o login.

- **Exemplo de Requisição**:

  ```json
  {
    "username": "exemploUser",
    "password": "senha123"
  }
  ```

- **Resposta**:
  - **200**: `{"token": "<jwt_token>"}`
  - **400**: `{"error": "Username and password are required"}`
  - **401**: `{"error": "Usuário ou senha incorretos"}`
  - **500**: `{"error": "Erro no servidor. Tente novamente mais tarde."}`

---

### 2. Produtos

#### 2.1 Criar Produto

- **Método HTTP**: `POST`
- **Endpoint**: `/api/products`
- **Descrição**: Cria um novo produto no sistema.

- **Cabeçalho de Autorização**: `Bearer <token>`

- **Parâmetros no Corpo da Requisição**:

  - `name` (string, obrigatório): Nome do produto.
  - `description` (string, opcional): Descrição do produto.
  - `price` (number, obrigatório): Preço do produto.
  - `stock` (number, obrigatório): Quantidade em estoque.

- **Exemplo de Requisição**:

  ```json
  {
    "name": "Produto Exemplo",
    "description": "Descrição do produto",
    "price": 100.5,
    "stock": 20
  }
  ```

- **Resposta**:
  - **201**: `{"_id": "id_do_produto", "name": "Produto", ... }`
  - **500**: `{"error": "Erro ao criar produto"}`

---

#### 2.2 Listar Todos os Produtos

- **Método HTTP**: `GET`
- **Endpoint**: `/api/products`
- **Descrição**: Lista todos os produtos (Rota pública).

- **Resposta**:
  - **200**: `[{"_id": "id_do_produto", "name": "Produto", ... }]`
  - **500**: `{"error": "Erro ao buscar produtos"}`

---

#### 2.3 Obter Produto por ID

- **Método HTTP**: `GET`
- **Endpoint**: `/api/products/:id`
- **Descrição**: Obtém informações de um produto específico (Rota pública).

- **Parâmetros**:

  - `id` (string, obrigatório): ID do produto.

- **Resposta**:
  - **200**: `{"_id": "id_do_produto", "name": "Produto", ... }`
  - **404**: `{"error": "Produto não encontrado"}`
  - **500**: `{"error": "Erro ao buscar produto"}`

---

#### 2.4 Atualizar Produto

- **Método HTTP**: `PUT`
- **Endpoint**: `/api/products/:id`
- **Descrição**: Atualiza as informações de um produto.

- **Cabeçalho de Autorização**: `Bearer <token>`

- **Parâmetros**:

  - `id` (string, obrigatório): ID do produto.

- **Parâmetros no Corpo da Requisição**:

  - `name` (string, opcional): Novo nome do produto.
  - `description` (string, opcional): Nova descrição do produto.
  - `price` (number, opcional): Novo preço do produto.
  - `quantity` (number, opcional): Nova quantidade em estoque.

- **Resposta**:
  - **200**: `{"_id": "id_do_produto", "name": "Produto atualizado", ... }`
  - **404**: `{"error": "Produto não encontrado"}`
  - **500**: `{"error": "Erro ao atualizar o produto"}`

---

#### 2.5 Deletar Produto

- **Método HTTP**: `DELETE`
- **Endpoint**: `/api/products/:id`
- **Descrição**: Remove um produto do sistema.

- **Cabeçalho de Autorização**: `Bearer <token>`

- **Parâmetros**:

  - `id` (string, obrigatório): ID do produto.

- **Resposta**:
  - **200**: `{"message": "Produto excluído com sucesso"}`
  - **404**: `{"error": "Produto não encontrado"}`
  - **500**: `{"error": "Error deleting product"}`

---

### 3. Catálogos

#### 3.1 Criar Catálogo

- **Método HTTP**: `POST`
- **Endpoint**: `/api/catalogs`
- **Descrição**: Cria um novo catálogo pertencente ao usuário autenticado.

- **Cabeçalho de Autorização**: `Bearer <token>`

- **Parâmetros no Corpo da Requisição**:

  - `name` (string, obrigatório): Nome do catálogo.
  - `products` (array de strings, opcional): IDs dos produtos que pertencem ao catálogo.
  - `user` (string, obrigatório): ID do usuário.

- **Exemplo de Requisição**:

```json
{
  "name": "Catálogo Exemplo",
  "products": ["product_id_1", "product_id_2"],
  "user": "user_id"
}

- **Resposta**:
- **201**: `{"_id": "id_do_catalogo", "name": "Catálogo", ... }`
- **500**: `{"error": "Erro ao criar catálogo"}`

---

#### 3.2 Listar Todos os Catálogos do Usuário

- **Método HTTP**: `GET`
- **Endpoint**: `/api/catalogs`
- **Descrição**: Lista todos os catálogos do usuário autenticado.

- **Cabeçalho de Autorização**: `Bearer <token>`

- **Resposta**:
- **200**: `[{"_id": "id_do_catalogo", "name": "Catálogo", ... }]`
- **500**: `{"error": "Erro ao buscar catálogos"}`

---

#### 3.3 Obter Catálogo por ID

- **Método HTTP**: `GET`
- **Endpoint**: `/api/catalogs/:id`
- **Descrição**: Obtém informações de um catálogo específico do usuário autenticado.

- **Cabeçalho de Autorização**: `Bearer <token>`

- **Parâmetros**:

- `id` (string, obrigatório): ID do catálogo.

- **Resposta**:
- **200**: `{"_id": "id_do_catalogo", "name": "Catálogo", ... }`
- **404**: `{"error": "Catálogo não encontrado"}`
- **500**: `{"error": "Erro ao buscar catálogo"}`

---

#### 3.4 Atualizar Catálogo

- **Método HTTP**: `PUT`
- **Endpoint**: `/api/catalogs/:id`
- **Descrição**: Atualiza informações de um catálogo do usuário autenticado.

- **Cabeçalho de Autorização**: `Bearer <token>`

- **Parâmetros**:

- `id` (string, obrigatório): ID do catálogo.

- **Parâmetros no Corpo da Requisição**:

- `name` (string, opcional): Novo nome do catálogo.
- `products` (array de strings, opcional): Novos IDs dos produtos do catálogo.

- **Resposta**:
- **200**: `{"_id": "id_do_catalogo", "name": "Catálogo atualizado", ... }`
- **404**: `{"error": "Catálogo não encontrado"}`
- **500**: `{"error": "Erro ao atualizar o catálogo"}`

---

#### 3.5 Deletar Catálogo

- **Método HTTP**: `DELETE`
- **Endpoint**: `/api/catalogs/:id`
- **Descrição**: Remove um catálogo do usuário autenticado.

- **Cabeçalho de Autorização**: `Bearer <token>`

- **Parâmetros**:

- `id` (string, obrigatório): ID do catálogo.

- **Resposta**:
- **200**: `{"message": "Catálogo excluído com sucesso"}`
- **404**: `{"error": "Catálogo não encontrado"}`
- **500**: `{"error": "Erro ao excluir catálogo"}`
```
