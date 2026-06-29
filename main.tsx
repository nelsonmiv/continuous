import { Exercise } from "./types";

export const singularVerbsPool = [
  { verb: "cleaning", pronoun: "she", gerund: "cleaning", desc: "Limpiar" },
  { verb: "coding", pronoun: "he", gerund: "coding", desc: "Programar" },
  { verb: "cooking", pronoun: "she", gerund: "cooking", desc: "Cocinar" },
  { verb: "drinking", pronoun: "he", gerund: "drinking", desc: "Beber" },
  { verb: "eating", pronoun: "she", gerund: "eating", desc: "Comer" },
  { verb: "jumping", pronoun: "she", gerund: "jumping", desc: "Saltar" },
  { verb: "listening", pronoun: "she", gerund: "listening to music", desc: "Escuchar música" },
  { verb: "painting", pronoun: "she", gerund: "painting", desc: "Pintar" },
  { verb: "playing", pronoun: "he", gerund: "playing guitar", desc: "Tocar guitarra" },
  { verb: "reading", pronoun: "he", gerund: "reading", desc: "Leer" },
  { verb: "riding", pronoun: "she", gerund: "riding a bike", desc: "Montar bicicleta" },
  { verb: "running", pronoun: "she", gerund: "running", desc: "Correr" },
  { verb: "shopping", pronoun: "she", gerund: "shopping", desc: "Comprar" },
  { verb: "singing", pronoun: "she", gerund: "singing", desc: "Cantar" },
  { verb: "sleeping", pronoun: "she", gerund: "sleeping", desc: "Dormir" },
  { verb: "studying", pronoun: "she", gerund: "studying", desc: "Estudiar" },
  { verb: "swimming", pronoun: "he", gerund: "swimming", desc: "Nadar" },
  { verb: "talking", pronoun: "he", gerund: "talking", desc: "Hablar" },
  { verb: "walking", pronoun: "he", gerund: "walking the dog", desc: "Pasear al perro" },
  { verb: "washing", pronoun: "she", gerund: "washing dishes", desc: "Lavar platos" },
  { verb: "watching", pronoun: "she", gerund: "watching TV", desc: "Ver televisión" },
  { verb: "working", pronoun: "she", gerund: "working", desc: "Trabajar" },
  { verb: "writing", pronoun: "she", gerund: "writing", desc: "Escribir" }
];

export const pluralVerbsPool = [
  { verb: "cleaning", pronoun: "they", gerund: "cleaning", desc: "Limpiar (Plural)" },
  { verb: "coding", pronoun: "they", gerund: "coding", desc: "Programar (Plural)" },
  { verb: "cooking", pronoun: "they", gerund: "cooking", desc: "Cocinar (Plural)" },
  { verb: "dancing", pronoun: "they", gerund: "dancing", desc: "Bailar (Plural)" },
  { verb: "drinking", pronoun: "they", gerund: "drinking", desc: "Beber (Plural)" },
  { verb: "eating", pronoun: "they", gerund: "eating", desc: "Comer (Plural)" },
  { verb: "jumping", pronoun: "they", gerund: "jumping", desc: "Saltar (Plural)" },
  { verb: "laughing", pronoun: "they", gerund: "laughing", desc: "Reír (Plural)" },
  { verb: "listening", pronoun: "they", gerund: "listening to music", desc: "Escuchar música (Plural)" },
  { verb: "painting", pronoun: "they", gerund: "painting", desc: "Pintar (Plural)" },
  { verb: "playing", pronoun: "they", gerund: "playing music", desc: "Tocar música (Plural)" },
  { verb: "reading", pronoun: "they", gerund: "reading", desc: "Leer (Plural)" },
  { verb: "riding", pronoun: "they", gerund: "riding bikes", desc: "Montar bicicletas (Plural)" },
  { verb: "running", pronoun: "they", gerund: "running", desc: "Correr (Plural)" },
  { verb: "shopping", pronoun: "they", gerund: "shopping", desc: "Comprar (Plural)" },
  { verb: "singing", pronoun: "they", gerund: "singing", desc: "Cantar (Plural)" },
  { verb: "sleeping", pronoun: "they", gerund: "sleeping", desc: "Dormir (Plural)" },
  { verb: "studying", pronoun: "they", gerund: "studying", desc: "Estudiar (Plural)" },
  { verb: "swimming", pronoun: "they", gerund: "swimming", desc: "Nadar (Plural)" },
  { verb: "talking", pronoun: "they", gerund: "talking", desc: "Hablar (Plural)" },
  { verb: "walking", pronoun: "they", gerund: "walking", desc: "Caminar (Plural)" },
  { verb: "washing", pronoun: "they", gerund: "washing dishes", desc: "Lavar platos (Plural)" },
  { verb: "watching", pronoun: "they", gerund: "watching TV", desc: "Ver televisión (Plural)" },
  { verb: "working", pronoun: "they", gerund: "working", desc: "Trabajar (Plural)" },
  { verb: "writing", pronoun: "they", gerund: "writing", desc: "Escribir (Plural)" }
];

export function buildExercises(): Exercise[] {
  const list: Exercise[] = [];

  // Generate Singular Set (50 exercises)
  for (let i = 0; i < 50; i++) {
    const item = singularVerbsPool[i % singularVerbsPool.length];
    const subject = item.pronoun === "she" ? "She" : "He";
    const contraction = item.pronoun === "she" ? "She's" : "He's";

    const isNegativeScenario = i % 2 === 0;
    let grammarQuestion = `What is ${item.pronoun} doing?`;
    let expectedGrammarPrimary = `${contraction} ${item.gerund}.`;
    let expectedGrammarFull = `${subject} is ${item.gerund}.`;

    if (isNegativeScenario) {
      const wrongGerund = i % 3 === 0 ? "sleeping" : "eating";
      if (wrongGerund !== item.gerund) {
        grammarQuestion = `Is ${item.pronoun} ${wrongGerund}?`;
        expectedGrammarPrimary = `No, ${item.pronoun} isn't. ${contraction} ${item.gerund}.`;
        expectedGrammarFull = `No, ${item.pronoun} is not. ${subject} is ${item.gerund}.`;
      }
    }

    list.push({
      id: i + 1,
      type: "singular",
      verb: item.verb,
      pronoun: item.pronoun,
      desc: item.desc,
      folder: "acciones singular",
      imagePath: `acciones singular/${item.verb}`,

      // Tab 1: Grammar
      grammarQuestion: grammarQuestion,
      grammarAnswerPrimary: expectedGrammarPrimary,
      grammarAnswerFull: expectedGrammarFull,

      // Tab 2: Questions
      questionPrompt: `Pregunta de Sí/No confirmando si ${item.pronoun === "she" ? "ella" : "él"} está haciendo la acción: "${item.desc}".`,
      questionAnswerPrimary: `Is ${item.pronoun} ${item.gerund}?`,

      // Tab 3: Shadowing Phrase
      shadowingPhrase: `${contraction} ${item.gerund}.`
    });
  }

  // Generate Plural Set (50 exercises)
  for (let i = 0; i < 50; i++) {
    const item = pluralVerbsPool[i % pluralVerbsPool.length];
    const isNegativeScenario = i % 2 !== 0;

    let grammarQuestion = `What are they doing?`;
    let expectedGrammarPrimary = `They're ${item.gerund}.`;
    let expectedGrammarFull = `They are ${item.gerund}.`;

    if (isNegativeScenario) {
      const wrongGerund = i % 3 === 0 ? "studying" : "running";
      if (wrongGerund !== item.gerund) {
        grammarQuestion = `Are they ${wrongGerund}?`;
        expectedGrammarPrimary = `No, they aren't. They're ${item.gerund}.`;
        expectedGrammarFull = `No, they are not. They are ${item.gerund}.`;
      }
    }

    list.push({
      id: i + 51,
      type: "plural",
      verb: item.verb,
      pronoun: "they",
      desc: item.desc,
      folder: "acciones plural",
      imagePath: `acciones plural/${item.verb}`,

      // Tab 1: Grammar
      grammarQuestion: grammarQuestion,
      grammarAnswerPrimary: expectedGrammarPrimary,
      grammarAnswerFull: expectedGrammarFull,

      // Tab 2: Questions
      questionPrompt: `Pregunta de Sí/No confirmando la acción de las personas: "${item.desc}".`,
      questionAnswerPrimary: `Are they ${item.gerund}?`,

      // Tab 3: Shadowing Phrase
      shadowingPhrase: `They're ${item.gerund}.`
    });
  }

  // Shuffle identically to the original to ensure variation
  list.sort((a, b) => ((a.id * 17) % 100) - ((b.id * 17) % 100));
  return list;
}
