import React from 'react';
import fetchMock from 'fetch-mock';
import { NEWSLETTER_ENDPOINT } from '../../../api/config';
import { Home } from '../Home';
import { fireEvent, waitForElement } from 'react-native-testing-library';
import { wording } from '../../../../utils/wording';
import { renderPage } from '../../../../utils/test.helper';

describe('[Page] Home', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display succesful message on successful subscribe', async () => {
    // SETUP
    // WHAT THE USER SEES
    // WHAT THE USER DOES
    // WHAT FEEDBACK THE USER SHOULD EXPECT
  });

  it('should display error message on failed subscribe', async () => {
    // SETUP
    // WHAT THE USER SEES
    // WHAT THE USER DOES
    // WHAT FEEDBACK THE USER SHOULD EXPECT
  });
});
