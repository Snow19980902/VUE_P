### or create a new repository on the command line
```shell
git init
git status
git add .
git commit -m "init my project"
git remote add origin git@github.com:viljz/vue.git
git push -u origin master
```

### 制作App首页
1. 制作 header 区域, 使用 Mint-UI 组件
2. 制作 tabbar 区域, 使用 MUI 的 tabbar 的代码段
  - 更改 tabbar 的小图标样式
  - 把 tabbar 改成 router-link
  - 把 router 的linkActiveClass 默认样式 改成 mui-active
  - 点击 tabbar 的链接, 展示对应的组件
3. 中间区域放置 router-view 用来展示组件内容
4. 使用 Mint-UI 制作首页轮播图
  - 使用 vue-resource this.$http.get 加载轮播图数据
  - 把数据保存到 data 中, 使用 v-for 循环渲染每个 item 项
  - 每个项都要添加 :key=item.id