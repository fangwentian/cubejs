# cubejs

Cube.js学习

## 启动server

### 依赖条件
- 启动server之前，本地要先安装好mysql或其他数据库，并设置一些默认参数。表名books，字段有id, name, price, date。不一致的话需要自行修改代码。

![](https://haitao.nos.netease.com/0f2ebc1a-94e6-4331-86a7-1eab41cc52ea_387_211.png)

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

- 安装完成之后，在.env文件中设置连接参数

```
cd cubejs-server
npm i
npm run dev
```
启动完成之后可以在http://localhost:4000看到Cube.js的playground


## 启动client
```
cd cubejs-client
npm i
npm run dev
```
访问页面http://localhost:9000查看数据

![](https://haitao.nos.netease.com/117542e7-1a37-4ff4-898f-d5c50186ea55_1018_748.png)


