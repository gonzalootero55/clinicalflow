export default function playNotificationSound() {
  const audio = new Audio('/notification.mp3');

  audio.volume = 0.4;

  audio.play().catch(() => {
    // El navegador puede bloquear la reproducción si el usuario
    // todavía no interactuó con la página.
  });
}
