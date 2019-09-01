import wretch from 'wretch';

import { NEWSLETTER_ENDPOINT } from '../config';

interface IValidateEmailParams {
  email: string;
}

export class SignUpApi {
  public static subscribeNewsletter(subscribeNewsletterParams: IValidateEmailParams) {
    return wretch()
      .url(NEWSLETTER_ENDPOINT)
      .post(subscribeNewsletterParams)
      .res();
  }
}
