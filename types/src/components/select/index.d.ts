import { FC } from "react";
import type { Sizes } from "../../utils/variables";
interface ISelectItem {
    id: number;
    name: string;
}
interface ISelectProps {
    className?: string;
    data: ISelectItem[];
    id?: number;
    name: string;
    size?: Sizes;
}
export declare const Select: FC<ISelectProps>;
export default Select;
