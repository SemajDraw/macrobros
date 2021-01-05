FROM python:3.7-buster

ENV PATH="environment/scripts:${PATH}"

RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get -y install nodejs

WORKDIR /app
COPY . .
RUN pip install pipenv
RUN pipenv install --system --deploy --ignore-pipfile
RUN npm install --production

RUN useradd -ms /bin/bash user
RUN chmod +x environment/scripts/*

RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/

RUN chown -R user:user /vol
RUN chmod -R 755 /vol/web

USER user

CMD ["entrypoint.sh"]
