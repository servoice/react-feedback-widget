import { useEffect, Children, cloneElement } from 'react';

export default function ServoiceFeedback({ children, config }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const servoiceScript = document.createElement('script');
      servoiceScript.src =
        'http://localhost:7800/dist/servoice-feedback-widget.js';
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
    <>
      {Children.map(children, (child) =>
        cloneElement(child, { 'data-servoice-trigger': true }),
      )}
    </>
  );
}
