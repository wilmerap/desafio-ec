import React from "react";
import Helmet from "react-helmet";

export function TitlePage(props) {
  const { title } = props;
  return (
    <div>
      <Helmet>
        <title>
          {title}
        </title>
        <link rel="icon" type="image/png" href="favicon.ico" />
      </Helmet>
    </div>
  );
}
