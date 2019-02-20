# FlexBox 布局

网上 FlexBox 的东西太多了，但是自己需要练习，实践。

- 理解盒子模型，块级元素和行内元素的区别。

**块级元素 & 行内元素的区别：**

- 块级元素总是独占一行，从上到下显示，行内元素则是从左到右显示。这是因为块级元素前后有换行符，而行内元素前后没有换行符。

块级元素：

- 没有设置宽度时，它的宽度是其容器的 100%；
- 可以给块级元素设置宽高、内边距、外边距等盒模型属性；
- 块级元素可以包含块级元素和行内元素；
- 常见的块级元素有：`<div>`、`<h1> ~ <h6>`、`<p>`、`<ul>`、`<ol>`、`<dl>`、`<table>`、`<address>`、`<form>` 等。

行内元素：

- 行内元素不会独占一行，只会占领自身宽高所需要的空间；
- 给行内元素设置宽高不会起作用，margin 值只对左右起作用，padding 值也只对左右起作用；
- 行内元素一般不可以包含块级元素，只能包含行内元素和文本；
- 常见的行内元素有 `<a>`、`<b>`、`<label>`、`<span>`、`<img>`、`<em>`、`<strong>`、`<i>`、`<input>` 等。

设置为 `inline-block` 的元素，既具有块级元素可以设置宽高的特性，又具有行内元素不换行的特性。

## position

在布局中重要的因素就是**定位**，position 属性就是用来定义元素的定位机制。position 的常用属性有如下：

- relative：相对定位，相对于元素的正常位置进行定位；
- absolute：绝对定位，相对于除 static 定位以外的元素进行定位；
- fixed：固定定位，相对于浏览器窗口进行定位，网站中的固定 header 和 footer 就是用固定定位来实现的；
- static：默认值，没有定位属性，元素正常出现在文档流中；
- inherit：继承父亲的 position 属性值。

文档流的概念：可以想象成流动的水，文档流便是指从上到下，从左往右的文档布局。当给元素的 position 属性设置 absolute、fixed 时便会脱离文档流，不再遵循从上到下，从左到右的的规律了。

## float

float 属性定义元素在哪个方向浮动，常用的属性值有 `left`、`right`，即向左浮动，向右浮动。设置 float 会脱离文档流。当不给父元素设置宽高时，父元素的宽高会被子元素的内容撑开。但是当子元素设置浮动属性后，子元素会溢出到父元素外，父元素高度也不会被撑开了，称为 「高度塌陷」。

如何解决这个问题？ **要使用清除浮动。** 常用解决方案如下：

- 1.通过添加额外的标签，利用 clear 属性来清除浮动;
- 2.使用 `br` 标签。(br 自带 clear 属性，clear 属性有 left、right 和 all 三个属性值可选。);
- 3.给父元素设置 overflow;
- 4.使用 after 伪元素 ;

在实践的时候为什么仅仅设置 `overflow: hidden;` 就能清除浮动呢？

这里需要学习 [BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context) (Block Formatting Context)，块级格式化上下文。BFC 的一个特性便是可以包含浮动元素，设置 overflow 为 hidden 满足了创建一个 BFC 的条件，其实就是创建 BFC，利用 BFC 固有特性清除浮动。

<iframe height="265" style="width: 100%;" scrolling="no" title="FlexBox" src="//codepen.io/alvinmi/embed/aXXgWY/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/alvinmi/pen/aXXgWY/'>FlexBox</a> by YuHui
  (<a href='https://codepen.io/alvinmi'>@alvinmi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 参考资料

- 前端九部 - 入门者手册 2019：https://www.yuque.com/fe9/basic
- 阮一峰 - FlexBox 布局的最简单表单：http://www.ruanyifeng.com/blog/2018/10/flexbox-form.html
- 可替代元素：https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element
- https://www.cnblogs.com/winter-cn/archive/2013/05/11/3072929.html