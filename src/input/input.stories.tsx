import 'tw-elements'
import '../tailwind.css'

import { Input } from './index'

export const Default = () => <Input name="default" placeholder="placeholder" />
export const Small = () => <Input name="small" size="small" placeholder="placeholder" />
export const Normal = () => <Input name="normal" size="normal" placeholder="placeholder" />
export const Large = () => <Input name="large" size="large" placeholder="placeholder" />
export const Label = () => <Input name="label" label="label" placeholder="placeholder" />
export const IsDisabled = () => <Input name="isDisabled" isDisabled placeholder="is disabled" />
export const IsReadOnly = () => <Input name="isReadOnly" isReadOnly placeholder="is read only" />
export const Email = () => <Input name="email" type="email" placeholder="example@email.com" />
export const Password = () => <Input name="password" type="password" placeholder="password" />
export const Tel = () => <Input name="tel" type="tel" placeholder="+1800123456" />
export const Text = () => <Input name="text" type="text" placeholder="text" />
export const Url = () => <Input name="url" type="url" placeholder="http://example.email.com" />
export const Number = () => <Input name="number" type="number" placeholder="123" />

export const AllInputs = () => (
  <div className="grid grid-cols-2 place-content-center gap-4">
    <div>
      <Label />
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
)
