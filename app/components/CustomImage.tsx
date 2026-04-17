import Image from "next/image";

const GITHUB_RAW_BASE =
  "https://raw.githubusercontent.com/saishyam36/my-blogposts/main";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
};

export default function CustomImage({
  src,
  alt,
  width = 800,
  height = 450,
  caption,
}: Props) {
  const resolvedSrc = src.startsWith("/") ? `${GITHUB_RAW_BASE}${src}` : src;

  return (
    <figure className="my-6 flex flex-col items-center gap-2">
      <div className="relative w-full max-w-xl overflow-hidden rounded-xl shadow-md">
        <Image
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover"
          sizes="(max-width: 640px) 100vw, 576px"
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
