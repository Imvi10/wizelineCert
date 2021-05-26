import { Selector } from 'testcafe';
import { t } from 'testcafe';

class LoginPage{

  constructor(){
    this.txtUserName = Selector('#user-name');
    this.txtPassword = Selector('#password');
    this.btnLogin = Selector('#login-button');
    this.divErrorLogin = Selector('div.error-message-container');
  }
  async login(username , password){
    await t
        if(username != null){
        await t.typeText(this.txtUserName, username,{ paste:true})
      }
      if(password != null){
        await t.typeText(this.txtPassword, password, {paste:true})

      }
        await t.click(this.btnLogin)
  }

}

export default new LoginPage();
