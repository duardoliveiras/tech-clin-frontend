import Head from "next/head";
import React from "react";
import Footer from "../footer";
import Header from "../Header";

const Servicos: React.FC = () => {
  return (
    <>
      <Head>
        <title>Serviços | TechClin</title>
        <meta
          name="description"
          content="Explore os serviços da TechClin, incluindo agendamento de consultas e exames, além de futuras inovações para gestão de atendimento e exames na nuvem."
        />
      </Head>
      <Header />
      <div className="flex w-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-8 font-sans">
          <section className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Nossos Serviços
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              A TechClin oferece uma gama de serviços pensados para facilitar o
              acesso à saúde e trazer praticidade no agendamento de consultas e
              exames médicos. Conheça nossas funcionalidades atuais e futuras!
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-700">
              Agendamento de Consultas
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Com nossa plataforma, você pode agendar consultas médicas de forma
              simples e rápida. A TechClin permite que os pacientes encontrem
              profissionais de diversas especialidades e agendem consultas de
              acordo com suas necessidades e horários disponíveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-700">
              Agendamento de Exames
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Além de consultas, oferecemos o agendamento de exames em clínicas
              e laboratórios parceiros. A plataforma permite que os usuários
              escolham a unidade mais próxima e agendem seus exames com poucos
              cliques, garantindo um atendimento prático e seguro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-700">
              Futuras Inovações
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Estamos sempre buscando melhorar nossos serviços e, em breve, a
              TechClin contará com novas funcionalidades:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 mt-4">
              <li>
                <strong>Gestão de Atendimento:</strong> Uma ferramenta para que
                clínicas e consultórios possam gerenciar suas filas de espera,
                prontuários e históricos de atendimento dos pacientes
                diretamente na nossa plataforma.
              </li>
              <li className="mt-2">
                <strong>Exames na Nuvem:</strong> Em breve, disponibilizaremos o
                serviço de armazenamento de exames na nuvem. Os pacientes
                poderão acessar seus resultados de forma segura e a qualquer
                momento, compartilhando-os facilmente com outros profissionais
                de saúde.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-700">
              Por que escolher a TechClin?
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Na TechClin, estamos comprometidos em tornar o acesso à saúde mais
              fácil e acessível. Nossos serviços foram desenvolvidos para
              oferecer uma experiência intuitiva e confiável, sempre com foco no
              bem-estar do paciente e na eficiência das clínicas e consultórios.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Servicos;
