import 'tw-elements'
import '../tailwind.css'

import { Input } from './index'

export function Default() {
  return <Input name="default" placeholder="default" />
}

export function Small() {
  return <Input name="small" size="small" placeholder="small" />
}

export function Normal() {
  return <Input name="normal" size="normal" placeholder="normal" />
}

export function Large() {
  return <Input name="large" size="large" placeholder="large" />
}

export function Label() {
  return <Input name="label" label="label" placeholder="label" />
}

export function TextHelper() {
  return <Input name="textHelper" textHelper="text helper" placeholder="text helper" />
}

export function LabelAndHelper() {
  return (
    <Input
      name="labelAndHelper"
      label="label"
      textHelper="text helper"
      placeholder="label and text helper"
    />
  )
}

export function IsDisabled() {
  return <Input isDisabled name="isDisabled" placeholder="is disabled" />
}

export function IsReadOnly() {
  return <Input isReadOnly name="isReadOnly" placeholder="is read only" />
}

export function Email() {
  return <Input name="email" type="email" placeholder="example@email.com" />
}

export function Password() {
  return <Input name="password" type="password" placeholder="password" />
}

export function Tel() {
  return <Input name="tel" type="tel" placeholder="+1800123456" />
}

export function Text() {
  return <Input name="text" type="text" placeholder="text" />
}

export function Url() {
  return <Input name="url" type="url" placeholder="http://example.email.com" />
}

export function Number() {
  return <Input name="number" type="number" placeholder="123" />
}

export function AllInputs() {
  return (
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
}
