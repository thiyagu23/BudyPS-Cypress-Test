import Login from "../../PageObjects/LoginPage";

describe("Create an opportunity for new customer", () => {
  beforeEach(() => {
    //Login
    cy.visit("login");
    const ln = new Login();
    ln.setUserName("Manager");
    ln.setPassword("Avan!12345");
    ln.clickSubmit();
  });

  it("Create an opportunity for new customer test", () => {
    // clicking sidebar
    cy.xpath(
      "//button[@class='ant-btn ant-btn-text ant-btn-icon-only hp-mobile-sidebar-button']"
    ).click();

    //clicking sales
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();

    // clicking opportunity
    cy.xpath(
      "//li[@class='ant-menu-item ant-menu-item-only-child ant-menu-item-selected-in-active']//a[normalize-space()='Opportunity']"
    ).click();

    // selecting editing opportunity
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(10) > td:nth-child(10) > div:nth-child(1) > button:nth-child(1)"
    ).click();

    // editing opportunity description
    cy.get("#basic_opprName").clear().type("Test opportunity");

    // updating button
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click().wait(2000)
    cy.get('.ant-modal-confirm-btns > .ant-btn').click();

    // back to list
    cy.get('.ant-space > :nth-child(3) > .ant-btn').click().wait(2000)
    cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
    
  });
});
