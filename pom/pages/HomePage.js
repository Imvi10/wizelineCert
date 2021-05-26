import {CONSTANTS} from   "../data/Constants";
import {t, Selector} from 'testcafe';
import SharedHeaderPage from '../pages/SharedHeaderPage'
import CartPage from '../pages/CartPage'



class HomePage{

  constructor(){
    this.btnAddToCartArticle = Selector(".btn_primary.btn_small.btn_inventory");
    this.btnRemoveFromCartArticle = Selector('.pricebar > #remove-sauce-labs-backpack.btn');
  }


  async addItem(){
    await t.click(this.btnAddToCartArticle);
    await t.expect(SharedHeaderPage.badgeQtyProducts.exists).ok();
}

}

export default new HomePage();
