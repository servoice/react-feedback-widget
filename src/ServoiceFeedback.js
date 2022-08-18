import { cloneElement, isValidElement } from 'react';
import useReactFeedbackWidget from './useReactFeedbackWidget';

export default function ServoiceFeedback({ children, config }) {
  useReactFeedbackWidget(config);

  if (!children) return null;

  if (isValidElement(children)) {
    return (
      <>
        {cloneElement(children, {
          'data-servoice-trigger': true,
          onClick: () => window.Servoice.btnClicked(),
        })}
      </>
    );
  }
}
