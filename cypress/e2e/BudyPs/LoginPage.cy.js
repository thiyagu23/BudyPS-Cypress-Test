import Login from "../../PageObjects/LoginPage";

describe("PS Login Test", () => {
  it("should pass the login test", () => {
    //Login
    cy.visit("login");
    const ln = new Login();
    ln.setUserName("Manager");
    ln.setPassword("Avan!12345");
    ln.clickSubmit();

    cy.title().should("eq", "Budy - Professional Services");
    cy.xpath("//img[contains(@class,'hp-mb-24')]")
      .should("be.visible")
      .and("exist");
    cy.get("h2").should("have.text", "Budy Professional Services");
    cy.xpath("//span[@aria-label='eye-invisible']//*[name()='svg']").click();

    //LogOut
    cy.xpath("//a[@href='/expenseclaim']//*[name()='svg']").click({force: true})
    cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
  });

});
