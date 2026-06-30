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
    <p className="mt-6 text-center text-sm text-muted-foreground">
      {leftText}{" "}
      <Link
        href={rightHref}
        className="font-medium text-primary hover:underline"
      >
        {rightText}
      </Link>
    </p>
  );
}
