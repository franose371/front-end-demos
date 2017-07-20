var showList = function(item) {
	if (item.nextElementSibling.style.display == "none") {
		item.nextElementSibling.style.display = "block";
	} else item.nextElementSibling.style.display = "none";
}

//使用循环给链接绑定onclick事件，设置display值
var lists = document.getElementsByClassName("lists");

for (var i = 0; i < lists.length; i++) {
	lists[i].nextElementSibling.style.display = "none";
	lists[i].onclick = function(e) {
		showList(this);
	}
}