import Login from "../../PageObjects/LoginPage";

describe("Create opportunity for existing customers", () => {
  beforeEach(() => {
    //Login
    cy.visit("login");
    const ln = new Login();
    ln.setUserName("Manager");
    ln.setPassword("Avan!12345");
    ln.clickSubmit();
  });

  it("should create", () => {

    //open sidebar
    cy.get(".hp-mr-24 > .ant-btn").click();
    //open sales dropdown tab
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();
    //open sales quota tab

    cy.get("a[href='/salesquotation']").click();

    // click new sales quote button
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > button:nth-child(1) > span:nth-child(2)"
    ).click();

    // get customer drop down list

    cy.get('#basic_customerCode').click();;

    // get customer

    cy.xpath("//div[contains(text(),'C00005 - Acsen HyVeg Pvt Ltd')]").click();;

    // get valid until field

    cy.get("#basic_deliveryDate").click().type("2023-02-28").type("{enter}");

    // reference No field

    cy.get("#basic_numAtCard").click().type("876543");

    // payment terms field

    cy.get("#basic_payTerms").click();

    // select payment terms

    cy.get(
      "div[title='35 Days'] div[class='ant-select-item-option-content']"
    ).click();

    //place of supply

    cy.get("#basic_placeOfSupply").click();

    // select place

      cy.get("div[title='Kerala'] div[class='ant-select-item-option-content']").click();;

    // sales employee

    cy.get("#basic_slpCode").click();

    // select sales employee

    cy.get(
      "div[title='Srikanth'] div[class='ant-select-item-option-content']"
    ).click();

    // get item code field

    cy.get(
      ".ant-col-20 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
    ).click();

    // select item code

    cy.xpath(
      "//div[@class='ant-select-item-option-content'][normalize-space()='0.5MM-10P-ARM ~ Solid Annealed Tinned Copper, PVC Insulated, 10P Armoured, FRLS PVC Sheathed Telephone Cable']"
    ).click();

    // enter price

    cy.get("#price").click({force:true}).type("400");

    // enter discount

    cy.get('#discounts').click({force:true}).type("5");

    // get tax tab

    cy.get(':nth-child(7) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click({force:true});;

    // select tax type

    cy.get(
  "div[title='A-IGST18 - IGST 18%'] div[class='ant-select-item-option-content']"
    ).click();

    // get wharehouse tab

    cy.get(':nth-child(8) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click({force:true});

    // select warehouse

     cy.get("div[title='Service - Chennai'] div[class='ant-select-item-option-content']").click({force:true});

    // project field
    cy.get(':nth-child(9) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click({force:true});

    // select project

    cy.xpath("//div[contains(text(),'AMC - DATA')]").click( );


    // add comments get field
    cy.get('#rc-tabs-0-tab-1').click();

    // enter comments

    cy.get('#basic_comments').click().type("sales quotes for existing customers");
    // // click save quote button

    //  cy.get("body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1) > span:nth-child(2)").click();
  });
});
