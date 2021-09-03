/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import { ServoiceFeedback } from '../src';

const baseBtn = <button type="button">Test Btn</button>;
const config = {
  servId: 'test12345',
  userEmail: 'marty@test.com',
  userFirstName: 'Marty',
  userLastName: 'Test',
};

const renderWidgetButton = () =>
  render(
    <ServoiceFeedback config={config}>{baseBtn}</ServoiceFeedback>,
  );

test('insert script tag and clone child', () => {
  const { baseElement } = renderWidgetButton();
  expect(baseElement).toMatchSnapshot();
});

test('append data-servoice-trigger to button child', () => {
  renderWidgetButton({
    children: (
      <button data-servoice-trigger="true" type="button">
        Test Btn
      </button>
    ),
  });

  const testBtn = screen.getByRole('button');
  expect(testBtn).toHaveAttribute('data-servoice-trigger', 'true');
});
