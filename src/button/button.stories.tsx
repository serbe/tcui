import React from 'react';

import { Button } from './index';

export const Primary = (): JSX.Element => {
  return <Button color="primary">Primary</Button>;
};

export const Secondary = (): JSX.Element => {
  return <Button color="secondary">Secondary</Button>;
};

export const Success = (): JSX.Element => {
  return <Button color="success">Success</Button>;
};

export const Danger = (): JSX.Element => {
  return <Button color="danger">Danger</Button>;
};

export const Warning = (): JSX.Element => {
  return <Button color="warning">Warning</Button>;
};

export const Info = (): JSX.Element => {
  return <Button color="info">Info</Button>;
};

export const Light = (): JSX.Element => {
  return <Button color="light">Light</Button>;
};

export const Dark = (): JSX.Element => {
  return <Button color="dark">Dark</Button>;
};

export const PrimaryO = (): JSX.Element => {
  return (
    <Button color="primary" isOutline>
      PrimaryO
    </Button>
  );
};

export const SecondaryO = (): JSX.Element => {
  return (
    <Button color="secondary" isOutline>
      SecondaryO
    </Button>
  );
};

export const SuccessO = (): JSX.Element => {
  return (
    <Button color="success" isOutline>
      SuccessO
    </Button>
  );
};

export const DangerO = (): JSX.Element => {
  return (
    <Button color="danger" isOutline>
      DangerO
    </Button>
  );
};

import '../tailwind.css';

export const WarningO = (): JSX.Element => {
  return (
    <Button color="warning" isOutline>
      WarningO
    </Button>
  );
};

export const InfoO = (): JSX.Element => {
  return (
    <Button color="info" isOutline>
      InfoO
    </Button>
  );
};

export const LightO = (): JSX.Element => {
  return (
    <Button color="light" isOutline>
      LightO
    </Button>
  );
};

export const DarkO = (): JSX.Element => {
  return (
    <Button color="dark" isOutline>
      DarkO
    </Button>
  );
};

export const Small = (): JSX.Element => {
  return <Button size="small">Small</Button>;
};

export const Normal = (): JSX.Element => {
  return (
    <Button size="normal" color="secondary">
      Normal
    </Button>
  );
};

export const Large = (): JSX.Element => {
  return (
    <Button size="large" color="success">
      Large
    </Button>
  );
};

export const SmallO = (): JSX.Element => {
  return (
    <Button size="small" isOutline>
      Small
    </Button>
  );
};

export const NormalO = (): JSX.Element => {
  return (
    <Button size="normal" color="secondary" isOutline>
      Normal
    </Button>
  );
};

export const LargeO = (): JSX.Element => {
  return (
    <Button size="large" color="success" isOutline>
      Large
    </Button>
  );
};

export const Disabled = (): JSX.Element => {
  return <Button isDisabled>Disabled</Button>;
};

export const DisabledO = (): JSX.Element => {
  return (
    <Button isDisabled isOutline>
      Disabled
    </Button>
  );
};

export const IsFullWith = (): JSX.Element => {
  return <Button isFullwith>Full With</Button>;
};

export const IsFullWithO = (): JSX.Element => {
  return (
    <Button isFullwith isOutline>
      Full With
    </Button>
  );
};

export const AllButtons = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 place-content-center gap-4">
      <div>
        <Primary />
        <Secondary />
        <Success />
        <Danger />
        <Warning />
        <Info />
        <Light />
        <Dark />
      </div>
      <div>
        <PrimaryO />
        <SecondaryO />
        <SuccessO />
        <DangerO />
        <WarningO />
        <InfoO />
        <LightO />
        <DarkO />
      </div>
      <div>
        <Small />
        <Normal />
        <Large />
      </div>
      <div>
        <SmallO />
        <NormalO />
        <LargeO />
      </div>
      <div>
        <Disabled />
      </div>
      <div>
        <DisabledO />
      </div>
      <div>
        <IsFullWith />
      </div>
      <div>
        <IsFullWithO />
      </div>
    </div>
  );
};
