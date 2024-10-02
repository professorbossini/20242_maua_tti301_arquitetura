#comentários são feitos iniciando a linha com #
#a linguagem não é case sensitive, mas é boa prática
#usar maiúsculas para separar comandos de argumentos
#queremos uma imagem com o node versão 14
FROM node:14

#um diretório no sistema de arquivos do contâiner para 
#os comandos a seguir
WORKDIR /app

#copiamos o package.json para poder executar npm install
COPY package.json .

#executamos o npm install
RUN npm install

#copiamos os demais arquivos
COPY . .

#colocamos o aplicativo em execução
CMD ["node", "index.js"]