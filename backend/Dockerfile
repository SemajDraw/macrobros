FROM python:3.7-buster

WORKDIR /app

COPY . .

RUN pip install pipenv --upgrade pip
RUN pipenv install --system --deploy

RUN useradd -ms /bin/bash user

RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/

RUN chown -R user:user /vol
RUN chmod -R 755 /vol/web

USER user

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "4", "--threads", "4",  "macrobros.wsgi:application"]
