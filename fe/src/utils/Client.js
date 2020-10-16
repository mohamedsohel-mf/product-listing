import Axios from 'axios';
import {Const} from "../app/Constants";

/**
 * Created a common axios instance
 */
const axiosInstance = Axios.create({
  baseURL: Const.getUrl(),
});
/**
 * Converts the data to base-64
 * @param data
 */
const convertJsonBase64 = (data) => btoa(JSON.stringify(data));
export {
  axiosInstance,
  convertJsonBase64,
};
