'use client';

import { Github, Linkedin, LocateFixed, Mail, Phone } from 'lucide-react';

export default function CurriculoPage() {
  return (
    <main className="flex justify-center px-4 py-6 bg-gray-100 min-h-screen">
      <div className="bg-white w-full max-w-[794px] min-h-[1123px] shadow-md p-6 md:p-10 text-[15px] leading-relaxed font-sans text-black">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0 text-sm mb-6">
          {/* Esquerda */}
          <div className="space-y-1 text-left">
            <p className="flex items-center gap-2">
              <LocateFixed className="w-4 h-4" />
              Paraíba, PB
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> (83) 99645-9444
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> saulojustiniano.dev@gmail.com
            </p>
          </div>

          {/* Centro */}
          <div className="text-center md:text-center md:mx-auto">
            <h1 className="text-2xl font-bold">Saulo</h1>
            <h1 className="text-2xl font-bold">Justiniano</h1>
          </div>

          {/* Direita */}
          <div className="space-y-1 text-right">
            <p className="flex justify-end items-center gap-2">
              <Github className="w-4 h-4" />
              <a
                href="https://github.com/saulojustiniano1/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline break-all"
              >
                github.com/saulojustiniano1
              </a>
            </p>
            <p className="flex justify-end items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a
                href="https://www.linkedin.com/in/saulojustiniano/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline break-all"
              >
                linkedin.com/in/saulojustiniano
              </a>
            </p>
          </div>
        </header>

        {/* Projetos */}
        <section id="projetos" className="mb-6">
          <div className="mt-10 mb-4">
            <h2 className="text-lg font-bold">Projetos</h2>
            <hr className="mt-1 border-t border-gray-400 w-[95%] mx-auto" />
          </div>

          {/* Projetos individuais */}
          <div className="space-y-6">
            <div id="proj1">
              <strong>DoctorCare</strong> | HTML, CSS, JavaScript |{' '}
              <a
                href="https://saulojustiniano1.github.io/doctorcare"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 break-all"
              >
                https://saulojustiniano1.github.io/doctorcare
              </a>
              <br />
              <p className="italic">
                Aplicação web de agendamento de consultas de médicos.
              </p>
              <p className="text-justify">
                Desenvolvi uma aplicação web usando HTML e CSS simples, as
                funcionalidade foram feitas usando Javascript puro e a
                hospedagem foi feita no GitHub usando a própria ferramenta
                deles, o github pages
              </p>
            </div>

            <div id="proj2">
              <strong>Esports Community</strong> | HTML, CSS (Grid, Flex) |{' '}
              <a
                href="https://saulojustiniano1.github.io/esports-community"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 break-all"
              >
                https://saulojustiniano1.github.io/esports-community
              </a>
              <p className="text-justify">
                Desenvolvi uma aplicação web usando HTML e CSS simples, usei as
                propriedades do css (grid e flex) para permitir que o projeto
                fique responsivo e a hospedagem foi feita no GitHub usando a
                ferramenta github pages
              </p>
            </div>

            <div id="proj3">
              <strong>Espaço Livre</strong> | Next.js, Node.js, shadcn/ui
              <br />
              <p className="italic">Aplicação web de alocação de espaços</p>
              <p className="text-justify">
                Estou desenvolvendo uma aplicação web usando o next.js com o
                node.js, esse projeto é um site de alocação com o intuito de
                facilidade o jeito como você aluga um imovel
              </p>
            </div>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section className="mb-6">
          <h2 className="text-lg font-bold">Experiência Profissional</h2>
          <hr className="mt-1 border-t border-gray-400 w-[95%] mx-auto mb-2" />
          <p className="text-justify mb-4">
            <strong>Defensoria Pública da Paraíba</strong> | Estagiário de TI
            (Desenvolvimento)
          </p>
          <p className="text-justify">
            Trabalhei na Defensoria Pública desenvolvendo um chatbot de
            atendimento com <strong>Next.js</strong> no front-end e{' '}
            <strong>Node.js</strong> no back-end. O objetivo é melhorar a
            comunicação com a população, usando
            <strong>inteligência artificial</strong> para orientar juridicamente
            os usuários. Utilizo a técnica de{' '}
            <strong>RAG (Retrieval-Augmented Generation)</strong> com o modelo
            <strong> Qwen2-3B</strong>, que possui 3 bilhões de parâmetros. As
            informações jurídicas são extraídas de um banco próprio,
            transformadas em vetores e recuperadas de forma semântica. A IA
            combina esses dados com a pergunta do usuário, gera uma resposta
            clara e confiável, armazena tudo no <strong>PostgreSQL</strong> e
            exibe a resposta em tempo real. Além disso, também sou responsável
            pela <strong> manutenção dos demais sistemas da Defensoria</strong>,
            que são desenvolvidos em{' '}
            <strong>PHP com o framework Laravel</strong>.
          </p>
        </section>

        {/* Educação e Idiomas */}
        <section className="mb-6">
          <h2 className="text-lg font-bold">Educação e Idiomas</h2>
          <hr className="mt-1 border-t border-gray-400 w-[95%] mx-auto mb-2" />
          <ul className="list-disc pl-5">
            <li>
              Tecnólogo em Análise e Desenvolvimento de Sistemas |{' '}
              <strong>UNIFIP</strong> | 2023 - 2025
            </li>
            <li>Inglês básico.</li>
          </ul>
        </section>

        {/* Habilidades */}
        <section className="mb-6">
          <h2 className="text-lg font-bold">Habilidades</h2>
          <hr className="mt-1 border-t border-gray-400 w-[95%] mx-auto mb-2" />
          <ul className="list-disc pl-5">
            <li>
              <strong>Linguagens:</strong> HTML, CSS, Python, JavaScript, Java,
              TypeScript, PHP
            </li>
            <li>
              <strong>Frameworks:</strong> Next.js, Shadcn/ui, Node, React,
              Laravel
            </li>
            <li>
              <strong>Tecnologias:</strong> Docker, PostgreSQL, Git
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
