import { CopyButton } from './copy-button';

export function CommandLine({ command, sigil = '$' }: { command: string; sigil?: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-rule py-3">
      <span aria-hidden className="select-none font-mono text-[0.85rem] text-red">
        {sigil}
      </span>
      <code className="min-w-0 flex-1 break-all font-mono text-[0.85rem] leading-[1.7] text-ink">
        {command}
      </code>
      <CopyButton value={command} />
    </div>
  );
}
