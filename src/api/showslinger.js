import axios from 'axios';
import DOMPurify from "dompurify";
const responseJSON = require('./response.json')

export const getShowData = async () => {

	try {
		const result = await axios.get('http://localhost:3001/shows');

		const mySafeHTML = DOMPurify.sanitize(result.data, {
			ALLOWED_TAGS: ["body", "div", "img"]
		});

		var htmlObject = document.createElement('div');
		htmlObject.innerHTML = mySafeHTML;
		var fragment = document.createDocumentFragment();
		fragment.appendChild(htmlObject);


		var testElements = document.getElementsByClassName('w-tick-item');
		var testDivs = Array.prototype.filter.call(testElements, function (testElement) {
			return testElement.nodeName === 'DIV';
		});

		const a = testDivs.map(x => x.innerHTML)

		console.log(a)
		//   const matches = document.querySelectorAll("div > div > div > div");
		//   const matchesAray = Array.from(matches)
		//   //const text = matchesAray.map(innerText =>)
		//   console.log(matchesAray)
		//   console.log(responseJSON)

		return { __html: mySafeHTML }
	} catch (e) {
		console.log('error ', e)
	}
}