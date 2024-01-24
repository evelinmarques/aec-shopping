# imagem do Node.js como base
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

# Limpa o cache do npm para evitar conflitos na versão
RUN npm cache clean --force

RUN npm install

COPY . .

# Porta de Execução
EXPOSE 3000

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["npm", "run", "dev"]
