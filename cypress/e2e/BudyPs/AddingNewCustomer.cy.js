import Login from "../../PageObjects/LoginPage";

describe("Adding New Customers", () => {
    it("Should Add the New Customer", () => {
        //Login
        cy.visit("login");
        const ln = new Login();
        ln.setUserName("Manager");
        ln.setPassword("Avan!12345");
        ln.clickSubmit();
 
        cy.get("b").contains("Expense List");
        cy.xpath(
          "//button[@class='ant-btn ant-btn-text ant-btn-icon-only hp-mobile-sidebar-button']"
        ).click();
        cy.xpath(
          "//div[@class='ant-drawer-body']//div[@class='ant-row ant-row-space-between ant-row-middle hp-sidebar-footer hp-pb-16 hp-px-16 hp-bg-color-dark-100']//div[@class='ant-col']//div[@class='hp-d-flex hp-align-items-center hp-justify-content-between']//div//span[@class='ant-avatar ant-avatar-circle ant-avatar-image hp-cursor-pointer hp-mr-16'][normalize-space()='M']"
        ).contains("M");
        // cy.xpath("//button[@aria-label='Close']").click()
        // cy.get('.ant-drawer-body > .ant-row > .ant-col > .hp-d-flex > :nth-child(2) > .hp-d-block').should("eq","MANAGER")
        cy.get(
          ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
        ).click();
        // cy.get('[data-menu-id="rc-menu-uuid-83249-2-opportunity"] > .ant-menu-title-content > a').click()
        cy.xpath(
          "//li[@class='ant-menu-item ant-menu-item-only-child ant-menu-item-selected-in-active']//a[normalize-space()='Opportunity']"
        ).click();
        cy.get(".hp-float-right > .ant-btn").click();
        cy.get(":nth-child(3) > .ant-btn").click();
        cy.get(
          ":nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
        ).click();
        cy.xpath("//div[@class='ant-select-item-option-content']").click();
        cy.get("#basic_customerName").type("Thiyagu");
        cy.get(
          ".hp-mb-24 > :nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
        ).click();
        cy.xpath("//div[contains(text(),'Customers')]").click();
        cy.get(
          ".hp-mb-24 > :nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
        ).click();
        
        cy.xpath(
          "//div[@class='ant-select-item-option-content'][normalize-space()='INR']"
        ).click();
        cy.get(
          ":nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #basic_email"
        ).type("thiyagaraj.muthuraman@avaniko.com");
        cy.get(
          ":nth-child(6) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #basic_phone"
        ).type(7448402162);
        cy.get(
          ":nth-child(7) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
        ).click();
        cy.xpath("//div[contains(text(),'Anandkumar')]").click();
        cy.get(
          ":nth-child(8) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
        ).click();
        cy.xpath("//div[contains(text(),'AMC')]").click();
    
        cy.get("#firstName").type("Thiyagaraj");
        cy.get("#lastName").type("Muthuraman");
        cy.get("#position").type("Technical Consultant");
        cy.get("#email").type("thiyagaraj.muthuraman@avaniko.com");
        cy.get("#mobile").type(7448402162);
        cy.get(':nth-child(6) > .ant-space > [style=""] > .ant-btn').click();
        cy.get("#rc-tabs-3-tab-2").click();
        cy.get(
          '#rc-tabs-3-panel-2 > .ant-form > [style="margin-left: -17px; margin-right: -17px; row-gap: 0px;"] > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
        ).click();
    
        cy.xpath(`//div[contains(text(),'Billing')]`).click();
        cy.get("#name").type("Thiyagu");
        cy.get("#street").type("Ganapathy Colony");
        cy.get("#block").type("352");
        cy.get("#city").type("chennai");
        cy.get("#zipcode").type(600032);
        cy.get(
          '#rc-tabs-3-panel-2 > .ant-form > [style="margin-left: -17px; margin-right: -17px; row-gap: 0px;"] > :nth-child(8) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
        )
          .click()
          .type("india");
        cy.xpath(`//div[contains(text(),'India')]`).click();
        cy.get(
          '#rc-tabs-3-panel-2 > .ant-form > [style="margin-left: -17px; margin-right: -17px; row-gap: 0px;"] > :nth-child(7) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
        )
          .click()
          .type("tamil nadu");
        cy.xpath(`//div[contains(text(),'Tamil Nadu')]`).click();
        // cy.get('#gstin').type(1254567590)
        // cy.get(
        //   ':nth-child(10) > .ant-space > [style=""] > .ant-btn > span'
        // ).click();
        // cy.get(".ant-modal-footer > .ant-row > :nth-child(1) > .ant-btn").click();
        // cy.get(".ant-modal-confirm-content").contains("Customer added succesfully");
        // cy.get(".ant-modal-confirm-btns > .ant-btn").click();
      });
})