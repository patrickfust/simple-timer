# Frontend
cd timer-frontend
npm run build

# Backend
cd ../timer-backend
./gradlew build

# Docker image
cd ..
docker build . -t simple-timer