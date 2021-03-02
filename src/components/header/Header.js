import { defaultTitle } from "../../constants";
import { $ } from "../../core/dom";
import { ExcelComponent } from "../../core/ExcelComponent";
import { changeTitle } from "../../redux/actions";

export class Header extends ExcelComponent {
  static className = "excel__header";

  constructor($root, options) {
    super($root, {
      name: "Header",
      listeners: ["input"],
      ...options,
    });
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle;
    return `<input type='text 'class="input" value="${title}"></input>
    <div>
    <div class="button">
        <i class="material-icons">delete</i>
    </div>
    <div class="button">
        <i class="material-icons">exit_to_app</i>
    </div>`;
  }

  onInput(event) {
    const $target = $(event.target);
    this.$dispatch(changeTitle($target.text()));
  }
}
