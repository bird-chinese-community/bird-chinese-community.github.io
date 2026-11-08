import { assetPath } from "@/lib/shared";

/** The BIRDCC mark. It is decorative: the site name next to it is the label. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      alt=""
      aria-hidden
      className={`rounded-[22%] ${className ?? ""}`}
      src={assetPath("/mark.png")}
      width={256}
      height={256}
    />
  );
}
