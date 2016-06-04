/* @flow */

import React from 'react';

type Props = {
  text: string;
}

function HelloWorld(props: Props) {
  const { text } = props;
  return (
    <div>
      {text}
    </div>
  );
}

export default HelloWorld;
