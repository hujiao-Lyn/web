如何搭建前端开发环境



一、首先安装Google Chrome 浏览器



到Google chrome 官网下载并安装最新版的 Chrome 浏览器



二、安装 JavaScript 运行时 -- Node 



 1.上node js官网下载并安装node js。

 2.根据自己的电脑系统下载正确的安装包进行安装，安装时可以不用安装到c盘，选择d盘文件夹都可以，而且node js安装后会自动将安装路径添加到系统环境变量，省去手动添加麻烦。

 3.安装后可以验证下nodejs是否成功安装；进入运行，输入cmd，在里面输入node -v 按回车；如果正确安装，将会输出你安装的版本。

 ![img](https://images2015.cnblogs.com/blog/566046/201607/566046-20160726112714747-971444121.png) 

或 输入cnpm -v，若出现以下输出则表示安装成功： 

 ![å¨è¿éæå¥å¾çæè¿°](https://img-blog.csdnimg.cn/20200331095309699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FkbWluMTExOTY=,size_16,color_FFFFFF,t_70) 

4.查看环境变量:path

5.配置 NPM：

npm config set prefix "D:\Program Files\nodejs\node_global" 

npm config set cache "D:\Program Files\nodejs\node_cache"

6.配置国内镜像源：

npm config set registry https://registry.npm.taobao.org



三、安装编辑器 -- Visual Studio Code



1. 安装 Visual Studio Code 
  到 Visual Studio Code 官网https://code.visualstudio.com/下载并安装最新版本 Visual Studio Code。

2.  安装插件  

   ![å¨è¿éæå¥å¾çæè¿°](https://img-blog.csdnimg.cn/20200518105818474.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FkbWluMTExOTY=,size_16,color_FFFFFF,t_70) 

  3. settings.json配置文件（比较简单的版本） 

     ![1600946717609](C:\Users\hujia\AppData\Roaming\Typora\typora-user-images\1600946717609.png)

4. 设置vscode默认打开浏览器为谷歌设置
  输入框里面应该直接输入 Chrome , 别写 {“open-in-browser.default”:“Chrome”} 

   ![äº²æµæ æ](https://img-blog.csdnimg.cn/20200331101339705.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FkbWluMTExOTY=,size_16,color_FFFFFF,t_70) 

  

四、安装分布式版本控制工具 -- Git 



1、到 Git 官网（https://git-scm.com/downloads)下载并安装最新版的 Git。
安装过程中注意选择：用 Visual Studio Code为 Git 的默认编辑器。

2、配置个人信息

$ git config --global user.name "Your Name"

 $ git config --global user.email "email@example.com"

3、创建版本库：

git init

ls -ha

4、git的常用命令：

![1600947082952](C:\Users\hujia\AppData\Roaming\Typora\typora-user-images\1600947082952.png)

常用命令：

git clone、git push、git add 、git commit、git checkout、git pull

workspace（工作区）：在电脑里能看到的目录。 

staging area（暂存区/缓存区）：英文叫 stage 或 index。一般存放在 .git 目录下的 index 文件（.git/index）中，所 以我们把暂存区有时也叫作索引（index）。

 local repository（本地仓库）：工作区有一个隐藏目录 .git，这个不算工作区，而是 Git 的版本库。 remote repository（远程仓库）：

![1600947138289](C:\Users\hujia\AppData\Roaming\Typora\typora-user-images\1600947138289.png)



5.本地仓库和远程仓库关联（同步）：

$ git remote add origin git@server-name:path/repo-name.git
$ git remote add origin git@github.com:{用户名}/{远程仓库名}.git

6、关联后，使用命令如下第一次推送master分支的所有内容；

$ git push -u origin master