type Props = {
  id: string;
  title?: string;
};

export default function Video({ id, title = "YouTube video" }: Props) {
  return (
    <div className="w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-lg my-6">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
