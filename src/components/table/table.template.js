const CODES = {
  A: 65,
  Z: 90,
};

function createCell(row) {
  return function (_, col) {
    return `
     <div 
      class="cell" 
      contenteditable
      data-col='${col}'
      data-type='cell'
      data-id='${row}:${col}'>
    </div>`;
  };
}

function createColumn(col, index) {
  return `
  <div class="column" data-type="resizable" data-col="${index}"> 
    ${col}
    <div class="col-resize" data-resize='col'></div>
  </div>`;
}

function createRow(index, content) {
  const resize = index
    ? `<div class="row-resize" data-resize='row'></div>`
    : "";
  return `
    <div class="row" data-type="resizable">
     <div class="row-info">${index ? index : ""}${resize}</div>
     <div class="row-data">${content}</div>
    </div>
    `;
}

export function createTable(rowsCount = 35) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
    .fill("")
    .map((el, index) => String.fromCharCode(CODES.A + index))
    .map(createColumn)
    .join("");

  rows.push(createRow(null, cols));

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount).fill("").map(createCell(row)).join("");

    rows.push(createRow(row + 1, cells));
  }
  return rows.join("");
}
