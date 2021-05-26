import {CONSTANTS} from   "../data/Constants";
import LoginPage   from   '../pages/LoginPage'
import HomePage    from   '../pages/HomePage'
import SharedHeaderPage from '../pages/SharedHeaderPage'
import CheckoutPage from '../pages/CheckoutPage'
import CartPage from '../pages/CartPage'
import { t , Role} from 'testcafe';


fixture('Cart feature test')

export const standardUser = Role(CONSTANTS.URL, async t => {
      await LoginPage.login(CONSTANTS.VALID_USER.USERNAME,CONSTANTS.VALID_USER.PASSWORD)
}, { preserveUrl:true } );

test.only("Continue with missing mail information", async t =>{
    await t
        .useRole(standardUser)
        .expect(SharedHeaderPage.aCartLink.exists).ok();
    await t.click(SharedHeaderPage.aCartLink);
    await t.expect(SharedHeaderPage.divHeader.innerText).eql(CONSTANTS.TEXT_LOCATORS.SHOPPING_CART_TITLE);
    await t.click(CartPage.btnCheckout);
    await t.expect(CheckoutPage.txtFirstName.exists).ok();
    await CheckoutPage.fillInformation(CONSTANTS.INFORMATION.FIRST_NAME, CONSTANTS.INFORMATION.LAST_NAME,null);
    await t.click(CheckoutPage.btnContinue);
    await t.expect(CheckoutPage.errorMsg.innerText).eql(CONSTANTS.TEXT_LOCATORS.POSTAL_CODE_REQURIED);

})

test("Fill user's information", async t =>{
    await t
        .useRole(standardUser)
        .expect(SharedHeaderPage.aCartLink.exists).ok();
    await t.click(SharedHeaderPage.aCartLink);
    await t.expect(SharedHeaderPage.divHeader.innerText).eql(CONSTANTS.TEXT_LOCATORS.SHOPPING_CART_TITLE);
    await t.click(CartPage.btnCheckout);
    await t.expect(CheckoutPage.txtFirstName.exists).ok();
    await CheckoutPage.fillInformation(CONSTANTS.INFORMATION.FIRST_NAME, CONSTANTS.INFORMATION.LAST_NAME,CONSTANTS.INFORMATION.ZIP_CODE);
    await t.click(CheckoutPage.btnContinue);
    await t.expect(SharedHeaderPage.divHeader.innerText).eql(CONSTANTS.TEXT_LOCATORS.CHECKOUT_OVERVIEW_TITLE);
})

test("Final order items", async t =>{
    await t
        .useRole(standardUser)
        .expect(SharedHeaderPage.aCartLink.exists).ok();
    await HomePage.addItem();
    await t.click(SharedHeaderPage.aCartLink);
    await t.expect(SharedHeaderPage.divHeader.innerText).eql(CONSTANTS.TEXT_LOCATORS.SHOPPING_CART_TITLE);
    await t.click(CartPage.btnCheckout);
    await t.expect(CheckoutPage.txtFirstName.exists).ok();
    await CheckoutPage.fillInformation(CONSTANTS.INFORMATION.FIRST_NAME, CONSTANTS.INFORMATION.LAST_NAME,CONSTANTS.INFORMATION.ZIP_CODE);
    await t.click(CheckoutPage.btnContinue);
    await t.expect(SharedHeaderPage.divHeader.innerText).eql(CONSTANTS.TEXT_LOCATORS.CHECKOUT_OVERVIEW_TITLE);
    await t.expect(CheckoutPage.productName.innerText).eql(CONSTANTS.TEXT_LOCATORS.PRODUCT_NAME);

})

test("Final order items", async t =>{
    await t
        .useRole(standardUser)
        .expect(SharedHeaderPage.aCartLink.exists).ok();
    await HomePage.addItem();
    await t.click(SharedHeaderPage.aCartLink);
    await t.expect(SharedHeaderPage.divHeader.innerText).eql(CONSTANTS.TEXT_LOCATORS.SHOPPING_CART_TITLE);
    await t.click(CartPage.btnCheckout);
    await t.expect(CheckoutPage.txtFirstName.exists).ok();
    await CheckoutPage.fillInformation(CONSTANTS.INFORMATION.FIRST_NAME, CONSTANTS.INFORMATION.LAST_NAME,CONSTANTS.INFORMATION.ZIP_CODE);
    await t.click(CheckoutPage.btnContinue);
    await t.expect(SharedHeaderPage.divHeader.innerText).eql(CONSTANTS.TEXT_LOCATORS.CHECKOUT_OVERVIEW_TITLE);
    await t.expect(CheckoutPage.productName.innerText).eql(CONSTANTS.TEXT_LOCATORS.PRODUCT_NAME);
})

test("Complete a purchase", async t =>{
    await t
        .useRole(standardUser)
        .expect(SharedHeaderPage.aCartLink.exists).ok();
    await HomePage.addItem();
    await t.click(SharedHeaderPage.aCartLink);
    await t.expect(SharedHeaderPage.divHeader.innerText).eql(CONSTANTS.TEXT_LOCATORS.SHOPPING_CART_TITLE);
    await t.click(CartPage.btnCheckout);
    await t.expect(CheckoutPage.txtFirstName.exists).ok();
    await CheckoutPage.fillInformation(CONSTANTS.INFORMATION.FIRST_NAME, CONSTANTS.INFORMATION.LAST_NAME,CONSTANTS.INFORMATION.ZIP_CODE);
    await t.click(CheckoutPage.btnContinue);
    await t.expect(SharedHeaderPage.divHeader.innerText).eql(CONSTANTS.TEXT_LOCATORS.CHECKOUT_OVERVIEW_TITLE);
    await t.expect(CheckoutPage.productName.innerText).eql(CONSTANTS.TEXT_LOCATORS.PRODUCT_NAME);
    await t.click(CheckoutPage.btnFinish)
    await t.expect(CheckoutPage.h2ThanksForYourOrder.innerText).eql(CONSTANTS.TEXT_LOCATORS.THANKS_TITLE);
})
