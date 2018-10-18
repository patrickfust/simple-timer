#!/bin/bash

# exit if any fails
set -e

# Frontend
echo
echo Building frontend...
echo --------------------
cd timer-frontend
npm run build

# Backend
echo
echo Building backend...
echo --------------------
cd ../timer-backend
./gradlew clean build

# Docker image
echo
echo Building Docker image...
echo ------------------------
cd ..
docker build . --no-cache -t patrickfust/simple-timer:latest

echo
echo ------------------------
echo Upload to Docker hub with:
echo docker push patrickfust/simple-timer:latest

echo
echo Local run: 
echo docker run -p 9090:9090 --name simple-timer --rm patrickfust/simple-timer:latest