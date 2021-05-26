import { Selector } from 'testcafe';
import { t } from 'testcafe';

class CheckoutPage{

  constructor(){
    // YOUR INFORMATION SECTION
    this.txtFirstName = Selector('#first-name');
    this.txtLastName = Selector('#last-name');
    this.txtZIPCode = Selector('#postal-code');
    this.btnContinue = Selector('#continue');
    this.errorMsg = Selector('.error-message-container.error');
    //OVERVIEW SECTION
    this.productName = Selector('.inventory_item_name');
    this.btnFinish = Selector('#finish');

    //COMPLETE SECTION
    this.h2ThanksForYourOrder = Selector('#checkout_complete_container>h2');
  }


  async fillInformation(firstName , lastName, ZIPCode){
    if(firstName != null ){
      await t.typeText(this.txtFirstName, firstName,{ paste:true});
    }
    if(lastName != null ){
      await t.typeText(this.txtLastName, lastName,{ paste:true});
    }
    if(ZIPCode != null ){
      await t.typeText(this.txtZIPCode, ZIPCode,{ paste:true});
    }
  }

}

export default new CheckoutPage();
