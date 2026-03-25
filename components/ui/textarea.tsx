import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-24 w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 shadow-xs transition-colors placeholder:text-slate-500 focus-visible:border-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-500/40",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
