# MikuFrontend

前端工程化练手

## Miku-Homepage

一个个人主页，部署详见 [homepage/readme](./homepage/README.md)

## 规范

### 技术规范

js 规范：~~[Airbnb](https://github.com/airbnb/javascript)~~ eslint:recommended

ts 规范: typescript-eslint/recommended

css 规范：[stylelint-config-standard](https://stylelint.io/)

### git 规范

git commit 规范：`<type>(<scope>): <subject>`

验证 commit：[husky](https://www.npmjs.com/package/husky) 的 `pre-commit` 钩子

### 项目规范

项目规范主要是指项目文件的组织方式和命名方式。统一项目规范是为了方便管理与修改，不会出现同样性质的文件出现在不同的地方。

```
├─doc 文档
├─src 源代码
├─test 测试
```

```
├─api 接口
├─asset 静态资源
├─component 组件
├─router 路由
├─mock 模拟测试
├─store 状态
├─service 网络请求
├─util 工具
└─view 试图
```

## 代码重构

### 重构的原则

- 重复写同样的代码，必须重构。
- 代码过长，必须重构。
- 函数功能过多，必须重构。
- 如果一段代码让人很难看懂，可以重构。
- 代码非常繁琐或者不够好，可以重构。

### 重构的方法

推荐阅读：[《重构 第二版》](https://book.douban.com/subject/30468597/)

- 提取重复代码，封装成函数
- 拆分功能太多的函数
- 变量/函数改名
- 替换算法
- 以函数调用取代内联代码
- 移动语句
- 折分嵌套条件表达式
- 将查询函数和修改函数分离
