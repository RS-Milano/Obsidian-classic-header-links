import {Plugin} from 'obsidian';

export default class ClassicHeaderLinks extends Plugin {

	async onload() {
		const search = "-";
		const replaceWith = " ";
		let payLoad = () => {
			const allLinks = Array.from(document.getElementsByTagName("a"));
			allLinks.forEach((currLink) => {
				let target_attribute = currLink.getAttribute("data-href");
				if (target_attribute !== null) {
					currLink.setAttribute("data-href", target_attribute.split(search).join(replaceWith));
				};
			});
		};
		this.registerDomEvent(document, "click", payLoad);
	}
}
