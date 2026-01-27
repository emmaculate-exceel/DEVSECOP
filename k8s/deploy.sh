set -e

NAME="kubernetes-demo-api"
USERNAME="emmanuel"
IMAGE="$USERNAME/NAME:latest"

echo "Building Docker image..."
docker build -t $IMAGE .

echo "pushing image to docker hub"
docker push $IMAGE

echo "applying kubernetes manifests"
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

echo "Getting pods ..."
kubectl get pods

echo "Fetching the main service"
kubectl get services $NAME-service
