import 'tw-elements'
import '../tailwind.css'

import { Button } from './index'

export const Primary = () => <Button color="primary">Primary</Button>
export const Secondary = () => <Button color="secondary">Secondary</Button>
export const Success = () => <Button color="success">Success</Button>
export const Danger = () => <Button color="danger">Danger</Button>
export const Warning = () => <Button color="warning">Warning</Button>
export const Info = () => <Button color="info">Info</Button>
export const Light = () => <Button color="light">Light</Button>
export const Dark = () => <Button color="dark">Dark</Button>
export const Outline = () => <Button isOutline>Outline</Button>
export const Small = () => <Button size="small">Small</Button>
export const Normal = () => <Button size="normal">Normal</Button>
export const Large = () => <Button size="large">Large</Button>
export const Rounded = () => <Button isRounded>Rounded</Button>
export const Disabled = () => <Button isDisabled>Disabled</Button>
export const WithRipple = () => <Button withRipple>With Ripple</Button>
export const FullWith = () => <Button fullwith>Full With</Button>

export const AllButtons = () => (
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
      <WithRipple />
    </div>
    <div>
      <FullWith />
    </div>
  </div>
)
