# Contributing

## 分支约定

本仓库默认使用 `GitHub Flow`。

- `main`：唯一长期维护分支
- `feat/*`：新功能
- `fix/*`：缺陷修复
- `docs/*`：文档调整
- `chore/*`：工程和配置类调整
- `refactor/*`：不改行为的结构优化

## 合并规则

- 不直接 push 到 `main`
- 所有代码通过 PR 进入 `main`
- PR 合并前需要通过 CI
- 合并后删除远程分支

## 代码提交建议

- `feat: add dashboard starter view`
- `fix: align pages deployment workflow`
- `docs: clarify branch protection setup`

## 仓库公开后的注意点

GitHub 公开仓库不能真正隐藏其他远程分支。  
如果希望外部基本只看到 `main`，请避免长期保留远程 feature 分支，并开启自动删除 head branch。

