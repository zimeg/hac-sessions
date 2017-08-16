
function sessionClicker() {
	$("button[name='session-renew']").click();
}

setInterval(sessionClicker, 30000);