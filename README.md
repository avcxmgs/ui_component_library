# Coding Assignment 13

## Building Dockerfile

1. Create empty folder and clone repo from GitHub using

   `git@github.com:avcxmgs/ui_component_library.git`

2. Start Docker Desktop

3. Build and tag the Docker image:

   `docker build . -t "santos_margareth_coding_assignment13"`

4. Build the image and start the container:

   `docker run -t -i -p 8018:8018 --name=santos_margareth_coding_assignment13 santos_margareth_coding_assignment13`

5. Check on a browser that the web application is running:
   http://localhost:8018/

6. Stop the container:
   q + enter
