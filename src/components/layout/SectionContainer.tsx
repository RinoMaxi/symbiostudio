export default function SectionContainer({
  children,
  variant
}: {
  children: React.ReactNode;
  variant?: string;
}) {
  return <section>{children}</section>;
}
