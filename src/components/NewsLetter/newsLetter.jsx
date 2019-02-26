import React from 'react';
import {
  Input, MainDiv, Button, InnerDiv, H2,
} from './style';

const h2Style = { display: 'flex', flexDirection: 'column-reverse' };

const newsLetter = () => (
  <MainDiv id="news-letter" className="translate center">
    <InnerDiv className="translate-child">
      <form
        style={{ display: 'flex', alignItems: 'center' }}
        action="https://insidecircus.us19.list-manage.com/subscribe/post?u=036d872cdf0bcccc8ed5d9174&amp;id=09663e7cde"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <H2 style={h2Style}>
Suscríbete a la newsletter
        </H2>
        <Input type="email" placeholder="Tu correo electrónico" name="EMAIL" id="mce-EMAIL" required />
        <Button type="submit">
          <p>
          Suscribirse
          </p>
        </Button>
      </form>
    </InnerDiv>
  </MainDiv>
);

export default newsLetter;
