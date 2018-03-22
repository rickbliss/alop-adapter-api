# Get Started:

$ npm install pm2 -g

# Running Steps:
$ npm start


# Container image
# docker build command builds an image from a Dockerfile and a context. 
$ docker build -t alop/alop-ecs-demo-app .
	# -t flag tags the image so it's easier to find later using the docker images command:

$ docker images

$ docker run -p 3000:8081 -d alop/alop-ecs-demo-app
	# -d runs the container in detached mode, leaving the container running in the background.
	# -p flag redirects a public port to a private port inside the container.
	# 3000->8081 Docker maps the 8081 port inside of the container to the port 3000 on localhost.
	# 8081 matches what it was EXPOSE in the dockerfile and server.js

# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Run API locally
$ curl -v -X GET "http://localhost:8081/api/v1/home" -H "Authorization: Bearer xxx" -H "Accept: application/json" -H "Content-type: application/json"  
