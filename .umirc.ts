import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/apps/draw', component: '@/pages/index' },
  ],
  base: '/x6-graph/',
  publicPath: '/x6-graph/',
  title: 'x6-graph',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@antv/x6-react-components',
        libraryDirectory: 'es',
        transformToDefaultImport: false,
        style: true,
      },
    ],
  ],
})
