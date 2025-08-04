import React from "react";
//import { Button } from "@/components/ui/button";
//import "@fontsource-variable/inter";

export default function LandingPage() {
  return (
    <div className="bg-[#dddddd] text-[#74726e] font-[Arial,sans-serif] h-full">
      <header className="bg-[#ffffff] relative w-full text-center text-white justify-center flex items-center gap-2 p-2 h-[20%]">
        <dialog></dialog>
        <img src="https://i.postimg.cc/GpVgJP7p/loogo-04l-1.png" alt="" className="object-cover h-full" />
        <div className="flex text-[#0a3062] gap-4 justify-end items-center font-semibold h-full w-[50%]">
          <a href="#quemsomos">Quem somos</a>
          <a href="#nossosservicos">Nossos serviços</a>
        </div>
        {/* <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>
          Evite prejuízos com infiltrações
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Consultoria técnica especializada com mais de 15 anos de experiência. Diagnóstico preciso, economia real, valorização do seu patrimônio.
        </p> */}
          {/* <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0a3062]">
            <a href="https://wa.me/5511917828711" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button> */}
      </header>
<section className="py-12 px-6 mx-auto bg-[#0a3062] w-full flex flex-col justify-center items-center bg-[#0a3062] text-white">
       <div className=" flex flex-col gap-2 w-full bg-[url(https://i.postimg.cc/SQzzGS7n/Whats-App-Image-2025-08-04-at-17-18-47a.jpg)]">
        </div>
      </section>
      <section className="py-12 px-6 mx-auto bg-[#0a3062] text-white w-ful flex flex-col justify-center items-center">
        <div>
          <div>
            <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>Por que Impermeabilização importa?</h2>
          </div>
          <div className="flex gap-2">
            <ul className="gap-2 flex flex-col">
            <div className="flex items-center gap-2">
              <li>
                <img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/>
              </li>
              <li>
                80% das patologias em edificações têm origem na umidade.
              </li>
            </div>
            <div className="flex items-center gap-2">
              <li>
                <img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/>
              </li>
              <li>
                Falhas de impermeabilização podem custar até 5x mais se não forem tratadas a tempo.
              </li>
            </div>
            <div className="flex items-center gap-2">
              <li>
                <img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/>
              </li>
              <li>
                90% dos problemas são causados por erros de aplicação, não de produto.
              </li>
            </div>
            <div className="flex items-center gap-2">
              <li>
                <img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/>
              </li>
              <li>
                Condomínios com impermeabilização correta podem valorizar até 15% no mercado.
              </li>
            </div>
            </ul>
          </div>
        </div>
      </section>


      <section className="bg-[#ffffff] py-12 px-6"  id="quemsomos">
        <div className="max-w-4xl mx-auto flex flex-col gap-2">
          <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Felix Titling, serif' }}>Quem Somos</h2>
          <p>
            Com mais de 20 anos de experiência no setor da construção civil, a Nó em Pingo D’Água nasceu para atender uma dor real:
          </p>
          <p>
            Condomínios que precisam de orientação técnica especializada em impermeabilização.
          </p>
          <p>
            Oferecemos consultoria de alto nível com foco em soluções duradouras, redução de custos e valorização dos ativos.
          </p>


        
        </div>
      </section>

      <section className="py-12 px-6 mx-auto bg-[#ffffff] w-full flex flex-col justify-center items-center">
        <div className=" flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9]" style={{ fontFamily: 'Felix Titling, serif' }}>Fundadora e Diretora executiva</h2>
            <h2 className="text-[#0a3062] font-semibold">Engª Esp. Giseli Azevedo</h2>
            <h2 className="text-justify">Especialista em patologias da construção, com sólida atuação em consultorias, desenvolvimento de soluções técnicas e participação ativa em normas da ABNT e do IBI.</h2>
          </div>
          <div className="flex gap-2">
            <ul className="gap-2 flex flex-col">
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>+15 anos de experiência técnica</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Referência nacional em impermeabilização condominial</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Participação em estudos, publicações e desenvolvimento de tecnologias</li>
              </div>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 mx-auto bg-[#ffffff] w-full flex flex-col justify-center items-center">
       <div className=" flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9] justify-self-start" style={{ fontFamily: 'Felix Titling, serif' }}>Nossa estrutura</h2>
            <h2 className="justify-self-center text-justify">Nosso modelo de atuação é colaborativo e estratégico. Trabalhamos com os melhores especialistas do setor, combinando know-how técnico com execução eficaz.</h2>
          </div>
          <div className="flex gap-2">
            <ul className="gap-2 flex flex-col justify-self-end">
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Parcerias de confiança</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Atendimento consultivo personalizado</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Flexibilidade e excelência operacional</li>
              </div>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 mx-auto bg-[#0a3062] text-white w-ful flex flex-col justify-center items-center"  id="nossosservicos">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <h2 style={{ fontFamily: 'Felix Titling, serif' }} className="text-3xl">O que oferecemos</h2>
            <h2 className="flex items-end justify-center">Oferecemos um processo consultivo completo em impermeabilização:</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center">
              <h2 className="text-3xl text-[#0d68c9]" style={{ fontFamily: 'Felix Titling, serif' }}>1.</h2>
              <h2>Vistoria técnica detalhada</h2>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="text-3xl text-[#0d68c9]" style={{ fontFamily: 'Felix Titling, serif' }}>2.</h2>
              <h2>Diagnóstico e recomendações estratégicas</h2>
            </div>
          </div>
            <div className="flex justify-center items-center gap-2">
              <div className="flex justify-center items-center">
                <h2 className="text-3xl text-[#0d68c9]" style={{ fontFamily: 'Felix Titling, serif' }}>3.</h2>
              <h2>Equalização técnica e econômica de propostas</h2>
              </div>
              <div className="flex justify-center items-center">
                <h2 className="text-3xl text-[#0d68c9]" style={{ fontFamily: 'Felix Titling, serif' }}>4.</h2>
                <h2>Fiscalização até a entrega final da obra</h2>
              </div>
            </div>
          <h1 className="bg-[#0d68c9] pl-2 pr-2 flex justify-center items-center">Tudo para garantir a melhor relação custo-benefício e a máxima durabilidade das soluções</h1>
        </div>
      </section>
      <section className="py-12 px-6 mx-auto bg-[#ffffff] w-full flex flex-col justify-center items-center">
       <div className=" flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9] justify-self-start" style={{ fontFamily: 'Felix Titling, serif' }}>Quem atendemos</h2>
            <h2 className="text-[#0a3062] font-semibold">Atendemos condomínios residenciais e comerciais, com foco em:</h2>
          </div>
          <div className="flex gap-2">
            <ul className="gap-2 flex flex-col justify-self-end">
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Síndicos</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Administradoras</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Incorporadoras</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Escritórios de arquitetura e engenharia</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Proprietários de imóveis de médio e alto padrão</li>
              </div>
            </ul>
          </div>
        </div>
      </section>

           <section className="py-12 px-6 mx-auto bg-[#ffffff] w-full flex flex-col justify-center items-center">
       <div className=" flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9] justify-self-start" style={{ fontFamily: 'Felix Titling, serif' }}>Por que nos escolher?</h2>
          </div>
          <div className="flex gap-2">
            <ul className="gap-2 flex flex-col justify-self-end">
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Consultoria técnica independente</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Foco exclusivo em impermeabilização</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Experiência comprovada e atualizada com normas técnicas</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" className="max-w-fit"/></li>
                <li>Visão estratégica: prevenção, economia e valorização</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" /></li>
                <li>Transparência e compromisso com o cliente</li>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 mx-auto bg-[#0a3062] w-full flex flex-col justify-center items-center bg-[#0a3062] text-white">
       <div className=" flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9] justify-self-start" style={{ fontFamily: 'Felix Titling, serif' }}>Cases e</h2>
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9] justify-self-start" style={{ fontFamily: 'Felix Titling, serif' }}>Resultados</h2>
            <h2>Mais de 100 projetos realizados com excelência em SP, RJ e MG.</h2>
          </div>
          <div className="flex gap-2">
            <ul className="gap-2 flex flex-col justify-self-end list-disc">
              <div className="flex items-center gap-2">
                <li>Redução de custos com manutenções emergenciais</li>
              </div>
              <div className="flex items-center gap-2">
                <li>Aumento da durabilidade das lajes e coberturas</li>
              </div>
              <div className="flex items-center gap-2">
                <li>Valorização patrimonial após entrega da obra</li>
              </div>
            </ul>
          </div>
        </div>
      </section>


      <footer className="bg-[#0a3062] py-6 text-center text-sm text-white">
        © 2025 Nó em Pingo d’Água. Todos os direitos reservados. Contato: (11) 91716-5721
      </footer>
    </div>
  );
}