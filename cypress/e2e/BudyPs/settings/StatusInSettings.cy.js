import Login from "../../../PageObjects/LoginPage";

describe("Add new status in settings and check if it reflecting in document", () => {
  beforeEach(() => {
    //Login
    cy.visit("login");
    const ln = new Login();
    ln.setUserName("Manager");
    ln.setPassword("Avan!12345");
    ln.clickSubmit();
    //sidebar
    cy.xpath(
      "//button[@class='ant-btn ant-btn-text ant-btn-icon-only hp-mobile-sidebar-button']"
    ).click();
    // clicking settings
    cy.xpath("(//a[normalize-space()='Settings'])[1]").click({ force: true });
    //clicking opportunity
    cy.get(":nth-child(3) > .ant-menu-submenu-title").click();
  });

  it("adding new status", () => {
    //clicking status
    cy.get(" a[href='/settings/status']").click();
    //click new status
    cy.get(
      '[style="margin-left: -20px; margin-right: -20px; row-gap: 0px;"] > :nth-child(1) > .ant-btn'
    ).click();
    // add status
    cy.get("#name").type("status test");

    // allow edit
    cy.get('#allowEdit').click()
    cy.get("div[title='Yes'] div[class='ant-select-item-option-content']").click()

    // allow copy 
    cy.get('#allowCopyTo').click()
    cy.get("body > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").click()
    
    // click save
    cy.get(".ant-modal-footer > :nth-child(1)").click();
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
  });
  it.only("adding new status", () => {
    //clicking status
    cy.get(" a[href='/settings/status']").click();
    //click new status
    cy.get(
      `tbody tr:nth-child(9) td:nth-child(6) div:nth-child(1) div:nth-child(1) a:nth-child(1)`
    ).click();
    // add status
    cy.get("#name").clear().type("status test update");

    // click save
    cy.get(".ant-modal-footer > :nth-child(1)").click();
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
  });
});
