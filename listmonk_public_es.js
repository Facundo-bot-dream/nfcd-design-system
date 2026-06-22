/* ============================================================
   NFCD · Listmonk — Español para PÁGINAS PÚBLICAS
   (baja, gestión de suscripción, confirmaciones)
   Pegar en: Settings → Appearance → Public → Custom JavaScript
   Luego: Save.
   ============================================================ */
(function () {
  // Inglés (tal como aparece) → Español (cálido y simple)
  var MAP = {
    "Unsubscribe": "Darse de baja",
    "Do you want to unsubscribe from this mailing list?":
      "¿Querés dejar de recibir nuestros correos?",
    "Unsubscribe from all future e-mails.":
      "No deseo recibir más correos de Naturaleza de la Fuerza.",
    "Manage preferences": "Gestionar mis preferencias",
    "Privacy and data": "Privacidad y datos",
    "Export your data": "Exportar mis datos",
    "A copy of your data will be e-mailed to you.":
      "Recibirás una copia de tus datos por correo.",
    "Wipe your data": "Borrar mis datos",
    "Delete all your subscriptions and related data permanently.":
      "Eliminar todas tus suscripciones y datos de forma permanente.",
    "Continue": "Continuar",
    "Confirm": "Confirmar",
    "Subscribe": "Suscribirme",
    "Subscription": "Suscripción",
    "Your subscription has been confirmed.": "¡Tu suscripción fue confirmada!",
    "You have been unsubscribed.": "Listo, dejaste de recibir nuestros correos.",
    "You will no longer receive e-mails from this list.":
      "Ya no recibirás más correos de esta lista.",
    "Sorry, something went wrong.": "Lo sentimos, algo salió mal.",
    "Email": "Correo",
    "Name": "Nombre"
  };

  function translate() {
    // 1) Nodos de texto
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var t = node.nodeValue.trim();
      if (t && MAP[t]) node.nodeValue = node.nodeValue.replace(t, MAP[t]);
    });
    // 2) Botones e inputs
    document.querySelectorAll("button, input[type=submit], input[type=button]").forEach(function (b) {
      var t = (b.value || b.textContent || "").trim();
      if (MAP[t]) { if (b.value) b.value = MAP[t]; else b.textContent = MAP[t]; }
    });
    // 3) Título de la pestaña
    if (MAP[document.title.trim()]) document.title = MAP[document.title.trim()];
    document.documentElement.lang = "es";
  }

  if (document.readyState !== "loading") translate();
  else document.addEventListener("DOMContentLoaded", translate);
})();
