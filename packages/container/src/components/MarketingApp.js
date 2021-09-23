import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

export default function MarketingApp() {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
}
