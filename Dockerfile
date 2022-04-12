FROM hoosin/alpine-nginx-nodejs

ARG APPNAME

RUN apk add --no-cache bash curl

ENV APPNAME=${APPNAME}
ENV NODE_OPTIONS=--max_old_space_size=2048
WORKDIR /home/admin/$APPNAME
COPY . .

RUN npm set registry=https://registry.npm.taobao.org && \
    npm install -g pnpm @microsoft/rush

RUN rush install

RUN rush build -t website

ADD nginx.conf /etc/nginx/
ADD ok.htm /home/admin/
RUN mv apps/website/build/* /home/admin/
RUN mkdir -p /home/admin/nginx/conf
ADD validate.sh /home/admin/$APPNAME
RUN mkdir -p /home/admin/output/$APPNAME/logs
RUN find /home/admin/$APPNAME -not -name 'validate.sh' -delete

CMD ["/bin/bash", "-c", "nginx"]
