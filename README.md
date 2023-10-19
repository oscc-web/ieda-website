<p align="center">
    <img alt="Logo" src="https://github.com/oscc-web/ieda-website-resources/blob/main/images/logo/logo.png" width="150">
</p>

<h1>
    <p align="center">iEDA官方网站</p>
</h1>

<p align="center">
    <a title="Project Version">
        <img alt="Project Version" src="https://img.shields.io/badge/version-1.0.0-brightgreen" />
    </a>
        <a title="Node Version" target="_blank" href="https://nodejs.org">
        <img alt="Node Version" src="https://img.shields.io/badge/Node-%3E%3D16.19.1-blue" />
    </a>
    <a title="License" target="_blank" href="https://github.com/oscc-web/ieda-website/blob/master/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/oscc-web/ieda-website.svg" />
    </a>
    <br/>
    <a title="GitHub Watchers" target="_blank" href="https://github.com/oscc-web/ieda-website/watchers">
        <img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/oscc-web/ieda-website.svg?label=Watchers&style=social" />
    </a>
    <a title="GitHub Stars" target="_blank" href="https://github.com/oscc-web/ieda-website/stargazers">
        <img alt="GitHub Stars" src="https://img.shields.io/github/stars/oscc-web/ieda-website.svg?label=Stars&style=social" />
    </a>
    <a title="GitHub Forks" target="_blank" href="https://github.com/oscc-web/ieda-website/network/members">
        <img alt="GitHub Forks" src="https://img.shields.io/github/forks/oscc-web/ieda-website.svg?label=Forks&style=social" />
    </a>
</p>

<p align="center">中文简体 | <a title="English" href="README.md">English</a></p>

## 使用

### 下载仓库

```sh
$> cd your-workspaces
$> git clone git@github.com:oscc-web/ieda-website.git
```

### 更新依赖

```sh
$> ./setup.sh
```

### 运行网站

```sh
$> npm run dev
```

### 更新仓库

```sh
$> cd your-workspaces/ieda-website
$> git pull
```

## 开发

## 内容维护

- 网站所有的资源文件（图片、视频、文件等）是以一个独立的GitHub仓库进行维护的。在执行仓库根目录中的`setup.sh`脚本时，系统会自动将当前网站相配套的资源仓库下载到`src/.vuepress/public/res`目录下。用户在文章中添加新图片`xxx.png`时，首先需要将其复制到`src/.vuepress/public/res/images`中的某个子目录`yyy`（最好跟导航栏中的目录名保持一致，没有可创建）中，然后在Markdown文件中使用下面格式进行引用即可：

    ```md
    ![xxx](/res/images/yyy/xxx.png)
    ```

    **注意：在确认本地资源目录下的新增文件不再发生变化后，需要将终端切换到`src/.vuepress/public/res`目录，然后使用Git提交并Push到远程，保证内容不丢失。**

- 网站的导航栏和侧边栏配置分别位于`src/.vuepress/navbar/zh.ts`和`src/.vuepress/sidebar/zh.ts`文件中，可以根据需要进行添加或修改。其中需要注意的是，侧边栏排序目前采用的是`structure`模式，即框架会读取文件结构自动生成侧边栏，可大大降低用户配置的工作量。但是在这种模式下，侧边栏会按照文件名的标题文字以当前语言进行排序，所以往往生成的顺序并不是我们想要的，为解决这个问题可以在文章的`Frontmatter`区域添加`order`属性，具体说明可参考这篇[教程](https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#自动生成侧边栏)。

- 本网站主体基于[VuePress Theme Hope](https://theme-hope.vuejs.press)进行开发，该框架对传统的Markdown进行了定制优化，支持更加丰富的功能。**所以，请务必在开始编写文章前，仔细阅读[《Markdown》](https://theme-hope.vuejs.press/zh/guide/get-started/markdown.html)和[《Markdown增强》](https://theme-hope.vuejs.press/zh/guide/markdown)这两篇指南**，了解框架提供了哪些强大的组件，并考虑如何将它们应用到自己的文章中，让整体的表现形式更加多样化，从而使得生成的网站文章更容易被大众接受。

## 网站维护

- 为了实现展示复杂界面的需求，目前网站集成了[Element Plus](https://element-plus.gitee.io/en-US)前端框架，其所有组件和图标都已经注册到项目中，可以直接在Vue组件中使用（图标貌似还得在Vue组件中手动导入）。网站定制的Vue组件都放置在`src/.vuepress/components`目录下，用户可根据需要创建新组件，但是需要注意的是**被引用到文章中的组件必须放置在`components`目录下（不能放在子目录中），否则会出现引用失败的错误。**

## 感谢

- [VuePress](https://vuepress.vuejs.org)
- [VuePress Theme Hope](https://theme-hope.vuejs.press)
- [Element Plus](https://element-plus.gitee.io/en-US)
