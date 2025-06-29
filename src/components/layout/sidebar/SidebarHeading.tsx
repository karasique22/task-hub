interface Props {
  title: string;
}

export default function Page({ title }: Props) {
  return (
    <div className='font-medium mb-3 text-neutral-400 opacity-90'>{title}</div>
  );
}
