import Login from "../../PageObjects/LoginPage";

describe("Verify follow up comments and histories", () => {
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
  });

  it("adding multiple followup comments", () => {
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();
    cy.xpath(
      "//li[@class='ant-menu-item ant-menu-item-only-child ant-menu-item-selected-in-active']//a[normalize-space()='Opportunity']"
    ).click();
    cy.get('.hp-float-right > .ant-btn').click()

    // additonal option
    cy.get('.hp-p2-body').click();
    cy.get('#basic_country').click()
    cy.get("div[title='Bangladesh'] div[class='ant-select-item-option-content']").scrollIntoView().click();
    
  });

  
})