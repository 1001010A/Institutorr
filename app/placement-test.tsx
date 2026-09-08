'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type Answer = { label: string; value: string };
type Question = { prompt: string; answers: Answer[]; correct: string };

const questions: Question[] = [
  {
    prompt: 'Choose the correct option: “My brother ___ in Guadalajara.”',
    answers: [
      { label: 'live', value: 'a' },
      { label: 'lives', value: 'b' },
      { label: 'living', value: 'c' },
    ],
    correct: 'b',
  },
  {
    prompt: 'Complete the sentence: “I have studied English ___ two years.”',
    answers: [
      { label: 'since', value: 'a' },
      { label: 'for', value: 'b' },
      { label: 'during', value: 'c' },
    ],
    correct: 'b',
  },
  {
    prompt: 'Which sentence is correct?',
    answers: [
      { label: 'She can to speak English.', value: 'a' },
      { label: 'She cans speak English.', value: 'b' },
      { label: 'She can speak English.', value: 'c' },
    ],
    correct: 'c',
  },
  {
    prompt: 'Choose the best option: “If I had more time, I ___ another language.”',
    answers: [
      { label: 'will learn', value: 'a' },
      { label: 'would learn', value: 'b' },
      { label: 'learned', value: 'c' },
    ],
    correct: 'b',
  },
  {
    prompt: 'Choose the sentence closest in meaning to “The meeting was called off.”',
    answers: [
      { label: 'The meeting was cancelled.', value: 'a' },
      { label: 'The meeting started late.', value: 'b' },
      { label: 'The meeting was moved upstairs.', value: 'c' },
    ],
    correct: 'a',
  },
];

type Result = { level: string; title: string; description: string };

function resultFor(score: number): Result {
  if (score <= 1) return { level: 'A1', title: 'Nivel inicial', description: 'Empezaremos por bases claras para que puedas comunicarte con seguridad desde las primeras clases.' };
  if (score <= 3) return { level: 'A2', title: 'Nivel básico', description: 'Ya tienes fundamentos. Tu plan reforzará conversación, comprensión y estructuras de uso cotidiano.' };
  if (score === 4) return { level: 'B1', title: 'Nivel intermedio', description: 'Puedes desenvolverte en situaciones comunes. Trabajaremos fluidez, precisión y vocabulario útil.' };
  return { level: 'B2', title: 'Intermedio alto', description: 'Tienes una base sólida. Te ayudaremos a perfeccionar tu expresión y avanzar hacia objetivos académicos o profesionales.' };
}

type ModelContextLike = {
  registerTool: (tool: {
    name: string;
    title: string;
    description: string;
    inputSchema: object;
    annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
    execute: (input: unknown) => unknown;
  }, options?: { signal?: AbortSignal }) => void | Promise<void>;
};

export function PlacementTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [finished, setFinished] = useState(false);
  const selected = answers[step] ?? '';
  const score = useMemo(() => answers.reduce((total, answer, index) => total + (answer === questions[index].correct ? 1 : 0), 0), [answers]);
  const result = resultFor(score);

  function choose(value: string) {
    setAnswers((current) => current.map((answer, index) => index === step ? value : answer));
  }

  function next() {
    if (!selected) return;
    if (step === questions.length - 1) setFinished(true);
    else setStep((current) => current + 1);
  }

  function reset() {
    setStep(0);
    setAnswers(Array(questions.length).fill(''));
    setFinished(false);
  }

  useEffect(() => {
    const context = (document as Document & { modelContext?: ModelContextLike }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();

    const register = context.registerTool({
      name: 'complete_placement_test',
      title: 'Completar examen de ubicación',
      description: 'Completa el examen de ubicación de R&R Inglés con cinco respuestas y muestra el nivel sugerido en la página.',
      inputSchema: {
        type: 'object',
        properties: {
          answers: {
            type: 'array',
            minItems: 5,
            maxItems: 5,
            items: { type: 'string', enum: ['a', 'b', 'c'] },
          },
        },
        required: ['answers'],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const values = (input as { answers?: unknown }).answers;
        if (!Array.isArray(values) || values.length !== questions.length || values.some((value) => !['a', 'b', 'c'].includes(String(value)))) {
          throw new Error('Se requieren exactamente cinco respuestas válidas: a, b o c.');
        }
        const normalized = values.map(String);
        const calculatedScore = normalized.reduce((total, answer, index) => total + (answer === questions[index].correct ? 1 : 0), 0);
        const calculatedResult = resultFor(calculatedScore);
        setAnswers(normalized);
        setStep(questions.length - 1);
        setFinished(true);
        document.querySelector('#examen')?.scrollIntoView({ behavior: 'smooth' });
        return { score: calculatedScore, total: questions.length, level: calculatedResult.level, recommendation: calculatedResult.title };
      },
    }, { signal: lifecycle.signal });

    void Promise.resolve(register).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  if (finished) {
    return (
      <div className="test-result" aria-live="polite">
        <span className="level-badge">Nivel sugerido · {result.level}</span>
        <CheckCircle2 size={38} aria-hidden="true" />
        <h3>{result.title}</h3>
        <p>{result.description}</p>
        <div className="result-score">Resultado: {score} de {questions.length} respuestas correctas</div>
        <p className="result-note">Esta evaluación es orientativa. Una breve entrevista con el profesor nos ayudará a recomendarte el grupo y plan adecuados.</p>
        <div className="result-actions">
          <a className="button button-primary" href="tel:+523312502411">Solicitar orientación</a>
          <button className="reset-button" type="button" onClick={reset}><RotateCcw size={16} /> Repetir examen</button>
        </div>
      </div>
    );
  }

  const question = questions[step];

  return (
    <div className="test-card">
      <div className="test-progress-row">
        <span>Pregunta {step + 1} de {questions.length}</span>
        <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
      </div>
      <div className="progress-track" aria-hidden="true"><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
      <h3>{question.prompt}</h3>
      <RadioGroup value={selected} onValueChange={(value) => choose(String(value))} aria-label={question.prompt} className="answer-list">
        {question.answers.map((answer) => (
          <label className={`answer-option ${selected === answer.value ? 'is-selected' : ''}`} key={answer.value}>
            <RadioGroupItem value={answer.value} />
            <span className="answer-letter">{answer.value.toUpperCase()}</span>
            <span>{answer.label}</span>
          </label>
        ))}
      </RadioGroup>
      <div className="test-controls">
        <button type="button" className="back-button" onClick={() => setStep((current) => current - 1)} disabled={step === 0}>
          <ArrowLeft size={17} /> Anterior
        </button>
        <button type="button" className="next-button" onClick={next} disabled={!selected}>
          {step === questions.length - 1 ? 'Ver mi resultado' : 'Siguiente'} <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
