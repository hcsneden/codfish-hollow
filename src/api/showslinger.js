import axios from 'axios';
import DOMPurify from "dompurify";
const responseJSON = require('./response.json')

export const getShowData = async () => {
	
	try{
	// const result = await axios.get('http://localhost:3001/shows');
	// const mySafeHTML = DOMPurify.sanitize(result.data, {
	// 	ALLOWED_TAGS: ["h1", "p", "span", "a", "img", "div"],
	// 	ALLOWED_ATTR: ["style"]
	//   });

	//   var htmlObject = document.createElement('div');
	//   htmlObject.innerHTML = mySafeHTML;
	//   var fragment = document.createDocumentFragment(); 
	//   fragment.appendChild( htmlObject ); 
	//   console.log(htmlObject)
	//   const matches = document.querySelectorAll("div > div > div > div");
	//   const matchesAray = Array.from(matches)
	//   //const text = matchesAray.map(innerText =>)
	//   console.log(matchesAray)
	//   console.log(responseJSON)
	return responseJSON
	} catch(e){
		console.log('error ', e)

		
	}
}