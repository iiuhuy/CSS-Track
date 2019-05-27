# < css-doodle />

一个使用 CSS 绘制图案的 Web 组件。

先来袁川老师的作品压压惊，真滴是艺术。

<iframe height="265" style="width: 100%;" scrolling="no" title="Whirling (Chrome, FF)" src="//codepen.io/yuanchuan/embed/yrobOe/?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/yuanchuan/pen/yrobOe/'>Whirling (Chrome, FF)</a> by yuanchuan
  (<a href='https://codepen.io/yuanchuan'>@yuanchuan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

官方的属性如下图所示：

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190528002740.png"/>

例出了这些，同时也给出了简单的例子。

引用的时候只需要引入 cdn 的链接，或者支持 npm install，就可以使用了。在 HTML 标签中使用特殊的 `<css-doodle></css-doodle>` 标签进行设置。例如：

```
<css-doodle>
  :doodle {
    @grid: 18 / 100vmax;
    background: #0a0c27;
  }
  --hue: calc(180 + 1.5 * @row() * @col());
  background: hsl(var(--hue), 50%, 70%);
  margin: -.5px;
  transition: @r(.5s) ease;
  clip-path: polygon(@pick(
    '0 0, 100% 0, 100% 100%',
    '0 0, 100% 0, 0 100%',
    '0 0, 100% 100%, 0 100%',
    '100% 0, 100% 100%, 0 100%'
  ));
</css-doodle>
```

就能显示出官方的背景 demo 。简直就是炫酷，简单易于上手。

## Grid

## Selectors

## Properties

## Functions

## JS API
