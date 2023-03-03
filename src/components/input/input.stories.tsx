import React from "react";

import { Input } from "./index";

export const Default = (): JSX.Element => {
  return <Input name="default" placeholder="default" />;
};

export const Small = (): JSX.Element => {
  return <Input name="small" size="small" placeholder="small" />;
};

export const Normal = (): JSX.Element => {
  return <Input name="normal" size="normal" placeholder="normal" />;
};

export const Large = (): JSX.Element => {
  return <Input name="large" size="large" placeholder="large" />;
};

export const Label = (): JSX.Element => {
  return <Input name="label" label="label" placeholder="label" />;
};

export const TextHelper = (): JSX.Element => {
  return (
    <Input
      name="textHelper"
      textHelper="text helper"
      placeholder="text helper"
    />
  );
};

export const LabelAndHelper = (): JSX.Element => {
  return (
    <Input
      name="labelAndHelper"
      label="label"
      textHelper="text helper"
      placeholder="label and text helper"
    />
  );
};

export const IsDisabled = (): JSX.Element => {
  return <Input isDisabled name="isDisabled" placeholder="is disabled" />;
};

export const IsReadOnly = (): JSX.Element => {
  return <Input isReadOnly name="isReadOnly" placeholder="is read only" />;
};

export const Email = (): JSX.Element => {
  return <Input name="email" type="email" placeholder="example@email.com" />;
};

export const Password = (): JSX.Element => {
  return <Input name="password" type="password" placeholder="password" />;
};

export const Tel = (): JSX.Element => {
  return <Input name="tel" type="tel" placeholder="+1800123456" />;
};

export const Text = (): JSX.Element => {
  return <Input name="text" type="text" placeholder="text" />;
};

export const Url = (): JSX.Element => {
  return <Input name="url" type="url" placeholder="http://example.email.com" />;
};

export const Number = (): JSX.Element => {
  return <Input name="number" type="number" placeholder="123" />;
};

export const AllInputs = (): JSX.Element => {
  return (
    <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
      <div>
        <div>
          <Label />
        </div>
        <div>
          <TextHelper />
        </div>
        <div>
          <LabelAndHelper />
        </div>
        <div>
          <Default />
        </div>
        <div>
          <Small />
          <Normal />
          <Large />
        </div>
        <div>
          <IsDisabled />
        </div>
        <div>
          <IsReadOnly />
        </div>
        <div>
          <Email />
          <Password />
          <Tel />
          <Text />
          <Url />
          <Number />
        </div>
      </div>
    </form>
  );
};
