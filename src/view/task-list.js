import AbstractView from "./abstract.js";

export default class TaskListView extends AbstractView {
  _getTemplate() {
    return `<div class="board__tasks"></div>`;
  }
}
