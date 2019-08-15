# cubejs

Cube.js学习

## 启动server

### 依赖条件
- 启动server之前，本地要先安装好mysql或其他数据库，并添加一些默认数据。表名books，字段有id, name, price, date。不一致的话需要自行修改代码。

![](https://haitao.nos.netease.com/5d7e945a-0a6d-487a-884e-515b8c106b13_824_460.png)

sql文件如下：
```
INSERT INTO `books` VALUES (1, 'javascript 高级程序设计', 60, '2019-08-12');
INSERT INTO `books` VALUES (2, '深入浅出nodejs', 55, '2019-08-12');
INSERT INTO `books` VALUES (4, 'javascript 高级程序设计', 64, '2019-08-13');
INSERT INTO `books` VALUES (5, 'javascript 高级程序设计', 68, '2019-08-14');
INSERT INTO `books` VALUES (6, 'javascript 高级程序设计', 55, '2019-08-15');
INSERT INTO `books` VALUES (7, '深入浅出nodejs', 51, '2019-08-13');
INSERT INTO `books` VALUES (8, '深入浅出nodejs', 58, '2019-08-14');
INSERT INTO `books` VALUES (9, '深入浅出nodejs', 60, '2019-08-15');
INSERT INTO `books` VALUES (10, '深入浅出nodejs', 65, '2019-08-16');
```

- 安装完成之后，在.env文件中设置连接参数, 按照实际情况替换。

```
CUBEJS_DB_HOST=127.0.0.1
CUBEJS_DB_NAME=test
CUBEJS_DB_USER=root
CUBEJS_DB_PASS=yourpassword
CUBEJS_DB_TYPE=mysql
CUBEJS_API_SECRET=8e8d0f4511130fec6d898644eab89a090fc841f230e1590a9a0b25a7d76464741729fe5519abe46b6b521f476c16c718e16b158024a079cb8bbf29ace56a39c0
```

- 启动server
```
cd cubejs-server
npm i
npm run dev
```
启动完成之后可以在[http://localhost:4000](http://localhost:4000) 看到Cube.js的playground


## 启动client
```
cd cubejs-client
npm i
npm run dev
```
访问页面http://localhost:9000 查看数据

![](https://haitao.nos.netease.com/117542e7-1a37-4ff4-898f-d5c50186ea55_1018_748.png)


