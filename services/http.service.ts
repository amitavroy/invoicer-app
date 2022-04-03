import axios from "axios";

export default class HttpService {
  public static async post(url: string, data: unknown) {
    try {
      return await axios.post(url, data);
    } catch (error) {
      console.error("Error", url, error);
    }
  }
}
