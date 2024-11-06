"use client";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Header from "../Header";
import Footer from "../footer";

const faqData = [
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Você pode agendar uma consulta acessando a área de agendamentos no site e escolhendo o profissional e horário desejado. Após selecionar, basta confirmar seu agendamento.",
  },
  {
    question: "Posso remarcar ou cancelar um exame?",
    answer:
      "Sim, você pode remarcar ou cancelar seu exame até 24 horas antes do horário agendado diretamente na área de consultas e exames agendados do site.",
  },
  {
    question: "Quais tipos de exames são oferecidos pela Tech Clin?",
    answer:
      "A Tech Clin oferece uma variedade de exames laboratoriais e de imagem, como ultrassonografia, ressonância magnética, e análises de sangue. Verifique a lista completa na área de exames do site.",
  },
  {
    question: "O que acontece se eu me atrasar para uma consulta?",
    answer:
      "Se você se atrasar, é possível que o atendimento seja reagendado ou que você tenha que aguardar uma nova disponibilidade. Recomendamos chegar com 10 minutos de antecedência.",
  },
];

const FaqPage: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>FAQ - Tech Clin</title>
        <meta
          name="description"
          content="Perguntas frequentes sobre agendamentos de consultas e exames na Tech Clin."
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex bg-white w-screen text-gray-800">
          <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
              FAQ - Perguntas Frequentes
            </h1>
            <section>
              {faqData.map((item, index) => (
                <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                  <h2
                    onClick={() => toggleAnswer(index)}
                    className="text-xl font-medium text-blue-600 cursor-pointer hover:underline"
                  >
                    {item.question}
                  </h2>
                  {activeIndex === index && (
                    <p className="mt-2 text-gray-700">{item.answer}</p>
                  )}
                </div>
              ))}
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FaqPage;
