# BFC的特性及其常见应用

- BFC（Block Formatting Context——块格式化上下⽂）是Web⻚ ⾯的可视化CSS渲染的⼀部分。它是布局过程中⽣成块级盒⼦的区 域，也是浮动元素与其他元素的交互限定区域。简单来说，BFC是⼀ 个独⽴的渲染区域，它遵循⼀些渲染规则

## BFC的渲染规则

- BFC在Web⻚⾯上是⼀个独⽴的容器，容器内外互不影响 
- 和标准⽂档流⼀样，BFC内的元素垂直⽅向的边距会发⽣重叠
-  BFC不会与浮动元素的盒⼦重叠 
- 计算BFC⾼度时即使⼦元素浮动也参与计算

## 如何创建BFC

MDN web docs现在给出创建BFC的⽅法有以下⼏种

- 根元素或包含根元素的元素 
- 浮动元素（元素的 float 不是 none） 
- 绝对定位元素（元素的 position 为 absolute 或 fixed） 
- ⾏内块元素（元素的 display 为 inline-block） 
- 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为 该值） 
- 表格标题（元素的 display 为 table-caption，HTML表格标题默认为 该值） 
- 匿名表格单元格元素（元素的 display为 table、table-row、 tablerow-group、table-header-group、table-footer-group（分别是 HTML table、row、tbody、thead、tfoot的默认属性）或 inlinetable） 
- overflow 值不为 visible 的块元素 
- display 值为 flow-root 的元素 
- contain 值为 layout、content或 strict 的元素 
- 弹性元素（display为 flex 或 inline-flex元素的直接⼦元素） 
- ⽹格元素（display为 grid 或 inline-grid 元素的直接⼦元素）
- 多列容器（元素的 column-count 或 column-width 不为 auto，包 括 column-count 为 1） 
- column-span 为 all 的元素始终会创建⼀个新的BFC，即使该元素没 有包裹在⼀个多列容器中

## BFC的应⽤场景

- 解决块级元素垂直⽅向的边距重叠问题

```html
<section id="father">
     <style>
 	 	#father {
 			background-color: pink;
 			overflow: hidden;
 		}
 		#father .child {
 		background-color: red;
 		margin: 15px auto 20px;
 	}
 	</style>
 	<div class="child">这是第⼀个div</div>
 	<div class="child">这是第⼆个div</div>
</section> 
```

由于块级元素垂直⽅向的边距会发⽣重叠，第⼀个div和第⼆个div之间的 间距并不是15px加上20px后的35px，⽽是20px（较⼤的margin值）， 为了解决边距重叠的问题，让第两个div之间的间距变成35px，可以在div 外⾯创建⼀个BFC，⽐如：

```html
<div style="overflow:hidden">
 <div class="child">这是第⼆个div</div>
</div>
```

因为BFC是⼀个独⽴的容器，容器内外互不影响，所以这⾥两个div之间的 间距就变成了35px

- 清除浮动

```html
<section id="father">
   <style>
 	  #father {
 		background-color: pink;
 	  }
   	  #father .child {
 		font-size: 58px;
 		float: left;
 	  }
    </style>
    <div class="child">这是⼀个浮动元素</div>
</section>
```

⼦元素浮动后，⽗元素失去了⾼度，为了清除浮动带来的这个影响可以将 ⽗元素设置成⼀个BFC：

```html
#father {
 background-color: pink;
 overflow: auto;
}
```

-  解决元素浮动后发⽣重叠的问题

```html
<section id="father">
 <style>
 	#father {
 	background-color: red; 
 }
 #father .left {
	 background-color: pink;
	 width: 100px;
	 height: 100px;
 	 float: left;
 }
 #father .right {
 	background-color: #ccc;
 	height: 120px;
 }
 </style>
 <div class="left"></div>
 <div class="right"></div>
</section>
```

如图，左边的元素浮动之后，由于脱离标准⽂档流叠在了右边的元素上， 为了让两个元素不重叠，我们把右边的元素设置成BFC：

```html
#father .right {
 background-color: #ccc;
 height: 120px;
 overflow: hidden;
}
```

因为BFC不会与浮动元素的盒⼦重叠，所以这⾥右边的元素就不会叠在左 边的浮动元素下⾯了

# 三栏布局五种方式（column-layout）

## 浮动布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>浮动三栏解决方案</title>
  </head>
  <body>
    <section class="layout float">
      <style media="screen">
        .layout.float .left {
          float: left;
          width: 20%;
          height: 50vh;
          background: #6b98aa;
        }
        .layout.float .center {
          background: #c5c57e;
          height: 100vh;
        }
        .layout.float .right {
          float: right;
          width: 20%;
          background: #8181ca;
        }
      </style>
      <h1>三栏布局</h1>
      <article class="left-right-center">
        <div class="left">
          <h2>左边</h2>
        </div>
        <div class="right">
          <h2>右边</h2>
        </div>
        <div class="center">
          <h2>浮动解决方案</h2>
          <p>
            这是三栏布局的浮动解决方案 这是三栏布局的浮动解决方案
            这是三栏布局的浮动解决方案 这是三栏布局的浮动解决方案
            这是三栏布局的浮动解决方案 这是三栏布局的浮动解决方案
            这是三栏布局的浮动解决方案 这是三栏布局的浮动解决方案
            这是三栏布局的浮动解决方案 这是三栏布局的浮动解决方案
            这是三栏布局的浮动解决方案 这是三栏布局的浮动解决方案
            这是三栏布局的浮动解决方案 这是三栏布局的浮动解决方案
            这是三栏布局的浮动解决方案 这是三栏布局的浮动解决方案
          </p>
        </div>
      </article>
    </section>
  </body>
</html>
```

优点：兼容性好

缺点：浮动元素脱离文档流，要做清除浮动，这个处理不好的话，会带来很多问题，比如父容器高度塌陷等

## 绝对定位布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>绝对定位三栏解决方案</title>
  </head>
  <body>
    <section class="layout absolute">
      <style>
        .layout.absolute .left-center-right > div {
          position: absolute;
        }
        .layout.absolute .left {
          left: 0;
          width: 300px;
          height: 50vh;
          background: #6b98aa;
        }
        .layout.absolute .center {
          left: 300px;
          right: 300px;
          height: 80vh;
          background: #c5c57e;
        }
        .layout.absolute .right {
          right: 0;
          width: 300px;
          height: 50vh;
          background: #7e73af;
        }
      </style>
      <h1>三栏布局</h1>
      <article class="left-center-right">
        <div class="left">
          <h2>左边</h2>
        </div>
        <div class="center">
          <h2>绝对定位解决方案</h2>
          这是三栏布局的绝对定位解决方案 这是三栏布局的绝对定位解决方案
          这是三栏布局的绝对定位解决方案 这是三栏布局的绝对定位解决方案
          这是三栏布局的绝对定位解决方案 这是三栏布局的绝对定位解决方案
          这是三栏布局的绝对定位解决方案 这是三栏布局的绝对定位解决方案
          这是三栏布局的绝对定位解决方案 这是三栏布局的绝对定位解决方案
          这是三栏布局的绝对定位解决方案 这是三栏布局的绝对定位解决方案
        </div>
        <div class="right">
          <h2>右边</h2>
        </div>
      </article>
    </section>
  </body>
</html>
```

优点：快捷，设置很方便，而且也不容易出问题。

缺点：容器脱离了文档流，后代元素也脱离了文档流，高度未知的时候，会有问题，这就导致了这种方法的有效性和可使用性是比较差的。

## flexbox布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>flex布局三栏解决方案</title>
  </head>
  <body>
    <section class="layout flexbox">
      <style>
        .layout.flexbox {
          margin-top: 20px;
        }
        .layout.flexbox .left-center-right {
          display: flex;
        }
        /* 左边300px，剩下的宽度由中间和右边各占一份：flex：1 */
        .layout.flexbox .left {
          width: 300px;
          background: #6b98aa;
        }
        /* 中间区域的高度设置，会把左右都拉伸，如何实现左中右不登高？ */
        .layout.flexbox .center {
          flex: 1;
          height: 60vh;
          background: #c5c57e;
        }
        .layout.flexbox .right {
          flex: 1;
          background: #7e73af;
        }
      </style>
      <h1>三栏布局</h1>
      <article class="left-center-right">
        <div class="left">
          <h2>左边</h2>
        </div>
        <div class="center">
          <h2>flexbox解决方案</h2>
          <p>
            flexbox解决方案flexbox解决方案flexbox解决方案flexbox解决方案
            flexbox解决方案flexbox解决方案flexbox解决方案flexbox解决方案
            flexbox解决方案flexbox解决方案flexbox解决方案flexbox解决方案
            flexbox解决方案flexbox解决方案flexbox解决方案flexbox解决方案
          </p>
        </div>
        <div class="right">
          <h2>右边</h2>
        </div>
      </article>
    </section>
  </body>
</html>
```

优点：css3里新出的一个，它就是为了解决上述两种方式的不足出现的，是比较完美的一个。

缺点：IE10开始支持，但是IE10的是`-ms`形式的

## 表格布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>表格布局三栏解决方案</title>
  </head>
  <body>
    <section class="layout table">
      <style>
        .layout.table .left-center-right {
          width: 100%;
          height: 100px;
          display: table;
        }
        .layout.table .left-center-right > div {
          display: table-cell;
        }
        .layout.table .left {
          width: 300px;
          background: #6b98aa;
        }
        .layout.table .center {
          background: #c5c57e;
          height: 50vh;
        }
        .layout.table .right {
          width: 300px;
          background: #7e73af;
        }
      </style>
      <h1>三栏布局</h1>
      <article class="left-center-right">
        <div class="left">
          <h2>左边</h2>
        </div>
        <div class="center">
          <h2>表格布局解决方案</h2>
          表格布局解决方案表格布局解决方案表格布局解决方案布局解决方案
          表格布局解决方案表格布局解决方案表格布局解决方案布局解决方案
          表格布局解决方案表格布局解决方案表格布局解决方案布局解决方案
          表格布局解决方案表格布局解决方案表格布局解决方案布局解决方案
          表格布局解决方案表格布局解决方案表格布局解决方案布局解决方案
        </div>
        <div class="right">
          <h2>右边</h2>
        </div>
      </article>
    </section>
  </body>
</html>
```

优点：兼容性很好，在flex布局不兼容的时候，可以尝试表格布局。当内容溢出时会自动撑开父元素。

缺点：无法设置栏边距；对seo不友好；当其中一个单元格高度超出的时候，两侧的单元格也是会跟着一起变高的，然而有时候这并不是我们想要的效果。

## 网格布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <section class="layout grid">
      <style>
        .layout.grid .left-center-right {
          width: 100%;
          display: grid;
          grid-template-rows: 100px;
          grid-template-columns: 300px auto 300px;
        }
        .layout.grid .left {
          width: 300px;
          background: #6b98aa;
        }
        .layout.grid .center {
          background: #c5c57e;
          height: 50vh;
        }
        .layout.grid .right {
          background: #7e73af;
        }
      </style>
      <h1>三栏布局</h1>
      <article class="left-center-right">
        <div class="left">
          <h2>左边</h2>
        </div>
        <div class="center">
          <h2>网格布局解决方案</h2>
          网格布局解决方案网格布局解决方案网格布局解决方案网格布局解决方案网格布局解决方案
          网格布局解决方案网格布局解决方案网格布局解决方案网格布局解决方案网格布局解决方案
          网格布局解决方案网格布局解决方案网格布局解决方案网格布局解决方案网格布局解决方案
        </div>
        <div class="right">
          <h2>右边</h2>
        </div>
      </article>
    </section>
  </body>
</html>
```

复制

优点：CSS新标准，创建网格布局最强大和最简单的工具

缺点：兼容性不好。IE10+上支持，而且也仅支持部分属性

# DIV箭头和⽓泡

## 样例

传统的实现⽅式都需要⼀副表示箭头的图⽚放在DIV上⽅来实现，例 如新浪微博的相关CSS如下：

![image-20210306183845356](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20210306183845356.png)

## div箭头

*使⽤CSS3的特性，我们不需要图⽚就可以实现更加华丽的效果，这 样做的好处还包括减少本地⽂件系统的读取、节省服务器带宽和连接 数、避免⽂件下载失败带来的错误等等*

实现的原理是：

- 我们可以将箭头看作是⼀个矩形或者菱形的⼀个⻆，使⽤CSS3的属性 transform来实现矩形的旋转 
- 朝上的箭头需要将矩形旋转45度，我们使⽤transform: rotate(45deg)来实现，另外针对不同的浏览器还需要添加不同的 hack，例如Opera的-o-transform、Firefox的-moz-transform

*下⾯以Chrome浏览器为例实现⼀个样例*

### 定义⼀个arrow-shadow样式，内容如下:

```css
.arrow-shadow {
 -webkit-transform:rotate(45deg);
 border:1px solid #AAAAAA;
 height:40px;
 position:absolute;
 width:40px;
}
```

实现的效果：![image-20210306184242807](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20210306184242807.png)

### 为了更加饱满，我们加上CSS3的盒阴影

```css
.arrow-shadow {
 -webkit-transform:rotate(45deg);
 -webkit-box-shadow:0 0 10px 0 #aaa;
 height:40px;
 position:absolute;
 width:40px;
}
```

现在效果如下：![image-20210306184604375](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20210306184604375.png)

### 在外⾯加⼀层DIV控制它的⾼度和宽度

```css
.arrow-outer {
 height:24px;
 overflow:hidden;
 position:absolute;
 width:60px;
}
```

效果如下：![image-20210306184654807](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20210306184654807.png)

### 加上内部箭头和外部容器

现在我们已经有了⼀个漂亮的箭头，但是这还不够，为了表现得更加出 ⾊，我们再加⼀层内部的箭头，然后在外⾯套上容器

⻚⾯结构代码：

```html
<div class="arrow-outer">
 <div class="arrow-shadow"></div>
</div>
<div class="arrow-inner"></div>
```

样式代码：

```css
.arrow-outer {
 position: absolute;
 height: 24px;
 width: 60px;
 overflow: hidden;
}
.arrow-shadow {
 box-shadow: 0 0 10px 0 #aaaaaa;
 -webkit-transform: rotate(45deg);
 transform: rotate(45deg);
 background: none repeat scroll 0 0 #ffffff;
 height: 40px;
 left: 15px;
 position: absolute;
 top: 16px;
 width: 40px;
}
.arrow-inner {
 position: relative;
 left: 10px;
 top: 20px;
 height: 40px;
 width: 40px;
 background: #fff;
 border: 5px solid #ededed;
 -webkit-transform: rotate(45deg);
 transform: rotate(45deg);
}
```

最后完整的效果图：![image-20210306185038478](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20210306185038478.png)

## div⽓泡

⻚⾯开发中常常需要⼀个⽓泡框，还有需要添加圆⻆和指向性尖 ⻆，预览图如下:![image-20210306185232499](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20210306185232499.png)

借助css的伪元素选择器可以实现上述效果。先写上盒⼦，上代码

```html
<div class="element"></div>
```

```css
.element {
 width: 0;
 height: 0;
 border-top: 20px solid red;
 border-right: 20px solid blue;
 border-bottom: 20px solid yellow;
 border-left: 20px solid green;
 }
```

实现效果如下：![image-20210306185422344](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20210306185422344.png)

- 具体的实现原理就是，⼀个盒⼦，作为⼀个块级元素，我们⾸先将它的宽 和⾼都设置成0，再将边框的⼤⼩设置成20px，也就是形成了如上图这样 的四等分三⻆形组成的⼀个正⽅形
- 那我们要得到⼀个⽅向朝上的尖⻆，就必须让上，右，左的三⻆形“隐 形”
-  透明属性可以帮助我们做到这⼀点，透明的背景欺骗了我们的眼睛~让我 们以为他们消失了，实际上它们只是看不⻅了⽽已

将css改为

```css
.element{
 width: 0;
 height: 0;
 border-top: 20px solid transparent;
 border-right: 20px solid transparent;
 border-bottom: 20px solid #727171;
 border-left: 20px solid transparent;
 }
```

效果：![image-20210306185545690](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20210306185545690.png)

⾸先我们定义好外部的盒⼦wrapper

```html
<div class="wrapper"></div>
```

```css
.wrapper {
 width: 200px;
 height: 100px;
 position: relative;
 margin: 100px;
 border: 5px solid #4999ce;
 background-color: #c1d9e9;
 border-radius: 15px;
}
```

效果：![image-20210306185659187](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20210306185659187.png)

然后我们需要为这个盒⼦添加上之前实现的三⻆形 bottom那个三⻆形与 盒⼦颜⾊相同，其余的三⻆形选择“隐形”即可。这⾥可以使⽤伪元 素::before 和 ::after来实现这个效果。这两个元素被默认为⾏内元素， 所以需要更改它们的属性为块级元素,绝对定位。再添加⼀个⼩点的⽩⾊三⻆形遮盖上⾯的三⻆形，使其露出尖⻆边框

```css
.wrapper:before {
 content: '';
 width: 0;
 height: 0;
 border: 20px solid transparent;
 border-bottom-color: #4999ce;
 position: absolute;
 top: 0;
 right: 20%;
 margin-top: -44px;
 }
```

效果：![image-20210306185756227](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20210306185756227.png)

然后再次添加after选择器，⽤它来形成⼀个⽩⾊的三⻆形，并按照之前 的写法把它定位到上边框上去。 这⾥需要特别提醒⼀点，那就是这个⽩ ⾊的⼩三⻆形，要⽐之前的三⻆形更⼩⼀点，⾄于⼤⼩可以⾃⼰调整，出 来的效果可以了就基本完成了

```css
.wrapper:after {
 content: '';
 width: 0;
 height: 0;
 border: 20px solid transparent;
 border-bottom-color: #c1d9e9;
 position: absolute;
 top: 0;
 right: 20%;
 margin-top: -36px;
 }
```

最终效果:![image-20210306185845587](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20210306185845587.png)

## 总结

CSS3、HTML5的发展和完善让我们编写代码更加简便和快捷，实现的效 果也更加漂亮，例如背景的渐变不再需要背景图⽚的平铺就可以通过CSS 代码直接实现，但是有时候需要经过⼀些转换，才能将这些新技术应⽤到 我们常⻅的功能中去，这需要我们多加思考和保持思维的灵感

# CSS变量&CSS常⻅动画合集

## 概述

CSS变量这个重要的 新功能，所有主要浏览器已经都⽀持了。 合理使⽤它，你会发现原⽣ CSS 从此变得异常强⼤。

CSS动画2D常⻅效果有：移动、旋转、缩放、⾃定义关键帧等，合理 使⽤组合，可形成放⼤、缩⼩、变形、旋转、弹跳、脉冲、隐现等各 种效果

### CSS动画推荐 

- ⿏标悬停动画合集 
  - Hover.css 
- 强⼤，在线⽣成 css 动画 
  - Animista 
- ⻬全的CSS3动画库 
  - Animate.css 
- ⼀个更加丰富css动画库,是 Animate CSS的 增强版 
  - Vivify 
- ⼀⼤堆不同动画的集合，总共⼤概有200个 
  - cssanimation.io 
- Magic CSS3 Animations 是 CSS3 动画的包，伴有特殊的效果 
  - MAGIC EFFECTS

*顶部引⼊了font-awesome在线字体图标，不⽤下载⽅便使⽤*

[font-awesome](https://www.runoob.com/font-awesome/fontawesome-tutorial.html)

[font-awesome](https://fontawesome.com/icons?d=gallery&p=2)