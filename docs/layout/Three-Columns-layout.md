# Three-Columns-layout

三栏布局。三栏布局中耳熟能详的便是圣杯布局和双飞翼布局了，两者解决的问题是一样的，就是两边定宽，中间自适应的三栏布局。

圣杯布局来源于 2006 年的一篇文章：[In Search of the Holy Grail](https://alistapart.com/article/holygrail)。双飞翼布局始于淘宝 UED。两者都是在解决两边固定宽度，中间自适应的三栏布局，并且主要内容要优先渲染，按照 DOM 从上至下的加载原则，中间的自适应部分要放在前面。

## 1.圣杯布局

html 结构：

```html
<div class="container">
  <div class="center">center</div>
  <div class="left">left</div>
  <div class="right">right</div>
</div>
```

css 样式：

```css
body {
  min-width: 630px;
}
.center {
  width: 100%;
  height: 150px;
  background-color: #94e8ff;
}
.left {
  width: 100px;
  height: 150px;
  background-color: #ffb5bf;
}
.right {
  width: 200px;
  height: 150px;
  background-color: #8990d5;
}
```

刷新后，可以看到，三个子 div 各占一行显示了，再加上左浮动看看效果：

```css
.container {
  overflow: hidden; /* 清除浮动 */
}
.center,
.left,
.right {
  float: left;
}
```

这时候，由于 `.center` 设置了 100% 的宽度，所以 `.left` & `.right` 都被挤到下面去了。这个就要用到 margin 的负值了。

因为 `.center` 的宽度是 100%，所以 `.left` 和 `.right` 排在了第二行，可以理解为排在 `.center` 的后面。那么 `.left` 要回到 `.center` 的左边，便要向左移动 `.center` 的宽度，即 100%。

`.left` 移动之后 `.right` 会自动补上，这时 `.right` 想要达到 `.center` 的最右边，只需要向左移动它本身的宽度就行了，即 200px。

这个时候，貌似是实现了 **圣杯布局**，但是发现 `.center` 的文字被遮挡了，此时 `.left`、`.right` 都覆盖在 `.center` 的上面，我们要给两者留出位置。

圣杯布局的做法是 先设置父元素 `.center` 的 padding 属性，给 `.left`、`right` 留出空间，两者需要的空间大小就是两者的宽度，然后利用定位属性使其归位。

先设置 padding 属性：

```css
.container {
  padding-left: 100px;
  padding-right: 200px;
}
```

这个时候由于父元素设置了 padding，所有子元素都往中间挤了，此时只需将 .left、.right 分别向左向右拉到准备的空位就好了。

首先将左右的定位属性设置为 relative，即相对自己定位，.left 要向左移动 100px，.right 要向右移动 200px，所以 .left 只要设置 left: -100px; 、.right 设置 right: -200px; 便能达到效果。

这样圣杯布局便完成了，它的核心思想是使用浮动布局，用 padding 为左右元素留空间，灵活使用 margin 的负值和相对定位让元素移动到相应的位置。

完整代码如下，或者在 [Codepen 编辑](https://codepen.io/alvinmi/pen/daBPpq/)。

```html
<div class="container">
  <div class="center">center</div>
  <div class="left">left</div>
  <div class="right">right</div>
</div>
```

```css
body {
  min-width: 630px;
}
.center {
  width: 100%;
  height: 150px;
  background-color: #94e8ff;
}
.left {
  width: 100px;
  height: 150px;
  background-color: #ffb5bf;
  margin-left: -100%;
  // 设置左侧定位属性,将 .left 拉到左边
  position: relative;
  left: -100px;
}
.right {
  width: 200px;
  height: 150px;
  background-color: #8990d5;
  margin-left: -200px;
  // 设置右侧定位属性,将 .right 拉到右边
  position: relative;
  right: -200px;
}

.container {
  overflow: hidden; // 清除浮动
  // 设置左右的 padding 属性
  padding-left: 100px;
  padding-right: 200px;
}

// 给三者加上浮动
.center,
.left,
.right {
  float: left;
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="Three-Columns-layout" src="//codepen.io/alvinmi/embed/daBPpq/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/alvinmi/pen/daBPpq/'>Three-Columns-layout</a> by YuHui
  (<a href='https://codepen.io/alvinmi'>@alvinmi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 2.双飞翼布局

双飞翼布局与圣杯布局的前部分一样，在给左右两边元素留出位置的思路有区别。

圣杯布局是设置了父元素的 padding 留出空间，之后利用 relative 来归位。双飞翼则是多加了一个 div，将中间自适应部分包裹起来，利用子 div 的 margin 来给左右元素留空间。

同样的问题，双飞翼布局通过多加一个 div 并使用了 margin 来实现，圣杯布局则是使用 padding、相对定位（relative）、设置偏移量（left、right）来实现，相对来说，双飞翼布局更容易理解。在圣杯布局中，无限缩小屏幕（假设没有设置 body 的最小宽度），当 .main 的宽度小于 .left 时，会出现布局错乱。

<iframe height="265" style="width: 100%;" scrolling="no" title="双飞翼布局" src="//codepen.io/alvinmi/embed/RvzWjM/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/alvinmi/pen/RvzWjM/'>双飞翼布局</a> by YuHui
  (<a href='https://codepen.io/alvinmi'>@alvinmi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 3.Flex 布局

<iframe height="265" style="width: 100%;" scrolling="no" title="Flex-三栏布局" src="//codepen.io/alvinmi/embed/jJOEgP/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/alvinmi/pen/jJOEgP/'>Flex-三栏布局</a> by YuHui
  (<a href='https://codepen.io/alvinmi'>@alvinmi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 参考

- [In Search of the Holy Grail：https://alistapart.com/article/holygrail](https://alistapart.com/article/holygrail)
- 双飞翼布局介绍-始于淘宝 UED：http://www.imooc.com/wenda/detail/254035
- 圣杯布局&双飞翼布局的对比：http://www.cnblogs.com/tinyphp/p/4743674.html
- [我熟知的三种三栏网页宽度自适应布局方法](https://www.zhangxinxu.com/wordpress/2009/11/%E6%88%91%E7%86%9F%E7%9F%A5%E7%9A%84%E4%B8%89%E7%A7%8D%E4%B8%89%E6%A0%8F%E7%BD%91%E9%A1%B5%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94%E5%B8%83%E5%B1%80%E6%96%B9%E6%B3%95/)
- [CSS 布局：40 个教程、技巧、例子和最佳实践](https://coolshell.cn/articles/6840.html)


```

```
