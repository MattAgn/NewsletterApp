import React from 'react';
import { fireEvent, waitForElement, render } from 'react-native-testing-library';
import fetchMock from 'fetch-mock';

import { NEWSLETTER_ENDPOINT } from '../../../../complex-version/api/config';
import { Home } from '../Home';
import { wording } from '../../../../utils/wording';

describe('[Page] Home', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display succesful message on successful subscribe', async () => {
    // Setup
    fetchMock.post(NEWSLETTER_ENDPOINT, 200);
    const page = render(<Home />);
    // What the user sees
    const EmailInput = page.getByPlaceholder(wording.emailPlaceholder);
    const ValidateButton = page.getByText(wording.validateEmail);
    // What the user does
    fireEvent.changeText(EmailInput, 'hello@bam.co');
    fireEvent.press(ValidateButton);
    // What feedback the user should expect
    const SuccessMessage = await waitForElement(() =>
      page.queryByText(wording.subscriptionSuccessful)
    );
    expect(SuccessMessage).toBeTruthy();
  });

  it('should display errror message on failed subscribe', async () => {
    // Setup
    fetchMock.post(NEWSLETTER_ENDPOINT, 400);
    const page = render(<Home />);
    // What the user sees
    const EmailInput = page.getByPlaceholder(wording.emailPlaceholder);
    const ValidateButton = page.getByText(wording.validateEmail);
    // What the user does
    fireEvent.changeText(EmailInput, 'hello@bam.co');
    fireEvent.press(ValidateButton);
    // What feedback the user should expect
    const ErrorMessage = await waitForElement(() => page.queryByText(wording.basicError));
    expect(ErrorMessage).toBeTruthy();
  });
});
