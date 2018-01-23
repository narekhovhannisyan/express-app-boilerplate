# basic-nodejs-app-setup
Basic NodeJS app setup.

# API endpoints
``` text
health
 GET     ./health
```

# Development

## Environment Variables

Required Environment Variables.

| Variable name                | Description                |
|------------------------------|----------------------------|
| `COOKIE_KEY`                 | Cookie key                 |
| `COOKIE_SECRET`              | Cookie secret              |
| `REDIS_PORT`                 | Redis port                 |
| `REDIS_HOST`                 | Redis host                 |

Optional Environment Variables.

| Variable name                | Description                | Default           |
|------------------------------|----------------------------|-------------------|
| `PORT`                       | Port                       | 3050              |
| `REDIS_PASS`                 | Redis password             |                   |
