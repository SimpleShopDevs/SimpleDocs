// Docsify plugin default values
let i18n = {
	text: "Last Modify",
	formatUpdated: "{YYYY}/{MM}/{DD}",
	whereToPlace: "bottom",
};

// Docsify plugin functions
function plugin(hook, vm) {
	const config = vm.config.timeUpdater;
	let whereToPlace = String(config.whereToPlace).toLowerCase();
	hook.beforeEach(function (html) {
		if (config?.text) {
			const textValue = config.text;
			if (typeof textValue === "string") {
				i18n.text = textValue;
			} else {
				Object.keys(textValue).some(function (match) {
					const isMatch = location.href.indexOf(match) > -1;
					i18n.text = isMatch ? textValue[match] : textValue;
					return isMatch;
				});
			}
		}
		let text = container(i18n.text);
		switch (whereToPlace) {
			case "top":
				return text + "\n\n" + html;
			case "bottom":
				return html + "\n\n" + text;
			default:
				return html + "\n\n" + text;
		}
	});
}

function container(text) {
	return `<div align='right' width='200px' style='color:gray;'>${text} {docsify-updated}</div>`;
}

// Docsify plugin options
window.$docsify = window.$docsify || {};
// https://docsify.js.org/#/configuration?id=formatupdated
// https://github.com/lukeed/tinydate#patterns
window.$docsify.formatUpdated = window.$docsify["timeUpdater"]
	? window.$docsify["timeUpdater"].formatUpdated
	: i18n.formatUpdated;
window.$docsify.plugins = [plugin].concat(window.$docsify.plugins || []);
// Usage:
// window.$docsify = {
//   timeUpdater: {
//     text: ">last update time: {docsify-updated}",
//     formatUpdated: '{YYYY}/{MM}/{DD}',
//     whereToPlace: "bottom" // top || bottom
//   }
// }
