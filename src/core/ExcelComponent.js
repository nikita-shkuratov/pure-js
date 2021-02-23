import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || "";
    this.observer = options.observer;
    this.unsubscribers = []

    this.prepare();
  }
  //настройка компонента до init
  prepare() {}
  //возвращает шаблон компонента
  toHTML() {
    return "";
  }
  //уведомляем слушателей про event
  $emit(event, ...args){
    this.observer.emit(event, ...args)
  }
  //подписываемся на event
  $on(event, fn){
    const unsub = this.observer.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }
  //Инициализируем компонент добавляем слушателей
  init() {
    this.initDOMListeners();
  }
  //Удаляем компонент удаляем слушателей
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub())
  }
}
