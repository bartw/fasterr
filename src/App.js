import React from "react";
import { Button, AlphaButton } from "./components/Button";
import Highlight from "./components/Highlight";
import ExternalLink from "./components/ExternalLink";
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
          <ExternalLink
            href="https://en.wikipedia.org/wiki/Intermittent_fasting"
            label="intermittent fasting on wikipedia"
          >
            Wikipedia
          </ExternalLink>
          , <Highlight>intermittent fasting</Highlight>, also known as
          intermittent energy restriction, is an umbrella term for various meal
          timing schedules that cycle between voluntary fasting (or reduced
          calories intake) and non-fasting over a given period.
        </p>
        <p className="mt-2">
          Intermittent fasting may produce <Highlight>weight loss</Highlight>,{" "}
          <Highlight>reduce insulin resistance</Highlight>, and{" "}
          <Highlight>lower the risk of cardiometabolic diseases</Highlight>,
          although its long-term sustainability is unknown.
        </p>
        <p className="mt-2">
          <Highlight>Fasterr</Highlight> allows you to{" "}
          <Highlight>track</Highlight> your <Highlight>weight</Highlight> and
          your <Highlight>fasting cycles</Highlight>. This enables you to{" "}
          <Highlight>analyse</Highlight> if intermittent fasting is working for
          you.
        </p>
        <div className="my-16 text-center">
          <AlphaButton>Sign up now</AlphaButton>
        </div>
        <p className="mb-8">
          Please <Highlight>consult a doctor</Highlight> before performing any
          kind of diet change including intermittent fasting. Fasterr{" "}
          <Highlight>only</Highlight> tracks and visualizes your weight and
          fasting cycles. It does <Highlight>not</Highlight> provide medical
          adivice.
        </p>
      </main>
    </div>
  </div>
);

export default App;
