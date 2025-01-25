openTab('overview-tab');

function openTab(tabName) {	
	const tabLinks = document.getElementsByClassName("tab-link");
	for (const link of tabLinks) {
	link.classList.remove("active");
	}

	const tabContents = document.getElementsByClassName("tab-content");
	for (const content of tabContents) {
	content.classList.remove("active");
	}

	const tab = document.getElementById(tabName);
	tab.classList.add("active");

	const tabLink = document.querySelector(`[onclick="openTab('${tabName}')"]`);
	tabLink.classList.add("active");
}