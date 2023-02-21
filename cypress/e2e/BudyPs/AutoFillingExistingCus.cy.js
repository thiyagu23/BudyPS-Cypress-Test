import Login from "../../PageObjects/LoginPage";

describe("Checking Existing customer in dropdown", () => {
  beforeEach(() => {
    //Login
    cy.visit("login");
    const ln = new Login();
    ln.setUserName("Manager");
    ln.setPassword("Avan!12345");
    ln.clickSubmit();
  });

  it("After Clicking Exiting Customer, Customers should List in dropdown Page", () => {
    cy.xpath(
      "//button[@class='ant-btn ant-btn-text ant-btn-icon-only hp-mobile-sidebar-button']"
    ).click();
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();
    cy.xpath(
      "//li[@class='ant-menu-item ant-menu-item-only-child ant-menu-item-selected-in-active']//a[normalize-space()='Opportunity']"
    ).click();
    cy.get(".hp-float-right > .ant-btn").click();
    cy.get(".ant-switch-handle").click();
    cy.get("#basic_customerCode").type("Thiyagu");
    cy.xpath("//div[contains(text(),'Thiyagu - CUS0046')]").click();
  });
});
