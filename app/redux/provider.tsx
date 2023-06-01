"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}<Toaster/> </Provider>;
}
