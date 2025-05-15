const countdown = () => {
  const end = new Date("2026-05-03T00:00:00").getTime();
  const now = new Date().getTime();
  const diff = end - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "🎂 Już masz 18 lat!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
};

setInterval(countdown, 1000);
