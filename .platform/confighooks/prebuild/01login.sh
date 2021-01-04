#!/bin/bash
DOCKER_USER=/opt/elasticbeanstalk/bin/get-config environment -k DOCKER_USER
DOCKER_PASSWD=/opt/elasticbeanstalk/bin/get-config environment -k DOCKER_PASSWD
docker login -u $DOCKER_USER-p $DOCKER_PASSWD