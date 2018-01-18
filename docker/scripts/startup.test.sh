#!/bin/bash

mkdir -p test_logs

google-chrome > test_logs/chrome.log 2>&1 &
xvfb-run ./node_modules/webdriver-manager/bin/webdriver-manager start > test_logs/selenium.log 2>&1 &
nginx &
npm run start-prod &

until nc -z -v -w30 localhost 4444
do
  echo "Waiting for selenium server to start..."
  sleep 5
done

until nc -z -v -w30 $API_HOST_NAME $API_HOST_PORT
do
  echo "Waiting for api server to start..."
  sleep 5
done

until nc -z -v -w30 localhost 4000
do
  echo "Waiting for web server to start..."
  sleep 5
done

npm run test-e2e-headless
