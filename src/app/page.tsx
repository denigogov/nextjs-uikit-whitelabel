// "use client";

import Test from "@/components/Test";
import Button from "@/whitelabel/src/atoms/button/A-Button";

export default function Home() {
  return (
    <>
      <h1>Whitelabel component</h1>
      {/* <Button label="SomeLabel" size="large" type="danger" /> */}

      <Button label="Whitelabel button" size="small" style="danger" />
      <Test />
    </>
  );
}
