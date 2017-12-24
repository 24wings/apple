import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs } from '@angular/http';
@Injectable()
export class ApiService {
  serverIp = 'http://192.168.1.105';

  Get(url: string, options?: RequestOptionsArgs) {
    return this.http.get(`${this.serverIp}${url}`, options).toPromise().then(rtn => { let result = rtn.json(); return result.ok ? result.data : alert(result.data); })
  }
  Post(url: string, body?: any, options?: RequestOptionsArgs) {
    return this.http.post(`${this.serverIp}${url}`, body, options).toPromise().then(rtn => { let result = rtn.json(); return result.ok ? result.data : alert(result.data); });
  }

  Delete(url: string, options?: RequestOptionsArgs) {
    return this.http.delete(`${this.serverIp}${url}`, options).toPromise().then(rtn => { let result = rtn.json(); return result.ok ? result.data : alert(result.data); });
  }

  Put(url: string, body, options?: RequestOptionsArgs) {
    return this.http.put(`${this.serverIp}${url}`, body, options).toPromise().then(rtn => { let result = rtn.json(); return result.ok ? result.data : alert(result.data); });
  }
  /** base64数据 */
  url2Qrcode(url: string): Promise<string> {
    return this.http.post(`${this.serverIp}/api.url2Qrcode.go`, { url }).toPromise().then(rtn => { let result = rtn.json(); return result.ok ? result.data : alert(result.data); })
  }

  async checkAuthCode(phone: string, code: string): Promise<boolean> {
    return await this.Post('/sale.checkAuthCode.go', { code, phone });
  }
  /**发送验证码 */
  async  getAuthCode(phone: string) {
    return await this.Post('/sale.signupAuthCode.go', { phone });
  }

  constructor(public http: Http) { }

}
