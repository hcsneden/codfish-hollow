import axios from 'axios';
import DOMPurify from "dompurify";

export const getShowData = async () => {
	
	try{
	const result = await axios.get('http://localhost:3001/shows');
	const mySafeHTML = DOMPurify.sanitize(result.data, {
		ALLOWED_TAGS: ["h1", "p", "span", "a", "img", "div"],
		ALLOWED_ATTR: ["style"]
	  });
	return {__html: mySafeHTML}
	} catch(e){
		console.log('error ', e)
	}
}