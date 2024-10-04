# ente-group

1. 部署 [ente-photos](https://github.com/eric-gitta-moore/ente/blob/main/.github/workflows/web-deploy-one.yml) 到 cf pages
2. docker [compose](https://github.com/eric-gitta-moore/ente-group/blob/main/runner/docker-compose.yml) 部署后端
3. 打开 web 前端，注册用户，在容器日志找到验证码，注册成功，默认就是管理员
4. 下载 [cli](https://github.com/ente-io/ente/blob/main/cli/docs/generated/ente_account_add.md) 设置后端地址和添加账号
5. [升级订阅](https://github.com/ente-io/ente/blob/main/cli/docs/generated/ente_admin_update-subscription.md)
6. 修复 cf r2 [跨域](https://help.ente.io/self-hosting/guides/external-s3#_5-fix-potential-cors-issue-with-your-bucket)
7. enjoy!
