Remote Book Repository Documentation
=========================


Instructions
==========

install packages with:
`npm install`

run application with:
`node app.js`

.env
==========

**PORT=** port in which the app will run, will default to 3000 if left empty.

docker
==========

to use the docker compose and bind your folder as a a volume, just use
`docker compose up`

alternatively:

to build docker image:
`docker build -f Dockerfile -t remote-book .`

then, to run docker container from image:
`docker run -d -p 3000:3000 --name remote-book-container remote-book`