FROM ubuntu:jammy

#Cria uma pasta principal para o projeto
WORKDIR /srv/app

#Copia os arquivos de fora do container para dentro do container
#Assim que se joga uma aplicação para dentro de uma imagem
COPY . .


RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

RUN npm install

#Configura um comando padrão que vai ser executado quando subir o container
CMD [ "node","index.js" ]



