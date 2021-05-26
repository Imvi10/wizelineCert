import {CONSTANTS} from   "../data/Constants";
import { Selector } from 'testcafe';
import { t } from 'testcafe';

class SharedHeaderPage{

  constructor(){
    this.aCartLink = Selector('a.shopping_cart_link');
    this.badgeQtyProducts = Selector(".shopping_cart_badge");
    this.divHeader = Selector('div.header_secondary_container>span.title');
    this.btnLateralMenu = Selector('#react-burger-menu-btn');
    this.aLogout = Selector('#logout_sidebar_link');
  }

  async logout(){
    await t
      .click(this.btnLateralMenu)

      await t.
          expect(this.aLogout.innerText).eql(CONSTANTS.TEXT_LOCATORS.LOGOUT)
      await t.
          click(this.aLogout)
  }


}

export default new SharedHeaderPage();
