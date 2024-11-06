import Head from "next/head";
import React from "react";
import Header from "../Header";
import Footer from "../footer";

const Sobre: React.FC = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Sobre Nós | TechClin</title>
        <meta
          name="description"
          content="Saiba mais sobre a TechClin, uma plataforma de agendamento de consultas e exames."
        />
      </Head>
      <div className="flex w-screen bg-white ">
        <div className="max-w-3xl bg-white mx-auto px-4 py-8 font-sans">
          <section className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Sobre a TechClin
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              A TechClin é uma plataforma inovadora que facilita o agendamento
              de consultas e exames médicos de forma prática e segura. Nossa
              missão é conectar pacientes a uma rede de profissionais de saúde e
              clínicas parceiras, promovendo acessibilidade e praticidade na
              saúde.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-700">
              Como Funciona?
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Com a TechClin, o usuário pode encontrar e agendar consultas com
              médicos de diversas especialidades e realizar exames em clínicas
              conveniadas. Nossa plataforma é intuitiva e permite que o
              agendamento seja feito em poucos cliques, com segurança e rapidez.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-700">
              Nossas Parcerias
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Estamos em constante parceria com clínicas e consultórios de
              qualidade, garantindo que nossos usuários tenham acesso a uma
              ampla rede de atendimento. Valorizamos o relacionamento com nossos
              parceiros e buscamos sempre expandir nossa rede para melhor
              atender nossos pacientes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-700">
              Missão e Visão
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Nossa missão é simplificar o acesso aos serviços de saúde,
              aproximando pacientes e profissionais através da tecnologia.
              Queremos ser reconhecidos como a melhor solução em agendamento de
              saúde online, proporcionando uma experiência positiva e acessível
              a todos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-700">Contato</h2>
            <p className="text-lg text-gray-600 mt-4">
              Quer saber mais? Entre em contato conosco pelo e-mail{" "}
              <a
                href="mailto:duardooliveiras@gmail.com"
                className="text-blue-500 hover:underline"
              >
                contato@techclin.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sobre;
