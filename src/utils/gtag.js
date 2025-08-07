export const GA_MEASUREMENT_ID = 'G-0YDK5GPJWB'; // Reemplazalo si cambia

export const initGA = () => {
  // Evitar que se agregue dos veces
  if (window.gtag) return;

  // Cargar el script gtag.js
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Configurar el script de configuración
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false }); // lo manejamos manual
  `;
  document.head.appendChild(script2);
};

export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
    });
  }
};