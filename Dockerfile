FROM ubuntu:16.04
MAINTAINER yussandeveloper@gmail.com

RUN export DEBIAN_FRONTEND=noninteractive && set -x \
  && apt-get update -y \
  && apt-get install -y supervisor nodejs npm \
  && ln -s /usr/bin/nodejs /usr/bin/node \
  && npm install -g nodemon \
  && apt-get autoremove -y -f \
  && apt-get clean -y

RUN service supervisor start
RUN mkdir -p /usr/src/web

COPY dockerconf/etc /etc
COPY web/src /usr/web

CMD ["/etc/supervisor/supervisor.sh"]

EXPOSE 8080