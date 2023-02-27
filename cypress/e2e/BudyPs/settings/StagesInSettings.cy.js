import Login from "../../../PageObjects/LoginPage";

describe("stages in settings and check if it reflecting in document", () => {
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
    //clicking stages
    cy.xpath("//a[normalize-space()='Stages']").click();
  });

  it("Adding Stage name in settings", () => {
    //add new stage
    cy.get(".ant-btn.ant-btn-primary.hp-my-12").click();
    // stage
    cy.get("#name").type("Stage 1");
    // step
    cy.get("#stepId").type("12");
    // closing percent
    cy.get("#cloPrcnt").type("15");
    // active
    cy.get(".ant-select-selection-item").click();
    cy.get(
      "div[title='Yes'] div[class='ant-select-item-option-content']"
    ).click();
    // ok
    cy.get(".ant-modal-footer > :nth-child(1)").click();
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
    // close
    cy.get(".ant-btn-background-ghost").click();
  });
  it("Edit an already existing Stage name in settings", () => {
    // edit button
    cy.get(':nth-child(7) > :nth-child(6) > .ant-space > [style=""]').click();
    // stage
    cy.get("#name").clear().type("edited");
    //update button
    cy.get('.ant-modal-footer > :nth-child(1)').click()
    cy.get('.ant-modal-confirm-btns > .ant-btn').click()
  });
  it.only("changing inactive source", () => {
     //add new stage
     cy.get(".ant-btn.ant-btn-primary.hp-my-12").click();
     // stage
     cy.get("#name").type("Stage inactive");

     // step
     cy.get("#stepId").type("12");
     // closing percent
     cy.get("#cloPrcnt").type("15");
     // active
     cy.get(".ant-select-selection-item").click();
     cy.get(
       "div[title='No'] div[class='ant-select-item-option-content']"
     ).click();
     // ok
     cy.get(".ant-modal-footer > :nth-child(1)").click();
     cy.get(".ant-modal-confirm-btns > .ant-btn").click();
     // close
     cy.get(".ant-btn-background-ghost").click();
  })
});
