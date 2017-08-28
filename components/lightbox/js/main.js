(function() {
	var LightBox = function() {
		var self = this;
		//创建遮罩和弹出框
		this.popupMask = document.createElement("div");
		this.popupMask.id = "global-lightbox-mask";
		this.popupWin = document.createElement("div");
		this.popupWin.id = "global-lightbox-popup";
		this.renderDom();
	};
	LightBox.prototype = {
		renderDom: function() {
			this.popupWin.innerHTML = `		<div class="lightbox-pic-view">
		<span class="lightbox-btn lightbox-btn-prev"><</span>
			<img class="lightbox-image" src="img/003.jpg">
		<span class="lightbox-btn lightbox-btn-next">></span>
		</div>
		<div class="lightbox-pic-caption">
			<div class="lightbox-pic-caption-area">
				<p class="lightbox-pic-desc">图片标题</p>
				<span class="lightbox-cur-index">当前索引：1 of 4</span>
			</div>
			<span class="lightbox-close-btn">X</span>
		</div>`;
			document.body.appendChild(this.popupMask);
			document.body.appendChild(this.popupWin);
		}
	}
	window.LightBox = LightBox;
})();