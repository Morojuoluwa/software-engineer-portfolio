type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
      <div>
        <p className="mono-label">{index}</p>
        <h2 className="mt-4 text-4xl font-medium tracking-[-0.035em] text-balance md:text-5xl">{title}</h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">{description}</p>
      )}
    </div>
  );
}
