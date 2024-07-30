# Articles

For showcase porpuse some data has been provided in prisma DB folder.
Same as to provide requested admin functionality, the admin user created in DB.

Please note if You prefer to use local development instead docker You have to set ENV variables same as provided in DockerFile.

For this DEMO app ENV variables are intentionaly exposed in order to correctly set up the project.

## Using Docker

1. Make sure Docker is installed on your machine and running.
2. Open a terminal inside the current project.
3. Build Docker image by running bellow command:

```bash
docker build -t your-image-name .
```

4. Start the container from created image by running bellow command:

```bash
docker run -d -p 3000:3000 your-image-name
```

5. Open your browser and go to http://localhost:3000/