'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1500);
    } catch {
    }
  }, [value]);

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy: ${value}`}
      className="tag shrink-0 cursor-pointer border-0 bg-transparent p-0 underline decoration-rule decoration-1 underline-offset-4 hover:text-red hover:decoration-red"
    >
      {copied ? 'copied' : 'copy'}
    </button>
  );
}
