var enabled = true;
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		return {cancel: enabled };
	},
	{urls: blocked_domains},
	["blocking"]
);