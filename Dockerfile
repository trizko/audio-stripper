FROM    ubuntu:14.10

RUN     apt-get update -y
RUN     apt-get install -y software-properties-common
RUN     apt-add-repository ppa:chris-lea/node.js 
RUN     apt-add-repository ppa:nilarimogard/webupd8
RUN     apt-add-repository ppa:kirillshkrogalev/ffmpeg-next
RUN     apt-get update -y
RUN     apt-get install -y nodejs ffmpeg youtube-dl
COPY    . /src
WORKDIR /src
RUN     npm install
EXPOSE  3000 
CMD     ["npm", "start"]
