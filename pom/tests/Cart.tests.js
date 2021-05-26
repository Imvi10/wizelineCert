import {CONSTANTS} from   "../data/Constants";
import LoginPage   from   '../pages/LoginPage'
import HomePage    from   '../pages/HomePage'
import SharedHeaderPage from '../pages/SharedHeaderPage'
import { t , Role} from 'testcafe';


fixture('Cart feature test')

export const standardUser = Role(CONSTANTS.URL, async t => {
      await LoginPage.login(CONSTANTS.VALID_USER.USERNAME,CONSTANTS.VALID_USER.PASSWORD)
}, { preserveUrl:true } );

test("Validate user navigates to the shoping cart", async t =>{
    await t
        .useRole(standardUser)
        .expect(SharedHeaderPage.aCartLink.exists).ok();
    await t.click(SharedHeaderPage.aCartLink);
    await t.expect(SharedHeaderPage.divHeader.innerText).eql(CONSTANTS.TEXT_LOCATORS.SHOPPING_CART_TITLE);

})

test("Add a single item to the shoping cart", async t =>{
    await t
        .useRole(standardUser)
        .expect(SharedHeaderPage.aCartLink.exists).ok();
    await HomePage.addItem();
    await t.expect(SharedHeaderPage.badgeQtyProducts.innerText).eql(CONSTANTS.TEXT_LOCATORS.QTY1);
})

test("Add multiple items to the shoping cart", async t =>{
    await t
        .useRole(standardUser)
        .expect(SharedHeaderPage.aCartLink.exists).ok();
    await HomePage.addItem();
    await t.expect(SharedHeaderPage.badgeQtyProducts.innerText).eql(CONSTANTS.TEXT_LOCATORS.QTY1);
    await HomePage.addItem();
    await t.expect(SharedHeaderPage.badgeQtyProducts.innerText).eql(CONSTANTS.TEXT_LOCATORS.QTY2);

})
