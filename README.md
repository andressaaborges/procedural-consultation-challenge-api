# Repositório Backend Desafio: Consulta Processual 

### Endpoints da API

##### GET /api/cases

- **Acesse**: https://procedural-consultation-challenge-api.vercel.app/api/cases
- **Descrição**: Recupera uma lista de casos.
- **Método**: GET
- **Resposta**: 
  - `200 OK`: Lista de casos.
  - `404 Not Found`: Caso não encontrado.

##### GET /api/cases/[cnj]

- **Acesse**: https://procedural-consultation-challenge-api.vercel.app/api/cases/5001682-88.2020.8.13.0672
- **Descrição**: Recupera detalhes de um caso específico.
- **Método**: GET
- **Parâmetros**: 
  - `cnj`: Número CNJ do caso.
- **Resposta**: 
  - `200 OK`: Detalhes do caso.
  - `404 Not Found`: Caso não

 encontrado.

##### GET /api/cases/tribunal/[court]

- **Acesse**: https://procedural-consultation-challenge-api.vercel.app/api/cases/tribunal/TJSP
- **Descrição**: Recupera detalhes de um caso específico.
- **Método**: GET
- **Parâmetros**: 
  - `court`:  (Dinâmico) Filtra casos por tribunal.
- **Resposta**: 
  - `200 OK`: Detalhes do caso.
  - `404 Not Found`: Caso não encontrado.
  

### Como Executar a API

> **A API está deployada, então para realizar os testar da aplicação só necessita rodar o servidor do Frontend**

1. Clone o repositório:

```bash
git clone https://github.com/andressaaborges/procedural-consultation-challenge-api.git

```

2. Navegue até o diretório raiz do projeto e instale as dependências do projeto:
   
```bash
npm install

```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev

```

4. Abra seu navegador e acesse http://localhost:3000.
   
Caso já tenha um servidor rodando, irá abrir em http://localhost:3001.


---

**Andressa Borges** - Software Developer