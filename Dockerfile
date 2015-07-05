FROM    ubuntu:14.10

RUN     apt-get update -y && \
        apt-get install -y software-properties-common && \
        apt-add-repository ppa:chris-lea/node.js  && \
        apt-add-repository ppa:nilarimogard/webupd8 && \
        apt-add-repository ppa:kirillshkrogalev/ffmpeg-next && \
        apt-get update -y && \
        apt-get install -y nodejs ffmpeg youtube-dl

COPY    package.json /tmp/package.json
RUN     cd /tmp && \
        npm install --production && \
        mkdir -p /src && \
        cp -a /tmp/node_modules /src/

WORKDIR /src
COPY    . /src

EXPOSE  3000

CMD     ["node", "server"]
