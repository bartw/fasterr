import React from "react";
import { Button, AlphaButton } from "./components/Button";
import logoFull from "./assets/logo-full.svg";
import logo from "./assets/logo.svg";
import fileAnalysis from "./assets/file-analysis.svg";

const App = () => (
  <div className="min-h-screen bg-gray-100 text-alpha">
    <div className="max-w-4xl mx-auto">
      <header className="px-2 py-4 h-32 flex items-start">
        <img className="h-full sm:hidden" src={logo} alt="logo" />
        <img className="h-full hidden sm:block" src={logoFull} alt="logo" />
        <div className="flex-1"></div>
        <nav>
          <Button>Sign in</Button>
          <AlphaButton className="ml-4">Sign up</AlphaButton>
        </nav>
      </header>
      <main className="mt-8 px-2">
        <img className="" src={fileAnalysis} alt="file-analysis" />
        <p className="mt-4">
          According to{" "}
          <a
            className="underline"
            href="https://en.wikipedia.org/wiki/Intermittent_fasting"
          >
            Wikipedia
          </a>
          ,{" "}
          <span className="text-beta font-semibold">intermittent fasting</span>,
          also known as intermittent energy restriction, is an umbrella term for
          various meal timing schedules that cycle between voluntary fasting (or
          reduced calories intake) and non-fasting over a given period.
        </p>
        <p className="mt-2">
          Intermittent fasting may produce{" "}
          <span className="text-beta font-semibold">weight loss</span>,{" "}
          <span className="text-beta font-semibold">
            reduce insulin resistance
          </span>
          , and{" "}
          <span className="text-beta font-semibold">
            lower the risk of cardiometabolic diseases
          </span>
          , although its long-term sustainability is unknown.
        </p>
        <p className="mt-2">
          <span className="text-beta font-semibold">Fasterr</span> allows you to{" "}
          <span className="text-beta font-semibold">track</span> your{" "}
          <span className="text-beta font-semibold">weight</span> and your{" "}
          <span className="text-beta font-semibold">fasting cycles</span>. This
          enables you to{" "}
          <span className="text-beta font-semibold">analyse</span> if
          intermittent fasting is working for you.
        </p>
        <div className="my-16 text-center">
          <AlphaButton>Sign up now</AlphaButton>
        </div>
        <p className="mb-8">
          Please{" "}
          <span className="text-beta font-semibold">consult a doctor</span>{" "}
          before performing any kind of diet change including intermittent
          fasting. Fasterr <span className="text-beta font-semibold">only</span>{" "}
          tracks and visualizes your weight and fasting cycles. It does{" "}
          <span className="text-beta font-semibold">not</span> provide medical
          adivice.
        </p>
      </main>
    </div>
  </div>
);

export default App;
