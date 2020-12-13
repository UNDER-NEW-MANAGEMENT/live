import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import useInterval from './utils/useInterval';

interface IHeadProps {
  titleToggle?: boolean;
}

export default function Head(props: IHeadProps) {
  const [titleToggle, setTitleToggle] = useState(props.titleToggle != null ? props.titleToggle : false);
  useInterval(() => setTitleToggle(!titleToggle), 5000);

  return (
    <Helmet>
      <title>NEW MANAGEMENT ©®™</title>
      <meta name="description" content="Break power. Break complicity. Don't let the fire of the struggle extinguish your fire for expression.." />
      <link rel="icon" href="/favicon-circle.png" type="image/png" />
    </Helmet>
  );
}
