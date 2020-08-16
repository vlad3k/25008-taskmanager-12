import {createElement} from "../utils";

export default class Board {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return `<section class="board container"></section>`;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
