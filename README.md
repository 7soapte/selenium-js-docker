# selenium-js-docker

This is a simple starter project in which we'll have selenium open Youtube, type in and start a search.

======================================

First, we need to run `npm i` in the terminal.

You will need Docker in order to grab a selenium browser container in which to run the test.

For this repository purpose (**MACBOOK M1**) we'll be running the following container:

`docker run -d -p 4444:4444 --name test_selenium_docker --shm-size="2g" seleniarm/standalone-chromium:4.1.2-20220227`

If all worked well, you should have a running local server at:
`http://localhost:4444`

Once everything is set, to run the test, write the following in the terminal:

`node index.js`

**Good job!**

======================================

For FAQ or bugs, feel free to leave me a message or fork a fix:

https://github.com/7soapte/selenium-js-docker
