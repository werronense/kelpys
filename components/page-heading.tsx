type PageHeadingProps = {
  text: string;
};

export default function PageHeading({ text }: PageHeadingProps) {
  return (
    <div className={"py-3 border-y-1 border-primary mt-3"}>
      <h1 className={"text-2xl font-semibold"}>{text}</h1>
    </div>
  );
}
