import React from "react";

import { Colors, Sizes } from "../../utils/variables";
import { Button } from "./index";

const colors = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

// </div>

export const AllVariants = (): JSX.Element => (
  <div className="container mx-auto">
    {colors.map((color) => (
      <div className="flex items-end" key={`div-${color}`}>
        {["large", "normal", "small"].map((size) =>
          [true, false].map((isOutlined) => (
            <Button
              color={color as Colors}
              size={size as Sizes}
              isOutline={isOutlined}
              key={`${isOutlined ? "O" : ""}${color}${size}`}
            >{`${isOutlined ? "O" : ""}${color}${size}`}</Button>
          ))
        )}
      </div>
    ))}
  </div>
);

// export const Default = (): JSX.Element => {
//   return <Button>Default</Button>;
// };

// export const Amber = (): JSX.Element => {
//   return <Button color="amber">amber</Button>;
// };

// export const Blue = (): JSX.Element => {
//   return <Button color="blue">blue</Button>;
// };

// export const Cyan = (): JSX.Element => {
//   return <Button color="cyan">cyan</Button>;
// };

// export const Emerald = (): JSX.Element => {
//   return <Button color="emerald">emerald</Button>;
// };

// export const Fuchsia = (): JSX.Element => {
//   return <Button color="fuchsia">fuchsia</Button>;
// };

// export const Gray = (): JSX.Element => {
//   return <Button color="gray">gray</Button>;
// };

// export const Indigo = (): JSX.Element => {
//   return <Button color="indigo">indigo</Button>;
// };

// export const Lime = (): JSX.Element => {
//   return <Button color="lime">lime</Button>;
// };

// export const Neutral = (): JSX.Element => {
//   return <Button color="neutral">neutral</Button>;
// };

// export const Orange = (): JSX.Element => {
//   return <Button color="orange">orange</Button>;
// };

// export const Pink = (): JSX.Element => {
//   return <Button color="pink">pink</Button>;
// };

// export const Purple = (): JSX.Element => {
//   return <Button color="purple">purple</Button>;
// };

// export const Red = (): JSX.Element => {
//   return <Button color="red">red</Button>;
// };

// export const Rose = (): JSX.Element => {
//   return <Button color="rose">rose</Button>;
// };

// export const Sky = (): JSX.Element => {
//   return <Button color="sky">sky</Button>;
// };

// export const Slate = (): JSX.Element => {
//   return <Button color="slate">slate</Button>;
// };

// export const Stone = (): JSX.Element => {
//   return <Button color="stone">stone</Button>;
// };

// export const Teal = (): JSX.Element => {
//   return <Button color="teal">teal</Button>;
// };

// export const Violet = (): JSX.Element => {
//   return <Button color="violet">violet</Button>;
// };

// export const Yellow = (): JSX.Element => {
//   return <Button color="yellow">yellow</Button>;
// };

// export const Zinc = (): JSX.Element => {
//   return <Button color="zinc">zinc</Button>;
// };

// export const DefaultO = (): JSX.Element => {
//   return <Button isOutline>Default</Button>;
// };

// export const StoneO = (): JSX.Element => {
//   return (
//     <Button color="stone" isOutline>
//       Primary
//     </Button>
//   );
// };

// // export const SecondaryO = (): JSX.Element => {
// //   return (
// //     <Button color="secondary" isOutline>
// //       Secondary
// //     </Button>
// //   );
// // };

// // export const SuccessO = (): JSX.Element => {
// //   return (
// //     <Button color="success" isOutline>
// //       Success
// //     </Button>
// //   );
// // };

// // export const DangerO = (): JSX.Element => {
// //   return (
// //     <Button color="danger" isOutline>
// //       Danger
// //     </Button>
// //   );
// // };

// // export const WarningO = (): JSX.Element => {
// //   return (
// //     <Button color="warning" isOutline>
// //       Warning
// //     </Button>
// //   );
// // };

// // export const InfoO = (): JSX.Element => {
// //   return (
// //     <Button color="info" isOutline>
// //       Info
// //     </Button>
// //   );
// // };

// // export const LightO = (): JSX.Element => {
// //   return (
// //     <Button color="light" isOutline>
// //       Light
// //     </Button>
// //   );
// // };

// // export const DarkO = (): JSX.Element => {
// //   return (
// //     <Button color="dark" isOutline>
// //       Dark
// //     </Button>
// //   );
// // };

// export const Small = (): JSX.Element => {
//   return <Button size="small">Small</Button>;
// };

// export const Normal = (): JSX.Element => {
//   return <Button size="normal">Normal</Button>;
// };

// export const Large = (): JSX.Element => {
//   return <Button size="large">Large</Button>;
// };

// export const SmallO = (): JSX.Element => {
//   return (
//     <Button size="small" isOutline>
//       Small
//     </Button>
//   );
// };

// export const NormalO = (): JSX.Element => {
//   return (
//     <Button size="normal" isOutline>
//       Normal
//     </Button>
//   );
// };

// export const LargeO = (): JSX.Element => {
//   return (
//     <Button size="large" isOutline>
//       Large
//     </Button>
//   );
// };

// export const Disabled = (): JSX.Element => {
//   return <Button isDisabled>Disabled</Button>;
// };

// export const DisabledO = (): JSX.Element => {
//   return (
//     <Button isDisabled isOutline>
//       Disabled
//     </Button>
//   );
// };

// export const IsFullWith = (): JSX.Element => {
//   return <Button isFullwith>Full With</Button>;
// };

// export const IsFullWithO = (): JSX.Element => {
//   return (
//     <Button isFullwith isOutline>
//       Full With
//     </Button>
//   );
// };

// export const ManyB = () => {
//   return (
//     <div className="flex items-end">
//       <button
//         className="mx-2 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold capitalize text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         data-ripple-light="true"
//       >
//         Button One
//       </button>
//       <button
//         className="mx-2 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold capitalize text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         data-ripple-light="true"
//       >
//         Button
//       </button>
//       <button
//         className="mx-2 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold capitalize text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         data-ripple-light="true"
//       >
//         Button
//       </button>
//       <button
//         className="mx-2 rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold capitalize text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         data-ripple-light="true"
//       >
//         Button
//       </button>
//       <button
//         className="mx-2 rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         data-ripple-light="true"
//       >
//         Button
//       </button>
//       <button
//         className="mx-2 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         data-ripple-light="true"
//       >
//         Button
//       </button>
//       <button
//         className="mx-2 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         data-ripple-dark="true"
//       >
//         Button
//       </button>
//       <button
//         className="mx-2 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         data-ripple-dark="true"
//       >
//         Button
//       </button>
//       <button
//         className="mx-2 rounded-lg bg-pink-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         data-ripple-light="true"
//       >
//         Small
//       </button>
//       <button
//         className="mx-2 rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         data-ripple-light="true"
//       >
//         Medium
//       </button>
//       <button
//         className="mx-2 rounded-lg bg-pink-500 py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         data-ripple-light="true"
//       >
//         Large
//       </button>
//     </div>
//   );
// };
// export const AllButtons = (): JSX.Element => {
//   return (
//     <div className="grid grid-cols-2 place-content-center gap-4">
//       <div>
//         <Default />
//         <Primary />
//         <Secondary />
//         <Success />
//         <Danger />
//         <Warning />
//         <Info />
//         <Light />
//         <Dark />
//       </div>
//       <div>
//         <DefaultO />
//         <PrimaryO />
//         <SecondaryO />
//         <SuccessO />
//         <DangerO />
//         <WarningO />
//         <InfoO />
//         <LightO />
//         <DarkO />
//       </div>
//       <div>
//         <Small />
//         <Normal />
//         <Large />
//       </div>
//       <div>
//         <SmallO />
//         <NormalO />
//         <LargeO />
//       </div>
//       <div>
//         <Disabled />
//       </div>
//       <div>
//         <DisabledO />
//       </div>
//       <div>
//         <IsFullWith />
//       </div>
//       <div>
//         <IsFullWithO />
//       </div>
//     </div>
//   );
// };
