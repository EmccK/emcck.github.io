var posts=["Docker安装/","EditorConfig使用/","Mac配置流程/","Linux开启密码访问SSH/","MySql学习/","Navidrome 音乐服务器/","Rime输入法配置/","TextView自定义下划线/","Spotless使用方法/","一个标准的网络请求格式/","上传aar到远程仓库/","同域名内外网智能路由/","常用的Docker命令/","常用的Docker镜像/","通过SSH 密钥对访问VPS/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };