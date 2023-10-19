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

## 网站维护
