import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement("textarea");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleCopy}
        className="group flex w-full items-center justify-between gap-4 border-b border-line pb-4 text-left"
      >
        <span className="min-w-0 text-base text-paper wrap-anywhere transition-colors duration-200 group-hover:text-accent md:text-lg">
          {email}
        </span>
        <span className="grid size-9 shrink-0 place-items-center border border-line text-muted transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </span>
      </button>
      <p className="mt-2 h-4 font-mono text-[10px] uppercase tracking-[0.14em] text-accent" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </p>
    </div>
  );
}
