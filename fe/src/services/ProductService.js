import axios from 'axios';
import {convertJsonBase64} from "../utils/Client";

export default class ProductService {
	static getAllProducts = async (requsetData) => {
		const base64Data = convertJsonBase64(requsetData);
	  let Response = null;
	  Response = await axios.get(`/api/v1/products/${base64Data}`);
	  return Response;
	};

	static getAllFilters = async () => {
	  let Response = null;
	  Response = await axios.get(`/api/v1/filters`);
	  return Response;
	};
}
