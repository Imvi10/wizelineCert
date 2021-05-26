import {CONSTANTS} from   "../data/Constants";
import LoginPage   from   '../pages/LoginPage'
import HomePage    from   '../pages/HomePage'
import SharedHeaderPage from '../pages/SharedHeaderPage'
import { t , Role} from 'testcafe';

export const standardUser = Role(CONSTANTS.URL, async t => {
      await LoginPage.login(CONSTANTS.VALID_USER.USERNAME,CONSTANTS.VALID_USER.PASSWORD)
}, { preserveUrl:true } );

export const invalidUser = Role(CONSTANTS.URL, async t => {
      await LoginPage.login(CONSTANTS.INVALID_USER.USERNAME,CONSTANTS.INVALID_USER.PASSWORD)
}, { preserveUrl:true } );

fixture('Checkout feature test')

test("Login with a valid user", async t =>{
  await t
      .useRole(standardUser)
      .expect(SharedHeaderPage.aCartLink.exists).ok();
})

test("Login with an invalid user", async t =>{
  await t
      .useRole(invalidUser)
      .expect(LoginPage.divErrorLogin.exists).ok();
})

test("Logout from product's page", async t =>{
  await t
      .useRole(standardUser)
      .expect(SharedHeaderPage.aCartLink.exists).ok();

      await SharedHeaderPage.logout()
      await t.expect(LoginPage.txtUserName.exists).ok();
})
