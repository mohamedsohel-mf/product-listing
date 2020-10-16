import axios from 'axios';
import {axiosInstance, convertJsonBase64} from "../utils/Client";

export default class ProductService {
	static getAllProducts = async (requsetData) => {
		const base64Data = convertJsonBase64(requsetData);
		let Response = null;
	  Response = await axios.get(`/api/v1/products/${base64Data}`);
	  return Response;
	};
}
