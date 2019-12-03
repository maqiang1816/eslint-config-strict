<!--
 * @author: maqiang
 * @Date: 2019-12-03 10:36:47
 * @LastEditors: maqiang
 * @LastEditTime: 2019-12-03 11:17:47
 * @description: eslint-config-strict-vue 使用指南
 -->

# @xmgh/eslint-config-strict-vue

## 安装

通过如下命令安装配置包

```bash
yarn add -D @xmgh/eslint-config-strict-vue@1.1.0 eslint@5.16.0 eslint-plugin-import@2.18.2
```

如果是webpack工程，需另行安装 `eslint-import-resolver-webpack` 依赖，执行如下命令即可：

```bash
yarn add -D eslint-import-resolver-webpack@0.11.1
```

也可以直接复制下方的依赖到项目下的 package.json 文件的 `devDependencies` 字段下，执行 `yarn` 命令安装

```javascript
  "eslint-import-resolver-webpack": "0.11.1"
```

## 对接步骤

对于新工程，在项目根目录下，复制如下内容至 .eslintrc.js 文件内

```javascript
module.exports = {
  extends: ['@xmgh/eslint-config-strict-vue'],
  settings: {
    'import/resolver': {
      webpack: {
        // vue-cli2 工程使用如下配置
        config: 'build/webpack.base.conf.js'
        // vue-cli3 工程使用如下配置
        // config: require.resolve('@vue/cli-service/webpack.config.js')
      }
    }
  },
  globals: {
    Vue: true
  },
  // 各工程的个性化配置，可以在这里设置覆盖
  rules: {
    // 'no-empty': 'off',
  },
  overrides: {
    files: [
      'src/api/**/*.js',
    ],
    rules: {
      'import/prefer-default-export': 'off',
      'import/group-exports': 'off',
    }
  },
}
```

对于老工程，安装上述依赖后，启动本地工程，如果有新增报错，在项目根目录下的eslint校验文件内，将相关错误规则关闭掉

将新的校验规则文件放置到想要开启校验的文件夹下，然后重启工程，手动改正相关问题

## 注意

该配置使用了 sonarjs 校验代码的逻辑合理性，需自行安装 Java JDK，下载链接如下：
[点击前往JDK下载页面](https://www.java.com/zh_CN/download/)
下载下来后，直接点击安装，一直下一步就可以，直至安装完成
另可搭配 vscode 的 sonarlint、eslint 插件使用
