const downloadFile = (url, filename = "") => {
	if (filename.length === 0) filename = url.split("/").pop();
	const req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.responseType = "blob";
	req.onload = function () {
		const blob = new Blob([req.response], {
			type: "application/pdf",
		});

		const isIE = false || !!document.documentMode;
		if (isIE) {
			window.navigator.msSaveBlob(blob, filename);
		} else {
			const windowUrl = window.URL || window.webkitURL;
			const href = windowUrl.createObjectURL(blob);
			const a = document.createElement("a");
			a.setAttribute("download", filename);
			a.setAttribute("href", href);
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		}
	};
	req.send();
};

export default downloadFile;
