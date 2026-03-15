# Moss Docs

Moss Admin 的文档站入口。

这个仓库当前已经具备：

- `Turborepo` monorepo 结构
- `apps/admin` 本地测试界面
- `packages/ui` 共享 UI 包
- `docs` 文档站
- GitHub Actions 的 CI 与 Pages 部署工作流

你可以先在本地把界面和结构跑起来，再去 GitHub 新建远程仓库并连接。

## 现在最适合做的事

1. 建 GitHub 仓库并连接 `origin`
2. 打开 GitHub Pages，Source 选择 `GitHub Actions`
3. 为 `main` 添加 branch protection
4. 开始用 `feat/*` 分支推进真实业务页面
