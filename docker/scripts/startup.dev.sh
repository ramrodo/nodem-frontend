#!/bin/bash

npm install

google-chrome &
xvfb-run ./node_modules/webdriver-manager/bin/webdriver-manager start &
nginx
