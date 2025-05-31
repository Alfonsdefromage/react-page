const StepChoices = ({
  value,
  onChange,
  onNext,
}: {
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
}) => (
  <>
    <h1>Choices</h1>
    <div className="choices">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter something else..."
      />
    </div>
    <button onClick={onNext}>Next</button>
  </>
);

export default StepChoices;
