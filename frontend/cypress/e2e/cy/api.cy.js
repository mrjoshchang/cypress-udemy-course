describe("API stuff", () => {
  beforeEach(() => {
    cy.request("GET", "http://localhost:3001/playground/todos").then(
      ({ status, body }) => {
        expect(status).to.eq(200);
        expect(body[0]).to.have.keys(["id", "task"]);
        cy.wrap(body.slice(-1)[0]).as("mostRecentTask");
      }
    );
  });

  it("get tasks", () => {
    cy.request("GET", "http://localhost:3001/playground/todos").then(
      ({ status, body }) => {
        expect(status).to.eq(200);
        expect(body[0]).to.have.keys(["id", "task"]);
      }
    );
  });

  it("add a new task", () => {
    const taskName = "Eat Pizza";
    cy.request("POST", "http://localhost:3001/playground/todos", {
      task: taskName,
    }).then(({ status, body }) => {
      expect(status).to.eq(200);
    });
    cy.visit(Cypress.config("baseUrl") + "playground/todo-list");
    cy.get("ul li").should("contain.text", taskName);
  });

  it("edit last task", () => {
    cy.get("@mostRecentTask").then((task) => {
      const oldTaskName = task.task;
      const newTaskName = "Eat Pepperoni Pizza";

      cy.request("PUT", `http://localhost:3001/playground/todos/${task.id}`, {
        id: task.id,
        task: newTaskName,
      }).then(({ status, body }) => {
        expect(status).to.eq(200);
      });
      cy.visit(Cypress.config("baseUrl") + "playground/todo-list");
      cy.get("ul li").should("not.contain.text", oldTaskName);
      cy.get("ul li").should("contain.text", newTaskName);
    });
  });

  it("delete the last task", () => {
    cy.get("@mostRecentTask").then((task) => {
      cy.request(
        "DELETE",
        `http://localhost:3001/playground/todos/${task.id}`
      ).then(({ status, body }) => {
        expect(status).to.eq(200);
        body.map((taskItem) => expect(taskItem.task).to.not.eq(task.task));
      });
      cy.visit(Cypress.config("baseUrl") + "playground/todo-list");
      cy.get("ul li").should("not.contain.text", task.task);
    });
  });
});
