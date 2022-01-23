import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
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
      //启动服务配置
      server: {
        host: '0.0.0.0',
        port: 8000,
        open: true,
        https: false,
        proxy: {},
      },
      // 生产环境打包配置
      //去除 console debugger
      build: {
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        },
      },
      envPrefix: 'HAO_',
    };
  }
  // command === 'build'
  return {
    // build 独有配置
    plugins: [
      // gzip压缩 生产环境生成 .gz 文件
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      vue(),
    ],
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
    //去除 console debugger
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    // envPrefix: 'HAO_',
  };
});
