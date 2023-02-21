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

  it("Adding Tasks", () => {
    //sidebar
    cy.xpath(
      "//button[@class='ant-btn ant-btn-text ant-btn-icon-only hp-mobile-sidebar-button']"
    ).click();

    // clicking tasks
    cy.xpath("(//a[normalize-space()='Tasks'])[1]").click({ force: true });

    // clicking add task button
    cy.get(".ant-space-item > .ant-btn").click();

    // subject
    cy.get("input[placeholder='Enter Subject']").type("Test");

    // Assignee
    cy.get(".ant-select-selection-item").click();
    cy.get(
      "div[title='manager user'] div[class='ant-select-item-option-content']"
    ).click();

    // dueDate
    cy.get("#basic_dueDate").click().type("2023-03-28").type("{enter}");

    // status
    cy.get("#basic_status").click();
    cy.get(
      "div[title='Open'] div[class='ant-select-item-option-content']"
    ).click();

    //priority
    cy.get("#basic_priority").click();
    cy.get(
      "div[title='High'] div[class='ant-select-item-option-content']"
    ).click();

    // description
    cy.get("#basic_description").type("Test Description");

    //favorite
    cy.get("#basic_favourite").check();

    // create tasks
    cy.get(".ant-modal-footer > .ant-btn").click().wait(2000);
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
  });

  it("verifying tasks while User Updating using Edit Option.", () => {
    //sidebar
    cy.xpath(
      "//button[@class='ant-btn ant-btn-text ant-btn-icon-only hp-mobile-sidebar-button']"
    ).click();

    // clicking tasks
    cy.xpath("(//a[normalize-space()='Tasks'])[1]").click({ force: true });

    // clicking my open task
    cy.get("#rc-tabs-0-tab-2 > div").click();

    // selecting edit button
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(3) > li:nth-child(1) > a:nth-child(1)"
    ).click();

    // editing the subject
    cy.get("input[placeholder='Enter Subject']").clear().type("Test 1");

    // Updating the task
    cy.xpath(
      "(//button[@class='ant-btn ant-btn-primary ant-btn-block hp-bg-success-1 hp-border-color-success-1'])[1]"
    )
      .click()
      .wait(2000);
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
  });
});
