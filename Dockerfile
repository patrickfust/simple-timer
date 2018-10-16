FROM openjdk:8u171-alpine3.7
RUN apk --no-cache add curl
COPY timer-backend/build/libs/*-all.jar timer-backend.jar
CMD java ${JAVA_OPTS} -jar timer-backend.jar