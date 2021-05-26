import { Selector } from 'testcafe';
import { t } from 'testcafe';

class CartPage{

  constructor(){
    this.btnCheckout = Selector('#checkout');
  }

}

export default new CartPage();
