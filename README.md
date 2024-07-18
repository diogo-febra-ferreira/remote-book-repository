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

**PORT=** port in which the app will run, will default to 300 if left empty.

docker
==========

build docker image:
`docker build -f Dockerfile -t remote-book .`

run docker container from image:
`docker run -d -p 3000:3000 --name remote-book-container remote-book`