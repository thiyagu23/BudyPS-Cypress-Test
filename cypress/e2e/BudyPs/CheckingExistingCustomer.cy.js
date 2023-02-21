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

    //Opportunity Description
    cy.get("#basic_opprName").type("I want new opportunity");

    //Start Date
    cy.get("#basic_startDate").click();
    cy.xpath("//a[normalize-space()='Today']").click();

    // End Date
    cy.get("#basic_endDate").click();
    cy.xpath(
      "//div[@class='ant-picker-dropdown ant-picker-dropdown-placement-bottomRight ']//a[@class='ant-picker-today-btn'][normalize-space()='Today']"
    ).click();

    // Source
    cy.get("#basic_sourceCode").click();
    cy.xpath("//div[contains(text(),'Email')]").click();

    // Qualification
    cy.get("#basic_qualification").click();
    cy.xpath(
      "//div[@class='ant-select-item-option-content'][normalize-space()='Hot']"
    ).click();

    // Opportunity Stage
    cy.get("#basic_stageCode").click();
    cy.xpath("//div[contains(text(),'Opportunity Identified')]").click();

    // Employee Responsible
    cy.get("#basic_empRespCode").click();
    cy.xpath("//div[contains(text(),'Anandkumar')]").click();

    // Vertical
    cy.get("#basic_verticalCode").click();
    cy.xpath("//div[contains(text(),'Retail')]").click();

    // Opportunity Value
    cy.get("#basic_opprValue").type(1000);
    cy.get("#basic_currency").click();
    cy.xpath(
      "//div[@class='ant-select-item-option-content'][normalize-space()='INR']"
    ).click();

    // Next Follow up Date
    cy.xpath(
      "//body[1]/div[1]/section[1]/section[1]/main[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[1]"
    )
      .click()
      .type("2023-02-23")
      .type('{enter}');

    // cy.xpath("//td[@title='2024-02-10']//div[@class='ant-picker-cell-inner'][normalize-space()='10']", {force: true}).click();

    //comments
    cy.get("#basic_comments").type("This is a comment");
    cy.xpath(
      "//button[@class='ant-btn ant-btn-primary hp-bg-success-1 hp-border-color-success-1']"
    ).click();
  });
});
