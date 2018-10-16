# Timer Backend
Backend in Micronaut that can handle a single timer.

This is the backend part of https://github.com/patrickfust/timer-frontend.

# Building

## Compile

To compile, run:

`gradlew build`

## Create Docker image

`docker build . -t timer-backend`

# Running

Start it from timer-frontend, where there's a Docker compose setup.
