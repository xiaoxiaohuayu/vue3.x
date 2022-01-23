import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'), // 配置文件引用别名 alias
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       less: {
//         javascriptEnabled: true,
//         // 全局less变量
//         additionalData:  `@import "${path.resolve(__dirname, 'src/assets/style/mian.less')}";`
//       }
//     }
//   },
//   envPrefix:'HAO_'
// });
export default defineConfig(({ command, mode }) => {
  console.log('模式: ', command, mode);
  if (command === 'serve') {
    return {
      // dev 独有配置
      plugins: [vue()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'), // 配置文件引用别名 alias
        },
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            // 全局less变量
            additionalData: `@import "${path.resolve(__dirname, 'src/assets/style/mian.less')}";`,
          },
        },
      },
      envPrefix: 'HAO_',
    };
  }
  // command === 'build'
  return {
    // build 独有配置
  };
});
