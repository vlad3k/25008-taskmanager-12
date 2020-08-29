import AbstractView from "./abstract";

export default class NoTask extends AbstractView {
  _getTemplate() {
    return `<p class="board__no-tasks">Click «ADD NEW TASK» in menu to create your first task</p>`;
  }
}
