import { heroContent } from "../../constants/landing";

export default function HeroContent() {
  return (
    <>
      <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-7xl xl:text-8xl">
        {heroContent.title.first}
        <br />
        {heroContent.title.second}{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
          {heroContent.title.highlight}
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
        {heroContent.description}
      </p>
    </>
  );
}
