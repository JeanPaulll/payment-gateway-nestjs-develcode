FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copiar o restante do código da aplicação para dentro do contêiner
COPY . .

EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]