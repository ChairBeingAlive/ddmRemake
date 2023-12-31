import { A } from "@solidjs/router";

function HeroText() {
  return (
    <div text-slate-8 grid text-center mx-auto mb-5>
      <h1 mb-0>
        Bring digital approches to your design workflow.
      </h1>

      <p font-medium text-base md:text-xl>
        The official website for <b> ::061-0113-00L::Digital Design Methods I</b>.
      </p>

    </div>
  );
}

function Hero() {
  let redGradient = "bg-gradient-to-r dark:from-red-4  dark:to-violet-4";
  let blueGradient = "bg-gradient-to-r from-blue-3 to-blue-5";

  return (
    <>
      <div
        class={`grid shadow-md p-10 pb-15 pt-0 justify-center rounded-none ${blueGradient} dark:${redGradient}`}
      >
        <HeroText />

        <div>
          {/* banner img */}
          <img
            src="/banner.png"
            alt="ddm screenshot"
            class="rounded-lg md:rounded-xl max-w-[90vw] 2xl:max-w-[1700px] softshadow m-auto"
          />
        </div>

      </div>
    </>

  );
}

export default Hero;
