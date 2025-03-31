const starPoints = document.querySelectorAll(".star-point");
const messageElement = document.getElementById("message");
const modal = new bootstrap.Modal(document.getElementById('endModal'));
var count = 0;

starPoints.forEach((point) => {
  point.addEventListener("click", function handler(e) {
    const pointId = point.id;
    point.setAttribute("fill", "#113154");
    const popover = bootstrap.Popover.getInstance(point);
    popover.show();

    point.removeEventListener("click", handler);
    count++;
    if (count === 7) {
      modal.show();
    }
  });
});

var popoverList = [...starPoints].map(
  (el) =>
    new bootstrap.Popover(el, {
      container: "body",
      trigger: "manual",
      boundary: "document",
      fallbackPlacements: [],
      modifiers: [{ name: "flip", enabled: false }],
      html: true,
    })
);
