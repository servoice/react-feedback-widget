# SerVoice React Feedback Widget

The react wrapper for the [SerVoice](https://servoice.io) feedback widget. Easily collect and organize feedback from your visitors and users.

## Installation

npm

```bash
npm i react-feedback-widget
```

## Usage

### Import the component:

```js
import { ServoiceFeedback } from 'react-feedback-widget';
```

### Set your config:

```js
const config = {
  servId: '1111111',
  servPID: 'kjh34kl2jh4kj234',
  userEmail: 'test@feedbackisgreat.com',
  userFirstName: 'David',
  userLastName: 'Groechel',
};
```

| Key           | Value                                  | Required |
| ------------- | -------------------------------------- | -------- |
| servId        | Your SerVoice portal Id                | Yes      |
| servPID       | The SerVoice project Id                | Yes      |
| userEmail     | The identified user in your app        | Optional |
| userFirstName | The first name of the identitfied user | Optional |
| userLastName  | The last name of the identified user   | Optional |

### Wrap your component

```js
<ServoiceFeedback config={config}>
  <button type="button">Feedback?</button>
</ServoiceFeedback>
```

> Note: There can only be one child element and it must emit a click event

## Full Example

```js
import { ServoiceFeedback } from 'react-feedback-widget';

function App() {
  const config = {
    servId: '1111111',
    servPID: 'kjh34kl2jh4kj234',
    userEmail: 'test@feedbackisgreat.com',
    userFirstName: 'David',
    userLastName: 'Groechel',
  };
  return (
    <div className="App">
      <ServoiceFeedback config={config}>
        <button type="button">Feedback</button>
      </ServoiceFeedback>
    </div>
  );
}

export default App;
```

## About

This project is maintained by David Groeche and [SerVoice](https://servoice.io).
