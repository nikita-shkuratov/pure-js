import {$} from '../core/dom';
import {Page} from '../core/page/Page';
import {createRecordsTable} from '../shared/dashboard.functions';

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString();
    return $.create('div', 'db').html(`
        <div class="db__header"><h1>Exel Dashboard</h1></div>
        <div class="db__new">
            <a href="#excel/${now}" class="db__create">New<br/>Table</a>
        </div>
        <div class="db__table db__viev">
            ${createRecordsTable()}
            </div>
        </div>
        `);
  }
}
