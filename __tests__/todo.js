const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

var yest = new Date();
yest.setDate(yest.getDate() - 1).toLocaleString("en-CA");

var thisDay = new Date().toLocaleString("en-CA");

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1).toLocaleString("en-CA");

describe("TodoList", () => {
  beforeAll(() => {
    add({
      title: "todo",
      completed: false,
      dueDate: yest,
    });
  });

  test("U can add new todo here", () => {
    const todoitemsCount = all.length;
    add({
      title: "todo2",
      completed: false,
      dueDate: thisDay,
    });

    add({
      title: "todo3",
      completed: false,
      dueDate: tomorrow,
    });

    expect(all.length).toBe(todoitemsCount + 2);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should check retrieval of overdue items", () => {
    expect(all[0].dueDate).toBe(yest);
  });

  test("Should check retrieval of due thisDay items.", () => {
    expect(all[1].dueDate).toBe(thisDay);
  });

  test("Should check retrieval of due later items.", () => {
    expect(all[2].dueDate).toBe(tomorrow);
  });
});
