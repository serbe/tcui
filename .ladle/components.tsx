import type { GlobalProvider } from "@ladle/react";
import React from "react";

import "./tailwind.css";

export const Provider: GlobalProvider = ({ children }) => <>{children}</>;
