# Coding Assignment 12

## Building Dockerfile

1. Create empty folder and clone repo from GitHub using
git@github.com:avcxmgs/component_library.git

2. Navigate to the folder:
cd component_library

3. Start Docker Desktop

4. Build and tag the Docker image:
docker build . -t "santos_margareth_coding_assignment_12"
I am running into an issue where the Dockerfile does not build properly because of "import React from 'react';" statements
in the .stories and .tests files, but removing them causes issues with npm run test and Storybook.

5. Build the image and start the container:
docker run -t -i -p 8083:8083 --name=santos_margareth_coding_assignment_12 santos_margareth_coding_assignment_12

6. Check on a browser that the web application is running:
http://localhost:8083/

7. Stop the container:
q + enter

## Running Dev and Storybook

1. Create empty folder and clone repo from GitHub using
git@github.com:avcxmgs/component_library.git

2. Navigate to the folder:
cd component_library

3. Install the dependencies:
npm install

4. Run dev:
npm run dev

5. It will run on:
http://localhost:5173/

6. Stop the dev server:
ctrl + c

7. Run Storybook:
npm run storybook

8. It will run on:
http://localhost:6006/

## Running Tests

1. Create empty folder and clone repo from GitHub using
git@github.com:avcxmgs/component_library.git

2. Navigate to the folder:
cd component_library

3. Install the dependencies:
npm install

4. Run the tests:
npm run test