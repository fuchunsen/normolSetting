// 解决获取css样式的兼容问题
function getStyle(ele,s){
	// ele 元素 s 属性
	if(ele.currentStyle==undefined){
		var style = window.getComputedStyle(ele,null)[s];
		return style;

	}else{
		var style = ele.currentStyle[s];
		return style;
	}
}

// 删除元素
function deleteElement(ele){
	ele.parentNode.removeChild(ele);
}

// 在元素前追加元素
function insertElement(a,b){
	b.parentNode.insertBefore(a,b);
}

// 获取屏幕的滚动条滚动高度
function getScrollTop(){
	if(document.documentElement.scrollTop == 0){
		return body.scrollTop;
	}else{
		return document.documentElement.scrollTop;
	}
}

//获取某一元素文档坐标位置
function getPosition(obj){
	var ot = obj.offsetTop;
	var parent = obj.parentNode;
	while(parent.nodeName!="BODY"){
		var pos = getStyle(parent,"position");
		var width = parseInt(getStyle(parent,"borderTopWidth"))
		if (pos=="absolute"||pos=="relative") {
			ot+=parent.offsetTop+width;
		};
	parent= parent.parentNode;
	}
	return ot;
}

//兼容滚轮事件
function mouseWheel(obj,upcb,downcb){
	if('onmousewheel' in window){
		obj.addEventListener('mousewheel',callback);
	}else{
		obj.addEventListener('DOMMouseScroll',callback);
	}
	function callback(e){
		if(e.wheelDelta > 0 || e.detail < 0){
			upcb.call(this);
		}else if(e.wheelDelta < 0 || e.detail > 0){
			downcb.call(this);
		}
	}
}