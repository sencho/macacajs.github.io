---
title: Master Deployment
---

## General Requirements

- [git](http://git-scm.com/) >= 2.0
- [docker](https://www.docker.com/) >= 1.9.1
- [docker compose](https://www.docker.com/products/docker-compose) >= 1.5.2

> Note: Some requirements like nodejs, mongodb, redis, can be use docker to pull and run. With docker, you don't need to worry.

## Getting Started

Get the source code, then you can use docker and docker-compose to setup `reliable`, just like:

```shell
$ git clone https://github.com/reliablejs/reliable-master.git
$ cd reliable
$ make deploy
```

If you want to run in production, run `make deploy env=prod` instead, default is `env=dev`.

## Configuration

`relibale` default configuration is in [config.js](https://github.com/reliablejs/reliable-master/blob/master/common/config.js). You can override it by adding a config file named `*.reliable.config.js` in the root directory.

There is the relevant description:

> It's not a good idea to change configuration of MongoDB & Redis, because docker-compose will take care of them. If you have to change, please update [docker-compose.yml](https://github.com/reliablejs/reliable-master/blob/master/docker-compose.yml) to satisfaction.

Configuration Object Content:

`server`: Settings for Http server, like port.

`site`: Some preferences for your site, like title, baseurl, and so on.

`auth`: Third part token configuration, like [Github](http://github.com/), [Gitlab](https://gitlab.com).

`mail`: Mail service configuration, see [Nodemailer](https://github.com/nodemailer/nodemailer).

## Advanced Topics

### Make Commands

We use [Makefile](https://github.com/reliablejs/reliable-master/blob/master/Makefile) to provide some make commands for daily work. Run `make help` in the root directory to see more.

### Add Administrator

Using `make adduser` in the root directory to add administrator for initialization.

### Running status

Using `make status` in the root directory to get docker containers' running status.

> Note: `reliable` provides two mode to run, prod or dev (default), and you should assign mode when make, just link `make status env=prod`.

### Logging

Using `make logs` in source folder to get containers running logs, which is about MongoDB, Redis, and connection status of slaves.

### Data Backup

Using `make dump` to dump data from MongoDB containers, data package will be in `~/reliable.tar`.

Using `make restore` to restore data into MongoDB containers from `~/reliable.tar`.

You can use `crontab` to backup data. Read [scripts/cron.sh](https://github.com/reliablejs/reliable-master/blob/master/scripts/cron.sh) for reference. Edit it for customization, and then run `crontab -e` for adding it into your crontab script. 

Crontab Configuration:

`home` System user home path where you put repo.

`repo` Path of `reliable` source code folder.

`url` Url to get slaves info, `http://<hostname>:<port>/slaves`, like `http://localhost:3333/slaves`

`slave_path` Path of data backup in your slaves, default is `~/data_backup`
