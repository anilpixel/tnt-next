#!/bin/bash

mkdir -p target
tar czf target/$APPNAME-dist.tar.gz apps/ common/ libraries/ packages/ resources/ .eslintrc.js .prettierignore .prettierrc.js babel.config.json rush.json Dockerfile ok.htm nginx.conf
