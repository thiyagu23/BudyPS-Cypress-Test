import Login from "../../../PageObjects/LoginPage";

describe("Add new Vertical in settings and check if it reflecting in document", () => {
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

  it("adding new vertical", () => {
    //clicking vertical
    cy.xpath("//a[normalize-space()='Vertical']").click();
    //click new vertical
    cy.get(
      '[style="margin-left: -20px; margin-right: -20px; row-gap: 0px;"] > :nth-child(1) > .ant-btn'
    ).click();
    // add vertical
    cy.get("#name").type("Vertical test");
    // click save
    // cy.get(".ant-modal-footer > :nth-child(1)").click();
    // cy.get(".ant-modal-confirm-btns > .ant-btn").click();

    cy.get('.ant-modal-footer > :nth-child(1)').click()
    cy.get('.ant-modal-confirm-btns > .ant-btn').click()
  });
  it.only("adding vertical inactive", () => {
    //clicking vertical
    cy.xpath("//a[normalize-space()='Vertical']").click();
    //click new vertical
    cy.get(
      '[style="margin-left: -20px; margin-right: -20px; row-gap: 0px;"] > :nth-child(1) > .ant-btn'
    ).click();
    // add vertical
    cy.get("#name").type("Vertical test inactive");
        
    // inactive
    cy.get('.ant-select-selection-item').click();
    cy.get("div[title='No'] div[class='ant-select-item-option-content']").click();
    
    // click save
    cy.get(".ant-modal-footer > :nth-child(1)").click();
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
  });
});
