# 启动说明

## 目录结构

```text
apps/
  admin/   # 本地测试管理台
docs/      # VitePress 文档站
packages/
  ui/      # 共享 UI 组件
```

## 本地启动

```bash
nvm use
pnpm install
pnpm dev:admin
```

启动文档站：

```bash
pnpm dev:docs
```

## 当前包含的工程能力

- `turbo run build`
- `turbo run lint`
- `turbo run typecheck`
- `turbo run test`
- `turbo run lint typecheck test build`
- GitHub Pages 文档部署工作流

## Moss 命名体系

- 主应用：`moss-admin`
- 文档站：`moss-docs`
- UI 包：`@moss/ui`
- 预留包名：`@moss/hooks`、`@moss/utils`

后续对外安装时统一使用：

```bash
pnpm add @moss/ui
pnpm add @moss/hooks
pnpm add @moss/utils
```

目前仓库里已经落下来的只有 `@moss/ui`，`hooks` 和 `utils` 还没有单独抽包，所以暂时没有创建空包。

## 远程仓库接入建议

```bash
git remote add origin git@github.com:<your-account>/<your-repo>.git
git push -u origin main
```

如果你想先走 PR 流程，也可以在本地切 `feat/*` 分支后再推送。
