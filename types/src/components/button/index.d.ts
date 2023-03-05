import type { FC, MouseEventHandler, ReactNode } from "react";
import type { Colors, Sizes } from "../../utils/variables";
interface IButtonProps {
    children: ReactNode;
    className?: string;
    color?: Colors;
    hasRipple?: boolean;
    isDisabled?: boolean;
    isFullwith?: boolean;
    isOutline?: boolean;
    isRounded?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement | HTMLInputElement>;
    size?: Sizes;
}
export declare const Button: FC<IButtonProps>;
export default Button;
