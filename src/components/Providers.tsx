"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode, useMemo } from "react";

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
