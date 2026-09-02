interface DemoImageryNoticeProps {
  className?: string;
  dark?: boolean;
}

/**
 * Required by spec 2.3/2.7: demo photography must never be presented as real
 * inventory. Every concept surfaces this near its footer.
 */
export function DemoImageryNotice({ className = '', dark = false }: DemoImageryNoticeProps) {
  return (
    <p
      className={`text-[11px] leading-relaxed tracking-wide uppercase ${
        dark ? 'text-white/40' : 'text-black/40'
      } ${className}`}
    >
      Demo concept — motorcycle photography is placeholder imagery via Unsplash for design
      evaluation only, not actual UG Bikes Arena inventory. Production listings will use photos
      John uploads through the admin dashboard.
    </p>
  );
}
