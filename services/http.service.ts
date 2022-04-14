import axios from "axios";

export default class HttpService {
  public static async post(url: string, data: unknown, headers?: any) {
    try {
      return await axios.post(url, data, { headers });
    } catch (error) {
      console.error("Error", url, error);
    }
  }
  public static async get(url: string, headers?: any) {
    try {
      return await axios.get(url, { headers });
    } catch (error) {
      console.error("Error", url, error);
    }
  }
}
