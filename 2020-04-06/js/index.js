(function () {
	let navList = document.querySelectorAll('.navbar-nav .nav-item'),
		product = document.querySelector('.product'),
		cardList = null,
		data = null;

	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.status === 200 && xhr.readyState === 4) {
			data = JSON.parse(xhr.responseText);
		}
	}
	xhr.open('GET', './json/product.json', false);
	xhr.send();
	let str = ``;
	for (let i = 0; i < data.length; i++) {
		let item = data[i];
		let {
			id,
			title,
			price,
			time,
			hot,
			img
		} = item;
		str += `<div class="card" data-price='${price}' data-time='${time}' data-hot='${hot}'>
		<img src="${img}" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">${title}</h5>
			<p class="card-text">价格：￥ ${price}</p>
			<p class="card-text">时间：${time}</p>
			<p class="card-text">热度：${hot}</p>
		</div>
	</div>`;
		product.innerHTML = str;
		cardList = product.querySelectorAll('.card');
		for (let j = 0; j < navList.length; j++) {
			let items = navList[j];
			items.flag = -1;
			items.onclick = function () {
				let arr = [...cardList];
				for (let a = 0; a < navList.length; a++) {
					this.flag *= -1;
					let char = 'data-price';
					if (i === 1) {
						char = 'data-time';
					} else if (i === 2) {
						char = 'data-hot';
					} else {
						null;
					}
					arr.sort((a, b) => {
						a = a.getAttribute(char);
						b = b.getAttribute(char);
						if (char === 'data-time') {
							a = a.replace(/-/g, '');
							b = b.replace(/-/g, '');
						}
						return (a - b) * this.flag;
					})
					for (let z = 0; z < arr.length; z++) {
						product.appendChild(arr[z]);
					}
				}
			}
		}
	}
})()