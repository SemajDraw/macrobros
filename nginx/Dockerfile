FROM nginx:1.19-alpine

RUN rm /etc/nginx/conf.d/*

COPY default.conf /etc/nginx/conf.d/default.conf

USER root

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
