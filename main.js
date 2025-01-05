window.onload = function() {
// Funktion, um die Progress-Bars zu animieren
 // Die Timeline und die Punkte holen
    const timelineLine = document.getElementById('timeline-line');
    const timelineRight = document.getElementById('timeline-line-right');
    const timelinePoints = document.querySelectorAll('.timeline-point');
    const timelinePointsRight = document.querySelectorAll('.timeline-point-right');
    const firstPoint = timelinePoints[0];
    const lastPoint = timelinePoints[timelinePoints.length - 1];
    const lastPointRight = timelinePointsRight[timelinePointsRight.length - 1];

    // Hole den Abstand des ersten und letzten Punkts vom oberen Rand des Containers
    const firstPointTop = firstPoint.offsetTop;
    const lastPointTop = lastPoint.offsetTop;
    const lastPointTopRight = lastPointRight.offsetTop;
    const lastPointLeft = lastPoint.offsetLeft;

    // Berechne die Höhe der Linie (Differenz zwischen dem ersten und letzten Punkt)
    const lineHeight = lastPointTop - firstPointTop;
    const lineHeightRight = lastPointTopRight - firstPointTop;

    // Hole das SVG line Element
    const line = timelineLine.querySelector('line');
    const lineRight = timelineRight.querySelector('line');

    // Setze die Höhe der Linie basierend auf der berechneten Höhe
    line.setAttribute('y2', lineHeight);  // y2 ist der Endpunkt der Linie
    lineRight.setAttribute('y2', lineHeightRight);


function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');

  progressBars.forEach((bar) => {
    const skillLevel = bar.getAttribute('data-skill-level');
    const barTop = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Prüfen, ob die Progress-Bar im sichtbaren Bereich ist
    if (barTop < windowHeight) {
      bar.style.width = `${skillLevel}%`; // Setze die Breite entsprechend
      const circle = bar.querySelector('.circle');
      circle.style.transform = 'scale(1)'; // Zeige den Kreis
    }
  });
}

// Event-Listener für Scroll-Event
window.addEventListener('scroll', animateProgressBars);

// Initialer Check, falls die Progress-Bars bereits im sichtbaren Bereich sind
animateProgressBars();

document.getElementById("scrollButton").addEventListener("click", function () {
  // Finde die aktuelle Sektion
  const sections = document.querySelectorAll(".fullscreen-div");
  const currentScroll = window.scrollY;
  const viewportHeight = window.innerHeight;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    if (sectionTop > currentScroll) {
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      break;
    }
  }
});
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".fullscreen-div");
    const lastSection = sections[sections.length - 1];
    const scrollPosition = window.scrollY + window.innerHeight; // Position des unteren Rands des Bildschirms

    const button = document.getElementById("scrollButton");
    if (scrollPosition >= lastSection.offsetTop + lastSection.offsetHeight) {
        // Der Benutzer ist auf der letzten Seite
        button.style.display = "none";  // Button ausblenden
    }
});
}
