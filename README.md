# Teste Loomi

## Configuração Inicial:

É necessário configurar as variáveis do arquivo .env

| Variável              | Configuração                           |
| --------------------- | -------------------------------------- |
| POSTGRES_USER         | Nome do usuário do banco de dados      |
| POSTGRES_PASSWORD     | Senha do usuáŕio do banco de dados     |
| POSTGRES_DB           | Nome do banco de dados                 |
| SECRET_KEY            | Chave para códificar/decoficar o token |
| EXPIRES_IN            | Tempo de expiração do token            |
| AWS_ACCESS_KEY_ID     | Acess key da AWS para upload da imagem |
| AWS_SECRET_ACCESS_KEY | Secret key da AWS                      |
| AWS_BUCKET            | Nome do bucket na AWS                  |
| AWS_BUCKET_REGION     | Região do bucket na AWS                |
| BASE_URL_BUCKET       | Base url para armazenar a url no db    |

Após a configuração do ambiente, é necessário roda o comando `sudo docker-compose up` e depois `yarn dev`

### API doc = http://localhost:3333/api-docs
