function toButton(btn) {
  const meta = `
    data-type='button'
    data-value='${JSON.stringify(btn.value)}'
    `;
  return `
    <div class="button ${btn.active && "active"}" ${meta}>
        <i class="material-icons" ${meta}>${btn.ico}</i>
    </div>
    `;
}

export function createToolbar(state) {
  const buttons = [
    {
      ico: "format_align_left",
      active: state["textAlign"] === "left",
      value: { textAlign: "left" },
    },
    {
      ico: "format_align_center",
      active: state["textAlign"] === "center",
      value: { textAlign: "center" },
    },
    {
      ico: "format_align_right",
      active: state["textAlign"] === "right",
      value: { textAlign: "right" },
    },
    {
      ico: "format_bold",
      active: state["fontWeight"] === "bold",
      value: { fontWeight: state["fontWeight"] === "bold" ? "normal" : "bold" },
    },
    {
      ico: "format_italic",
      active: state["fontStyle"] === "italic",
      value: {
        fontStyle: state["fontStyle"] === "italic" ? "normal" : "italic",
      },
    },
    {
      ico: "format_underline",
      active: state["textDecoration"] === "underline",
      value: {
        textDecoration:
          state["textDecoration"] === "underline" ? "none" : "underline",
      },
    },
  ];

  return buttons.map(toButton).join("");
}
