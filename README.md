# selenium-js-docker

This is a simple starter project in which we'll have selenium open Youtube, type in and start a search.

<hr>

## Instalation

First, we need to run `npm i` in the terminal.

You will need [Docker](https://www.docker.com/products/docker-desktop/) in order to grab a selenium browser container in which to run the tests.

For this repository purpose (**MACBOOK M1**) we'll be running the following container:

```bash
docker run -d -p 4444:4444 --name test_selenium_docker --shm-size="2g" seleniarm/standalone-chromium:4.1.2-20220227
```

> For any other operating system, please go over docker containers that work on your kernel

If all worked well, you should have a running local server at:
`http://localhost:4444`

Once everything is set, to run the test, write the following in the terminal:

`npm run chrome.js` (this will use the container)

`npm run safari.js` (this will run locally on a mac)

**Good job!**

<hr>

## Contributors
For FAQ or bugs, feel free to leave me a message or fork a fix.
