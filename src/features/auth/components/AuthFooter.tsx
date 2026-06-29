import Link from "next/link";

type Props = {
  leftText: string;
  leftHref: string;
  rightText: string;
  rightHref: string;
};

export default function AuthFooter({
  leftText,
  leftHref,
  rightText,
  rightHref,
}: Props) {
  return (
    <div className="mt-6 flex items-center justify-between text-sm">
      <Link href={leftHref} className="text-primary hover:underline">
        {leftText}
      </Link>

      <Link href={rightHref} className="text-primary hover:underline">
        {rightText}
      </Link>
    </div>
  );
}
