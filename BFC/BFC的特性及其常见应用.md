### BFC的特性及其常见应用

- BFC（Block Formatting Context——块格式化上下⽂）是Web⻚ ⾯的可视化CSS渲染的⼀部分。它是布局过程中⽣成块级盒⼦的区 域，也是浮动元素与其他元素的交互限定区域。简单来说，BFC是⼀ 个独⽴的渲染区域，它遵循⼀些渲染规则

#### BFC的渲染规则

- BFC在Web⻚⾯上是⼀个独⽴的容器，容器内外互不影响 
- 和标准⽂档流⼀样，BFC内的元素垂直⽅向的边距会发⽣重叠
-  BFC不会与浮动元素的盒⼦重叠 
- 计算BFC⾼度时即使⼦元素浮动也参与计算

#### 如何创建BFC

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

#### BFC的应⽤场景

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