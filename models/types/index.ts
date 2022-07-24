import { ReactElement, ReactNode } from "react";

export interface BoxType {
    title: ReactNode | string;
    icons: ReactElement[] | string[] | JSX.Element;
}