import 'tw-elements'
import '../tailwind.css'

import { Button } from './index'

export function Primary() {
  return <Button color="primary">Primary</Button>
}

export function Secondary() {
  return <Button color="secondary">Secondary</Button>
}

export function Success() {
  return <Button color="success">Success</Button>
}

export function Danger() {
  return <Button color="danger">Danger</Button>
}

export function Warning() {
  return <Button color="warning">Warning</Button>
}

export function Info() {
  return <Button color="info">Info</Button>
}

export function Light() {
  return <Button color="light">Light</Button>
}

export function Dark() {
  return <Button color="dark">Dark</Button>
}

export function Outline() {
  return <Button isOutline>Outline</Button>
}

export function Small() {
  return <Button size="small">Small</Button>
}

export function Normal() {
  return <Button size="normal">Normal</Button>
}

export function Large() {
  return <Button size="large">Large</Button>
}

export function Rounded() {
  return <Button isRounded>Rounded</Button>
}

export function Disabled() {
  return <Button isDisabled>Disabled</Button>
}

export function HasRipple() {
  return <Button hasRipple>With Ripple</Button>
}

export function IsFullWith() {
  return <Button isFullwith>Full With</Button>
}

export function AllButtons() {
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
        <Outline />
      </div>
      <div>
        <Small />
        <Normal />
        <Large />
      </div>
      <div>
        <Rounded />
      </div>
      <div>
        <Disabled />
      </div>
      <div>
        <HasRipple />
      </div>
      <div>
        <IsFullWith />
      </div>
    </div>
  )
}
