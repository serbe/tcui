import 'tw-elements'
import '../tailwind.css'

import { Input } from './index'

export const Default = () => <Input name="default" placeholder="default" />
export const Small = () => <Input name="small" size="small" placeholder="small" />
export const Normal = () => <Input name="normal" size="normal" placeholder="normal" />
export const Large = () => <Input name="large" size="large" placeholder="large" />
export const Label = () => <Input name="label" label="label" placeholder="label" />
export const TextHelper = () => (
  <Input name="textHelper" textHelper="text helper" placeholder="text helper" />
)
export const LabelAndHelper = () => (
  <Input
    name="labelAndHelper"
    label="label"
    textHelper="text helper"
    placeholder="label and text helper"
  />
)
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
)
