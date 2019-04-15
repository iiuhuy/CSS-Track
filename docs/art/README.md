# Art Conf

<!-- 回来练习一下 CSS Conf 上讲到的案例 -->

## 布局

平行四边形

效果 

<iframe height="400" style="width: 100%;" scrolling="no" title="css-shape" src="//codepen.io/alvinmi/embed/dLVZGw/?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/alvinmi/pen/dLVZGw/'>css-shape</a> by YuHui
  (<a href='https://codepen.io/alvinmi'>@alvinmi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

`Shape-outside` 是不规则形状环绕布局的核心，支持的属性值分为如下：

- 1.`none` - 默认值
- 2.`<shape-box>` - 图形盒子
- 3.`<basic-shape>` - 基本图形函数
- 4.`<image>` - 图像类

- `none` 很好理解，就是普通的矩形环绕
- `<shape-box>`(图形盒子) 是 shape 相关布局中的一个名词，比 `clip-path` 属性中的 `<geometry-box>`（几何盒子）支持的盒子要少一些，CSS2.1 中的基本盒模型的 4 种盒子，分别是 `margin-box`，`border-box`，`padding-box` 和 `content-box`
- `<basic-shape>` 指的是基本形状函数，和 CSS clip-path 剪裁属性支持的基本形状函数一模一样。
- `<image>` 指的是图像类，包括 URL 链接图片，渐变图像，cross-fade()，element() 等。所有这些图像类，CSS3 mask 遮罩属性也都支持，本文只会介绍常用的 URL 链接和渐变图像，其他图片类不介绍，有兴趣可以访问介绍遮罩的这篇文章，有完全展示。

参考文章：https://www.zhangxinxu.com/wordpress/2019/02/css-css3-shapes/

## 图形 

### 透明方格

一个巧妙的思路，通过三角拼成一个正方形。

效果：

<iframe height="400" style="width: 100%;" scrolling="no" title="透明方格" src="//codepen.io/alvinmi/embed/KYXyZv/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/alvinmi/pen/KYXyZv/'>透明方格</a> by YuHui
  (<a href='https://codepen.io/alvinmi'>@alvinmi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### 镂空

#### 图像剪裁

效果：

<iframe height="400" style="width: 100%;" scrolling="no" title="镂空" src="//codepen.io/alvinmi/embed/pBWdVd/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/alvinmi/pen/pBWdVd/'>镂空</a> by YuHui
  (<a href='https://codepen.io/alvinmi'>@alvinmi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

使用 `outline` 模拟镂空， 值很大的 outline。

#### outline 使用圆角的怎么办？

outline 想要实现一个圆角的 outline 在 Chrome 和 IE 下是有限制的，没有这样的属性，可以通过 `box-shadow` 实现。

### 图像处理

使用混合模式 + 滤镜完成。

SVG 和 Canvas 中也有混合模式，本质差不多都一样。

参考 CSS library for Instagram filters。[CSSgram](https://github.com/una/CSSgram) 这个库。

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190415162717.png"/>

更高级的图像处理

参考 [Image Effects with CSS Bennett Feely](https://bennettfeely.com/image-effects/), 人物效果欠佳，画面很美好，可以自己去试试。

## 动画

### 饼图

<iframe height="400" style="width: 100%;" scrolling="no" title="pie-charts" src="//codepen.io/alvinmi/embed/wZrYyb/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/alvinmi/pen/wZrYyb/'>pie-charts</a> by YuHui
  (<a href='https://codepen.io/alvinmi'>@alvinmi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

具体的案例可以[狠狠的点击这里](https://www.zhangxinxu.com/study/201903/css-idea/)，查看鑫空间，鑫生活的网站。
