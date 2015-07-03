FROM    ubuntu:14.10

RUN     apt-get update -y && \
        apt-get install -y software-properties-common && \
        apt-add-repository ppa:chris-lea/node.js  && \
        apt-add-repository ppa:nilarimogard/webupd8 && \
        apt-add-repository ppa:kirillshkrogalev/ffmpeg-next && \
        apt-get update -y && \
        apt-get install -y nodejs ffmpeg youtube-dl
COPY    . /src
WORKDIR /src
RUN     npm install
EXPOSE  3000
CMD     ["node", "server"]
