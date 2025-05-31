const StepStart = ({ onNext }: { onNext: () => void }) => (
  <>
    <h1>Tokyo Food Roulette</h1>
    <button onClick={onNext}>Start</button>
  </>
);

export default StepStart;
