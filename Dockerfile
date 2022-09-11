FROM ubuntu:jammy

#Cria uma pasta principal para o projeto
WORKDIR /srv/app

RUN apt-get update

RUN apt-get install -y nodejs

#Copia os arquivos de fora do container para dentro do container
#Assim que se joga uma aplicação para dentro de uma imagem
COPY . .

