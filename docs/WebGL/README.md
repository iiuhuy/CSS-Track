# WebGL

WebGL 与普通的 web 网页开发不同?

## 普通的网页

掌握

- HTML
- JavaScript 
- CSS
- 前端工程化...

就能进行开发。

例如在 HTML 画一个矩形:

```HTML
<div class="rectangle"></div>
```

```css
.rectangel {
  width: 150px;
  height: 100px;
  background: #666
}
```

画一个圆形：

```html
<div class="circle"> </div>
```

```css
.circle {
  width: 100px;
  height: 100px;
  background: #777;
  border-radius: 50%;
}
```

三角形：

```html
<!-- triangle -->
<div class="triangles"> </div>
```
```css
.triangles {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #777;
}
```

## SVG 

```html
<svg> 
  <rect
    x="10"
    y="20"
    width="150"
    height="100"
  />
</svg>
```

svg 圆形的样式

```html
<svg> 
  <circle
    cx="60"
    cy="60"
    r="50"
  />
</svg>
```

```css
circle {
  fill: orange;
  stroke: midnightblue;
  stroke-width: 5;
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="svg-circle" src="//codepen.io/alvinmi/embed/jRBzXo/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/alvinmi/pen/jRBzXo/'>svg-circle</a> by YuHui
  (<a href='https://codepen.io/alvinmi'>@alvinmi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

使用 SVG 就和 HTML 一样。

## Canvas & WebGL 

- HTML，需要会使用 Canvas，Canvas 不是基于 XML 的；
- JavaScript，设置 canvas 大小，获取 WebGL 的上下文，对顶点的坐标、颜色、法向量等信息进行处理；
- GLSL(着色器语言)，配合 JavaScript 实现 3D 效果；
- 3D 数学知识，向量，矩阵之间的表示和运算。在 WebGL 中顶点位置的 坐标系转换、光照效果等等；
- 图形学知识。


例如在 WebGL 中画一个矩形：

<iframe height="265" style="width: 100%;" scrolling="no" title="Example" src="//codepen.io/alvinmi/embed/QPprQj/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/alvinmi/pen/QPprQj/'>Example</a> by YuHui
  (<a href='https://codepen.io/alvinmi'>@alvinmi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

WebGL 学习入门我是看 《WebGL 编程指南》，[我的 WebGL 学习笔记](https://alvinmi.github.io/Developer-notes/frontend/WebGL/)， 先跟着书上的打基础，然后做练习。