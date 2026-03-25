import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-200 placeholder:text-slate-500 focus-visible:border-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-500/40",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
