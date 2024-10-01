#comentários começam com #
#essa linguagem não é case sensitive
#mas é boa prática usar maiúsculas para diferenciar
#comandos de argumentos
#queremos criar uma imagem com o node versão 14
FROM node:14

#um diretório no sistema de arquivos do contêiner para os
#os comandos a seguir
WORKDIR /app

#copiamos o packege.json para poder executar npm install
COPY package.json .

#executamos npm install
RUN npm install

#copiamos os demais arquivos
COPY . .

#colocamos o aplicativo em execução
CMD ["node", "index.js"]