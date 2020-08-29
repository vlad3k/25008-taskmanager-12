import AbstractView from "./abstract";

export default class TaskListView extends AbstractView {
  _getTemplate() {
    return `<div class="board__tasks"></div>`;
  }
}
