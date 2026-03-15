import { defineConfig } from 'vitepress'

/**
 * Resolve the repository name during GitHub Pages builds so project pages use the correct base path.
 */
function resolveBasePath() {
  if (process.env.GITHUB_ACTIONS !== 'true') {
    return '/'
  }

  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
  return repository ? `/${repository}/` : '/'
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'Moss Docs',
  description: 'Moss Admin 的工程文档与启动说明',
  base: resolveBasePath(),
  themeConfig: {
    nav: [
      { text: '开始使用', link: '/guide/getting-started' },
      { text: '分支策略', link: '/process/branch-strategy' }
    ],
    sidebar: [
      {
        text: '指引',
        items: [
          { text: '启动说明', link: '/guide/getting-started' },
          { text: '分支策略', link: '/process/branch-strategy' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/q1ang1/moss-admin' }
    ]
  }
})
