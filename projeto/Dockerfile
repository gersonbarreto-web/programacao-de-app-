# usamos a versao 22 - alpine para ser leve e garantir node 22.12+
FROM node:22-alpine

WORKDIR /app

#copiamos apenas os aequivos de dependencias primeiro (otimiza o cache )
COPY package.json package-lock.json ./

RUN npm install

#copiamos o restante dos arquivos 

COPY . .

# Expomos os restante dos arquivos
EXPOSE 5173

#comando para rodar o vite com flag --host
# isso e obrigatorio para o docker conseguir acessa o servidor interno
CMD ["npm", "run", "dev", "--", "--host"]