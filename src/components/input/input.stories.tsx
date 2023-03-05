import React from "react";

import { Input } from "./index";

const onChange = (text: string | number): void => {
  console.log(text);
};

export const Default = (): JSX.Element => {
  return (
    <Input name="default" placeholder="default" value="" onChange={onChange} />
  );
};

export const Small = (): JSX.Element => {
  return (
    <Input
      name="small"
      size="small"
      placeholder="small"
      value="small"
      onChange={onChange}
    />
  );
};

export const Normal = (): JSX.Element => {
  return (
    <Input
      name="normal"
      size="normal"
      placeholder="normal"
      value="normal"
      onChange={onChange}
    />
  );
};

export const Large = (): JSX.Element => {
  return (
    <Input
      name="large"
      size="large"
      placeholder="large"
      value="large"
      onChange={onChange}
    />
  );
};

export const Label = (): JSX.Element => {
  return (
    <Input
      name="label"
      label="label"
      placeholder="label"
      value=""
      onChange={onChange}
    />
  );
};

export const TextHelper = (): JSX.Element => {
  return (
    <Input
      name="textHelper"
      textHelper="text helper"
      placeholder="text helper"
      value=""
      onChange={onChange}
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
      value=""
      onChange={onChange}
    />
  );
};

export const IsDisabled = (): JSX.Element => {
  return (
    <Input
      isDisabled
      name="isDisabled"
      placeholder="is disabled"
      value="disabled"
      onChange={onChange}
    />
  );
};

export const IsReadOnly = (): JSX.Element => {
  return (
    <Input
      isReadOnly
      name="isReadOnly"
      placeholder="is read only"
      value="read only"
      onChange={onChange}
    />
  );
};

export const Email = (): JSX.Element => {
  return (
    <Input
      name="email"
      type="email"
      placeholder="email"
      value="example@email.com"
      onChange={onChange}
    />
  );
};

export const Password = (): JSX.Element => {
  return (
    <Input
      name="password"
      type="password"
      placeholder="password"
      value="password"
      onChange={onChange}
    />
  );
};

export const Tel = (): JSX.Element => {
  return (
    <Input
      name="tel"
      type="tel"
      placeholder="+1800123456"
      value="+1800123456"
      onChange={onChange}
    />
  );
};

export const Text = (): JSX.Element => {
  return (
    <Input
      name="text"
      type="text"
      placeholder="text"
      value=""
      onChange={onChange}
    />
  );
};

export const Url = (): JSX.Element => {
  return (
    <Input
      name="url"
      type="url"
      placeholder="URL"
      value="http://example.email.com"
      onChange={onChange}
    />
  );
};

export const Number = (): JSX.Element => {
  return (
    <Input
      name="number"
      type="number"
      placeholder="123"
      value="123"
      onChange={onChange}
    />
  );
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
