/* eslint-disable consistent-return */
import { useEffect } from 'react';

export default function useReactFeedbackWidget(config) {
  useEffect(() => {
    if (window._rfw_script) return;
    if (typeof window !== 'undefined' && !window._rfw_script) {
      window._rfw_script = true;
      const servoiceScript = document.createElement('script');
      servoiceScript.src =
        'https://js.servoice.io/servoice-feedback-widget.js';
      servoiceScript.defer = true;
      servoiceScript.type = 'text/javascript';
      servoiceScript.id = 'rfw-script';
      document.body.appendChild(servoiceScript);

      servoiceScript.addEventListener('load', () => {
        window.Servoice.config(config);
        window.Servoice.createWidget();
      });
    }
  }, []);
}
