import { useEffect, cloneElement } from 'react';

export default function ServoiceFeedback({ children, config }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const servoiceScript = document.createElement('script');
      servoiceScript.src =
        'https://js.servoice.io/servoice-feedback-widget.js';
      servoiceScript.async = true;
      servoiceScript.defer = true;
      servoiceScript.type = 'text/javascript';

      document.body.appendChild(servoiceScript);
      servoiceScript.addEventListener('load', () => {
        window.Servoice.config(config);
        window.Servoice.createWidget();
      });
    }
  }, []);

  return (
    <>{cloneElement(children, { 'data-servoice-trigger': true })}</>
  );
}
