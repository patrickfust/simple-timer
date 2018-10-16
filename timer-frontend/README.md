# timer-frontend

This is the frontend part of the timer, coded in Vue.js.
The backend is located here: https://github.com/patrickfust/timer-backend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```


# Building

## Compile
Necessary steps from project setup is:

1. `npm install`
2. `npm run build`

## Create Docker image 
`docker build . -t timer-frontend`

# Running

Use the Docker compose file:
`docker-compose up`

This stars up both the frontend and the backend server.
