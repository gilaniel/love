import Image from "next/image";

export const Icon = ({
  url,
  classNames,
  alt,
}: {
  url: string;
  classNames?: string;
  alt?: string;
}) => {
  return (
    <Image
      src={url}
      alt={alt || ""}
      quality={100}
      width={24}
      height={24}
      className={classNames}
    />
  );
};
