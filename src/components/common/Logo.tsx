import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-xl font-bold tracking-tight">
      CareerCraft <span className="text-primary">AI</span>
    </Link>
  );
}
