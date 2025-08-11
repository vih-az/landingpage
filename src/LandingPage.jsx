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
<section className=" mx-auto bg-[#0a3062] w-full h-[34rem] flex flex-col justify-center items-center bg-[url(https://i.postimg.cc/jjsVDgxs/Design-sem-nome-4-1.png)] text-white bg-no-repeat bg-center bg-cover">
       <div className=" flex flex-col justify-end md:justify-center gap-2 w-full h-full z-10 bg-linear-[90deg,#0A3062_0%,#FFFFFF_100%]">
        <div className="w-full h-[50%] flex flex-col items-center md:w-[50%] md:h-full justify-end md:justify-center ">
          <h1 className="text-3xl w-[90%] text-center font-bold italic" style={{ fontFamily: 'Felix Titling, serif' }}>"A impermeabilização é investimento, não despesa"</h1>
          <h1>Giseli Azevedo</h1>
        </div>
        </div>
      </section>
      <div className="bg-[#ffffff] h-[6px]"></div>
      <section className="py-12 px-6 mx-auto bg-[#0a3062] text-white w-ful flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2 w-[80%]">
          <div className="w-[40%]">
            <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>Por que Impermeabilização importa?</h2>
          </div>
          <div className="flex gap-2 w-[60%]">
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


      <section className="bg-[#dddddd] py-12 px-6  w-full flex flex-row justify-center items-center gap-2"  id="quemsomos">
        <div className="flex justify-center items-center gap-2 w-[80%]">
          <div className="flex justify-center items-center w-[40%]">
            <h2 className="text-2xl font-semibold mb-6 text-[#0d68c9]" style={{ fontFamily: 'Felix Titling, serif' }}>Quem Somos</h2>
          </div>
          <div className="max-w-4xl flex flex-col gap-2 w-[60%]">
            <p className="text-justify">
              Com mais de 20 anos de experiência no setor da construção civil, a Nó em Pingo D’Água nasceu para atender uma dor real:
            </p>
            <p className="text-justify">
              Condomínios que precisam de orientação técnica especializada em impermeabilização.
            </p>
            <p className="text-justify">
              Oferecemos consultoria de alto nível com foco em soluções duradouras, redução de custos e valorização dos ativos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 mx-auto bg-[#ffffff] w-full flex flex-row justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-2 w-[80%]">
          <div className="w-[40%] flex justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9]" style={{ fontFamily: 'Felix Titling, serif' }}>Fundadora e Diretora executiva</h2>
          </div>
          <div className=" flex flex-col gap-2 w-[60%]">
            <div>
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
        </div>
      </section>

      <section className="py-12 px-6 mx-auto bg-[#dddddd] w-full flex flex-col justify-center items-center">
       <div className=" flex flex-row gap-2 justify-center items-center w-[80%]">
          <div className="w-[40%] flex justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9] justify-self-start" style={{ fontFamily: 'Felix Titling, serif' }}>Nossa estrutura</h2>
          </div>
          <div className="w-[60%] flex flex-col gap-2">
            <div>
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
       <div className=" flex flex-row gap-2 justify-center items-center w-[80%]">
          <div className="w-[40%] flex justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9] justify-self-start" style={{ fontFamily: 'Felix Titling, serif' }}>Quem atendemos</h2>
          </div>
          <div className="w-[60%]">
            <div>
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
        </div>
      </section>

      <section className="py-12 px-6 mx-auto bg-[#dddddd] w-full flex flex-col justify-center items-center">
       <div className=" flex flex-row justify0-center items-center gap-2 w-[80%]">
          <div className="w-[40%] flex justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9] justify-self-start" style={{ fontFamily: 'Felix Titling, serif' }}>Por que nos escolher?</h2>
          </div>
          <div className="flex gap-2 w-[60%]">
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
      <section className="py-12 px-6 mx-auto bg-[#0a3062] w-full flex flex-row justify-center items-center bg-[#0a3062] text-white gap-2">
        <div className="flex flex-row gap-2 justify-center items-center w-[80%]">
          <div className="w-[40%] flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4 text-white justify-self-start" style={{ fontFamily: 'Felix Titling, serif' }}>Cases e Resultados</h2>
          </div>
          <div className=" flex flex-col gap-2 w-[60%]">
            <div>
              <h2>Mais de 100 projetos realizados com excelência em SP e MG.</h2>
            </div>
            <div className="flex gap-2">
              <ul className="gap-2 flex flex-col justify-self-end list-disc list-inside">
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
        </div>
      </section>
      <section className="py-12 px-6 mx-auto bg-[#ffffff] w-full flex flex-row justify-center items-center bg-[#0a3062] text-white gap-2">
        <div className="flex flex-row gap-2 justify-center items-center w-[80%]">
          <div className="flex flex-col gap-2 w-[50%] text-[#74726e]">
            <img src="https://i.postimg.cc/GpVgJP7p/loogo-04l-1.png" alt=""/>
            <h1>engenharia@noempingodagua.com.br</h1>
            <h1>(11) 91716-5721</h1>
            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiMzMDRmZmUiIGQ9Ik00MS42NywxMy40OGMtMC40LDAuMjYtMC45NywwLjUtMS4yMSwwLjc3Yy0wLjA5LDAuMDktMC4xNCwwLjE5LTAuMTIsMC4yOXYxLjAzbC0wLjMsMS4wMWwtMC4zLDFsLTAuMzMsMS4xIGwtMC42OCwyLjI1bC0wLjY2LDIuMjJsLTAuNSwxLjY3YzAsMC4yNi0wLjAxLDAuNTItMC4wMywwLjc3Yy0wLjA3LDAuOTYtMC4yNywxLjg4LTAuNTksMi43NGMtMC4xOSwwLjUzLTAuNDIsMS4wNC0wLjcsMS41MiBjLTAuMSwwLjE5LTAuMjIsMC4zOC0wLjM0LDAuNTZjLTAuNCwwLjYzLTAuODgsMS4yMS0xLjQxLDEuNzJjLTAuNDEsMC40MS0wLjg2LDAuNzktMS4zNSwxLjExYzAsMCwwLDAtMC4wMSwwIGMtMC4wOCwwLjA3LTAuMTcsMC4xMy0wLjI3LDAuMThjLTAuMzEsMC4yMS0wLjY0LDAuMzktMC45OCwwLjU1Yy0wLjIzLDAuMTItMC40NiwwLjIyLTAuNywwLjMxYy0wLjA1LDAuMDMtMC4xMSwwLjA1LTAuMTYsMC4wNyBjLTAuNTcsMC4yNy0xLjIzLDAuNDUtMS44OSwwLjU0Yy0wLjA0LDAuMDEtMC4wNywwLjAxLTAuMTEsMC4wMmMtMC40LDAuMDctMC43OSwwLjEzLTEuMTksMC4xNmMtMC4xOCwwLjAyLTAuMzcsMC4wMy0wLjU1LDAuMDMgbC0wLjcxLTAuMDRsLTMuNDItMC4xOGMwLTAuMDEtMC4wMSwwLTAuMDEsMGwtMS43Mi0wLjA5Yy0wLjEzLDAtMC4yNywwLTAuNC0wLjAxYy0wLjU0LTAuMDItMS4wNi0wLjA4LTEuNTgtMC4xOSBjLTAuMDEsMC0wLjAxLDAtMC4wMSwwYy0wLjk1LTAuMTgtMS44Ni0wLjUtMi43MS0wLjkzYy0wLjQ3LTAuMjQtMC45My0wLjUxLTEuMzYtMC44MmMtMC4xOC0wLjEzLTAuMzUtMC4yNy0wLjUyLTAuNDIgYy0wLjQ4LTAuNC0wLjkxLTAuODMtMS4zMS0xLjI3Yy0wLjA2LTAuMDYtMC4xMS0wLjEyLTAuMTYtMC4xOGMtMC4wNi0wLjA2LTAuMTItMC4xMy0wLjE3LTAuMTljLTAuMzgtMC40OC0wLjctMC45Ny0wLjk2LTEuNDkgYy0wLjI0LTAuNDYtMC40My0wLjk1LTAuNTgtMS40OWMtMC4wNi0wLjE5LTAuMTEtMC4zNy0wLjE1LTAuNTdjLTAuMDEtMC4wMS0wLjAyLTAuMDMtMC4wMi0wLjA1Yy0wLjEtMC40MS0wLjE5LTAuODQtMC4yNC0xLjI3IGMtMC4wNi0wLjMzLTAuMDktMC42Ni0wLjA5LTFjLTAuMDItMC4xMy0wLjAyLTAuMjctMC4wMi0wLjRsMS45MS0yLjk1bDEuODctMi44OGwwLjg1LTEuMzFsMC43Ny0xLjE4bDAuMjYtMC40MXYtMS4wMyBjMC4wMi0wLjIzLDAuMDMtMC40NywwLjAyLTAuNjljLTAuMDEtMC43LTAuMTUtMS4zOC0wLjM4LTIuMDNjLTAuMjItMC42OS0wLjUzLTEuMzQtMC44NS0xLjk0Yy0wLjM4LTAuNjktMC43OC0xLjMxLTEuMTEtMS44NyBDMTQsNy40LDEzLjY2LDYuNzMsMTMuNzUsNi4yNkMxNC40Nyw2LjA5LDE1LjIzLDYsMTYsNmgxNmM0LjE4LDAsNy43OCwyLjYsOS4yNyw2LjI2QzQxLjQzLDEyLjY1LDQxLjU3LDEzLjA2LDQxLjY3LDEzLjQ4eiIvPjxwYXRoIGZpbGw9IiM0OTI4ZjQiIGQ9Ik00MiwxNnYwLjI3bC0xLjM4LDAuOGwtMC44OCwwLjUxbC0wLjk3LDAuNTZsLTEuOTQsMS4xM2wtMS45LDEuMWwtMS45NCwxLjEybC0wLjc3LDAuNDUgYzAsMC40OC0wLjEyLDAuOTItMC4zNCwxLjMyYy0wLjMxLDAuNTgtMC44MywxLjA2LTEuNDksMS40N2MtMC42NywwLjQxLTEuNDksMC43NC0yLjQxLDAuOThjMCwwLDAtMC4wMS0wLjAxLDAgYy0zLjU2LDAuOTItOC40MiwwLjUtMTAuNzgtMS4yNmMtMC42Ni0wLjQ5LTEuMTItMS4wOS0xLjMyLTEuNzhjLTAuMDYtMC4yMy0wLjA5LTAuNDgtMC4wOS0wLjczdi03LjE5IGMwLjAxLTAuMTUtMC4wOS0wLjMtMC4yNy0wLjQ1Yy0wLjU0LTAuNDMtMS44MS0wLjg0LTMuMjMtMS4yNWMtMS4xMS0wLjMxLTIuMy0wLjYyLTMuMy0wLjkyYy0wLjc5LTAuMjQtMS40Ni0wLjQ4LTEuODYtMC43MSBjMC4xOC0wLjM1LDAuMzktMC43LDAuNjEtMS4wM2MxLjQtMi4wNSwzLjU0LTMuNTYsNi4wMi00LjEzQzE0LjQ3LDYuMDksMTUuMjMsNiwxNiw2aDEwLjhjNS4zNywwLjk0LDEwLjMyLDMuMTMsMTQuNDcsNi4yNiBjMC4xNiwwLjM5LDAuMywwLjgsMC40LDEuMjJjMC4xOCwwLjY2LDAuMjksMS4zNCwwLjMyLDIuMDVDNDIsMTUuNjgsNDIsMTUuODQsNDIsMTZ6Ii8+PHBhdGggZmlsbD0iIzYyMDBlYSIgZD0iTTQyLDE2djQuNDFsLTAuMjIsMC42OGwtMC43NSwyLjMzbC0wLjc4LDIuNGwtMC40MSwxLjI4bC0wLjM4LDEuMTlsLTAuMzcsMS4xM2wtMC4zNiwxLjEybC0wLjE5LDAuNTkgbC0wLjI1LDAuNzhjMCwwLjc2LTAuMDIsMS40My0wLjA3LDJjLTAuMDEsMC4wNi0wLjAyLDAuMTItMC4wMiwwLjE4Yy0wLjA2LDAuNTMtMC4xNCwwLjk4LTAuMjcsMS4zNiBjLTAuMDEsMC4wNi0wLjAzLDAuMTItMC4wNSwwLjE3Yy0wLjI2LDAuNzItMC42NSwxLjE4LTEuMjMsMS40OGMtMC4xNCwwLjA4LTAuMywwLjE0LTAuNDcsMC4yYy0wLjUzLDAuMTgtMS4yLDAuMjctMi4wMiwwLjMyIGMtMC42LDAuMDQtMS4yOSwwLjA1LTIuMDcsMC4wNUgzMS40bC0xLjE5LTAuMDVMMzAsMzcuNjFsLTIuMTctMC4wOWwtMi4yLTAuMDlsLTcuMjUtMC4zbC0xLjg4LTAuMDhoLTAuMjYgYy0wLjc4LTAuMDEtMS40NS0wLjA2LTIuMDMtMC4xNGMtMC44NC0wLjEzLTEuNDktMC4zNS0xLjk4LTAuNjhjLTAuNy0wLjQ1LTEuMTEtMS4xMS0xLjM1LTIuMDNjLTAuMDYtMC4yMi0wLjExLTAuNDUtMC4xNC0wLjcgYy0wLjEtMC41OC0wLjE1LTEuMjUtMC4xOC0yYzAtMC4xNSwwLTAuMy0wLjAxLTAuNDZjLTAuMDEtMC4wMSwwLTAuMDEsMC0wLjAxdi0wLjU4Yy0wLjAxLTAuMjktMC4wMS0wLjU5LTAuMDEtMC45bDAuMDUtMS42MSBsMC4wMy0xLjE1bDAuMDQtMS4zNHYtMC4xOWwwLjA3LTIuNDZsMC4wNy0yLjQ2bDAuMDctMi4zMWwwLjA2LTIuMjdsMC4wMi0wLjZjMC0wLjMxLTEuMDUtMC40OS0yLjIyLTAuNjQgYy0wLjkzLTAuMTItMS45NS0wLjIzLTIuNTYtMC4zN2MwLjA1LTAuMjMsMC4xLTAuNDYsMC4xNi0wLjY4YzAuMTgtMC43MiwwLjQ1LTEuNCwwLjc5LTIuMDVjMC4xOC0wLjM1LDAuMzktMC43LDAuNjEtMS4wMyBjMi4xNi0wLjk1LDQuNDEtMS42OSw2Ljc2LTIuMTdjMi4wNi0wLjQzLDQuMjEtMC42Niw2LjQzLTAuNjZjNy4zNiwwLDE0LjE2LDIuNDksMTkuNTQsNi42OWMwLjUyLDAuNCwxLjAzLDAuODMsMS41MywxLjI4IEM0MiwxNS42OCw0MiwxNS44NCw0MiwxNnoiLz48cGF0aCBmaWxsPSIjNjczYWI3IiBkPSJNNDIsMTguMzd2NC41NGwtMC41NSwxLjA2bC0xLjA1LDIuMDVsLTAuNTYsMS4wOGwtMC41MSwwLjk5bC0wLjIyLDAuNDNjMCwwLjMxLDAsMC42MS0wLjAyLDAuOSBjMCwwLjQzLTAuMDIsMC44NC0wLjA1LDEuMjJjLTAuMDQsMC40NS0wLjEsMC44Ni0wLjE2LDEuMjRjLTAuMTUsMC43OS0wLjM2LDEuNDctMC42NiwyLjAzYy0wLjA0LDAuMDctMC4wOCwwLjE0LTAuMTIsMC4yIGMtMC4xMSwwLjE4LTAuMjQsMC4zNS0wLjM4LDAuNTFjLTAuMTgsMC4yMi0wLjM4LDAuNDEtMC42MSwwLjU3Yy0wLjM0LDAuMjYtMC43NCwwLjQ3LTEuMiwwLjYzYy0wLjU3LDAuMjEtMS4yMywwLjM1LTIuMDEsMC40MyBjLTAuNTEsMC4wNS0xLjA3LDAuMDgtMS42OCwwLjA4bC0wLjQyLDAuMDJsLTIuMDgsMC4xMmgtMC4wMUwyNy41LDM2LjZsLTIuMjUsMC4xM2wtMy4xLDAuMThsLTMuNzcsMC4yMmwtMC41NSwwLjAzIGMtMC41MSwwLTAuOTktMC4wMy0xLjQ1LTAuMDljLTAuMDUtMC4wMS0wLjA5LTAuMDItMC4xNC0wLjAyYy0wLjY4LTAuMTEtMS4zLTAuMjktMS44Ni0wLjU0Yy0wLjY4LTAuMy0xLjI3LTAuNy0xLjc3LTEuMTggYy0wLjQ0LTAuNDMtMC44Mi0wLjkyLTEuMTMtMS40N2MtMC4wNy0wLjEzLTAuMTQtMC4yNS0wLjItMC4zOWMtMC4zLTAuNTktMC41NC0xLjI1LTAuNzItMS45N2MtMC4wMy0wLjEyLTAuMDYtMC4yNS0wLjA4LTAuMzggYy0wLjA2LTAuMjMtMC4xMS0wLjQ3LTAuMTQtMC43MmMtMC4xMS0wLjY0LTAuMTctMS4zMi0wLjItMi4wM3YtMC4wMWMtMC4wMS0wLjI5LTAuMDItMC41Ny0wLjAyLTAuODdsLTAuNDktMS4xN2wtMC4wNy0wLjE4IEw5LjUsMjUuOTlMOC43NSwyNC4ybC0wLjEyLTAuMjlsLTAuNzItMS43M2wtMC44LTEuOTNjMCwwLDAsMC0wLjAxLDBMNi4yOSwxOC4zTDYsMTcuNTlWMTZjMC0wLjYzLDAuMDYtMS4yNSwwLjE3LTEuODUgYzAuMDUtMC4yMywwLjEtMC40NiwwLjE2LTAuNjhjMC44NS0wLjQ5LDEuNzQtMC45NCwyLjY1LTEuMzRjMi4wOC0wLjkzLDQuMzEtMS42Miw2LjYyLTIuMDRjMS43Mi0wLjMxLDMuNTEtMC40OCw1LjMyLTAuNDggYzcuMzEsMCwxMy45NCwyLjY1LDE5LjEyLDYuOTdjMC4yLDAuMTYsMC4zOSwwLjMyLDAuNTgsMC40OUM0MS4wOSwxNy40OCw0MS41NSwxNy45MSw0MiwxOC4zN3oiLz48cGF0aCBmaWxsPSIjOGUyNGFhIiBkPSJNNDIsMjEuMzV2NS4xNGwtMC41NywxLjE5bC0xLjA4LDIuMjVsLTAuMDEsMC4wM2MwLDAuNDMtMC4wMiwwLjgyLTAuMDUsMS4xN2MtMC4xLDEuMTUtMC4zOCwxLjg4LTAuODQsMi4zMyBjLTAuMzMsMC4zNC0wLjc0LDAuNTMtMS4yNSwwLjYzYy0wLjAzLDAuMDEtMC4wNywwLjAxLTAuMSwwLjAyYy0wLjE2LDAuMDMtMC4zMywwLjA1LTAuNTEsMC4wNWMtMC42MiwwLjA2LTEuMzUsMC4wMi0yLjE5LTAuMDQgYy0wLjA5LDAtMC4xOS0wLjAxLTAuMjktMC4wMmMtMC42MS0wLjA0LTEuMjYtMC4wOC0xLjk4LTAuMTFjLTAuMzktMC4wMS0wLjgtMC4wMi0xLjIyLTAuMDJoLTAuMDJsLTEuMDEsMC4wOGgtMC4wMWwtMi4yNywwLjE2IGwtMi41OSwwLjJsLTAuMzgsMC4wM2wtMy4wMywwLjIybC0xLjU3LDAuMTJsLTEuNTUsMC4xMWMtMC4yNywwLTAuNTMsMC0wLjc5LTAuMDFjMCwwLTAuMDEtMC4wMS0wLjAxLDAgYy0xLjEzLTAuMDItMi4xNC0wLjA5LTMuMDQtMC4yNmMtMC44My0wLjE0LTEuNTYtMC4zNi0yLjE4LTAuNjljLTAuNjQtMC4zMS0xLjE3LTAuNzUtMS42LTEuMzFjLTAuNDEtMC41NS0wLjcxLTEuMjQtMC45LTIuMDcgYzAtMC4wMSwwLTAuMDEsMC0wLjAxYy0wLjE0LTAuNjctMC4yMi0xLjQ1LTAuMjItMi4zM2wtMC4xNS0wLjI3TDkuNywyNi4zNWwtMC4xMy0wLjIyTDkuNSwyNS45OWwtMC45My0xLjY1bC0wLjQ2LTAuODMgbC0wLjU4LTEuMDNsLTEtMS43OUw2LDE5Ljc1di0zLjY4YzAuODgtMC41OCwxLjc5LTEuMDksMi43My0xLjU1YzEuMTQtMC41OCwyLjMyLTEuMDcsMy41NS0xLjQ3YzEuMzQtMC40NCwyLjc0LTAuNzksNC4xNy0xLjAyIGMxLjQ1LTAuMjQsMi45NC0wLjM2LDQuNDctMC4zNmM2LjgsMCwxMy4wNCwyLjQzLDE3Ljg1LDYuNDdjMC4yMiwwLjE3LDAuNDMsMC4zNiwwLjY0LDAuNTRjMC44NCwwLjc1LDEuNjQsMS41NiwyLjM3LDIuNDEgQzQxLjg2LDIxLjE4LDQxLjk0LDIxLjI2LDQyLDIxLjM1eiIvPjxwYXRoIGZpbGw9IiNjMjE4NWIiIGQ9Ik00MiwyNC43MXY3LjIzYy0wLjI0LTAuMTQtMC41Ny0wLjMxLTAuOTgtMC40OWMtMC4yMi0wLjExLTAuNDctMC4yMi0wLjczLTAuMzIgYy0wLjM4LTAuMTctMC43OS0wLjMzLTEuMjUtMC40OWMtMC4xLTAuMDQtMC4yLTAuMDctMC4zMS0wLjFjLTAuMTgtMC4wNy0wLjM3LTAuMTMtMC41Ni0wLjE5Yy0wLjU5LTAuMTgtMS4yNC0wLjM1LTEuOTItMC41IGMtMC4yNi0wLjA1LTAuNTMtMC4xLTAuOC0wLjE0Yy0wLjg3LTAuMTUtMS44LTAuMjQtMi43Ny0wLjI1Yy0wLjA4LTAuMDEtMC4xNy0wLjAxLTAuMjUtMC4wMWwtMi41NywwLjAybC0zLjUsMC4wMmgtMC4wMSBsLTcuNDksMC4wNmMtMi4zOCwwLTMuODQsMC41Ny00LjcyLDAuOGMwLDAtMC4wMSwwLTAuMDEsMC4wMWMtMC45MywwLjI0LTEuMjIsMC4wOS0xLjMtMS41NGMtMC4wMi0wLjQ1LTAuMDMtMS4wMy0wLjAzLTEuNzQgbC0wLjU2LTAuNDNsLTAuOTgtMC43NGwtMC42LTAuNDZsLTAuMTItMC4wOUw4Ljg4LDI0LjFsLTAuMjUtMC4xOWwtMC41Mi0wLjRsLTAuOTYtMC43Mkw2LDIxLjkxdi0zLjQgYzAuMS0wLjA4LDAuMTktMC4xNSwwLjI5LTAuMjFjMS40NS0xLDMtMS44NSw0LjY0LTIuNTRjMS40Ni0wLjYyLDMtMS4xMSw0LjU4LTEuNDZjMC40My0wLjA5LDAuODctMC4xOCwxLjMyLTAuMjQgYzEuMzMtMC4yMywyLjctMC4zNCw0LjA5LTAuMzRjNi4wMSwwLDExLjUzLDIuMDksMTUuOTEsNS41NWMwLjY2LDAuNTIsMS4zLDEuMDcsMS45LDEuNjZjMC44MiwwLjc4LDEuNTksMS42MSwyLjMsMi40OSBjMC4xNCwwLjE4LDAuMjgsMC4zNiwwLjQyLDAuNTVDNDEuNjQsMjQuMjEsNDEuODIsMjQuNDYsNDIsMjQuNzF6Ii8+PHBhdGggZmlsbD0iI2Q4MWI2MCIgZD0iTTQyLDI4LjcyVjMyYzAsMC42NS0wLjA2LDEuMjktMC4xOCwxLjkxYy0wLjE4LDAuOTItMC40OSwxLjgtMC45MSwyLjYyYy0wLjIyLDAuMDUtMC40NywwLjA1LTAuNzUsMC4wMSBjLTAuNjMtMC4xMS0xLjM3LTAuNDQtMi4xNy0wLjg3Yy0wLjA0LTAuMDEtMC4wOC0wLjAzLTAuMTEtMC4wNWMtMC4yNS0wLjEzLTAuNTEtMC4yNy0wLjc3LTAuNDNjLTAuNTMtMC4yOS0xLjA5LTAuNjEtMS42NS0wLjkxIGMtMC4xMi0wLjA2LTAuMjQtMC4xMi0wLjM1LTAuMThjLTAuNjQtMC4zMy0xLjMtMC42My0xLjk2LTAuODZjMCwwLDAsMC0wLjAxLDBjLTAuMTQtMC4wNS0wLjI5LTAuMS0wLjQ0LTAuMTQgYy0wLjU3LTAuMTYtMS4xNS0wLjI2LTEuNzEtMC4yNmwtMS4xLTAuMzJsLTQuODctMS40MWMwLDAsMCwwLTAuMDEsMGwtMi45OS0wLjg3aC0wLjAxbC0xLjMtMC4zOGMtMy43NiwwLTYuMDcsMS42LTcuMTksMC45OSBjLTAuNDQtMC4yMy0wLjctMC44MS0wLjc5LTEuOTVjLTAuMDMtMC4zMi0wLjA0LTAuNjgtMC4wNC0xLjFsLTEuMTctMC41N2wtMC4wNS0wLjAyaC0wLjAxbC0wLjg0LTAuNDJMOS43LDI2LjM1bC0wLjA3LTAuMDMgbC0wLjE3LTAuMDlMNy41LDI1LjI4TDYsMjQuNTV2LTMuNDNjMC4xNy0wLjE1LDAuMzUtMC4yOSwwLjUzLTAuNDNjMC4xOS0wLjE1LDAuMzgtMC4yOSwwLjU3LTAuNDRjMC4wMSwwLDAuMDEsMCwwLjAxLDAgYzEuMTgtMC44NSwyLjQzLTEuNiwzLjc2LTIuMjJjMS41NS0wLjc0LDMuMi0xLjMxLDQuOTEtMS42OGMwLjI1LTAuMDYsMC41MS0wLjEyLDAuNzctMC4xNmMxLjQyLTAuMjcsMi44OC0wLjQxLDQuMzctMC40MSBjNS4yNywwLDEwLjExLDEuNzEsMTQuMDEsNC41OWMxLjEzLDAuODQsMi4xOCwxLjc3LDMuMTQsMi43OGMwLjc5LDAuODMsMS41MiwxLjczLDIuMTgsMi42N2MwLjA1LDAuMDcsMC4xLDAuMTQsMC4xNSwwLjIgYzAuMzcsMC41NCwwLjcxLDEuMDksMS4wMywxLjY2QzQxLjY0LDI4LjAyLDQxLjgyLDI4LjM3LDQyLDI4LjcyeiIvPjxwYXRoIGZpbGw9IiNmNTAwNTciIGQ9Ik00MS44MiwzMy45MWMtMC4xOCwwLjkyLTAuNDksMS44LTAuOTEsMi42MmMtMC4xOSwwLjM3LTAuNCwwLjcyLTAuNjMsMS4wNmMtMC4xNCwwLjIxLTAuMjksMC40MS0wLjQ0LDAuNiBjLTAuMzYtMC4xNC0wLjg5LTAuMzQtMS41NC0wLjU2YzAsMCwwLDAsMC0wLjAxYy0wLjQ5LTAuMTctMS4wNS0wLjM1LTEuNjUtMC41MmMtMC4xNy0wLjA1LTAuMzQtMC4xLTAuNTItMC4xNSBjLTAuNzEtMC4xOS0xLjQ1LTAuMzYtMi4xNy0wLjQ2Yy0wLjYtMC4xLTEuMTktMC4xNi0xLjc0LTAuMTZsLTAuNDYtMC4xM2gtMC4wMWwtMi40Mi0wLjdsLTEuNDktMC40M2wtMS42Ni0wLjQ4aC0wLjAxbC0wLjU0LTAuMTUgbC02LjUzLTEuODhsLTEuODgtMC41NGwtMS40LTAuMzNsLTIuMjgtMC41NGwtMC4yOC0wLjA3YzAsMCwwLDAtMC4wMSwwbC0yLjI5LTAuNTNjMC0wLjAxLDAtMC4wMSwwLTAuMDFsLTAuNDEtMC4wOWwtMC4yMS0wLjA1IGwtMS42Ny0wLjM5bC0wLjE5LTAuMDVsLTEuNDItMS4xN0w2LDI3Ljl2LTQuMDhjMC4zNy0wLjM2LDAuNzUtMC43LDEuMTUtMS4wM2MwLjEyLTAuMTEsMC4yNS0wLjIxLDAuMzgtMC4zMSBjMC4xMi0wLjEsMC4yNS0wLjIsMC4zOC0wLjNjMC45MS0wLjY5LDEuODctMS4zMSwyLjg5LTEuODRjMS4zLTAuNywyLjY4LTEuMjYsNC4xMy0xLjY2YzAuMjgtMC4wOSwwLjU2LTAuMTcsMC44NS0wLjIzIGMxLjY0LTAuNDEsMy4zNi0wLjYyLDUuMTQtMC42MmM0LjQ3LDAsOC42MywxLjM1LDEyLjA3LDMuNjZjMS43MSwxLjE1LDMuMjUsMi41Myw0LjU1LDQuMWMwLjY2LDAuNzksMS4yNiwxLjYyLDEuNzksMi41IGMwLjA1LDAuMDcsMC4wOSwwLjEzLDAuMTMsMC4yYzAuMzIsMC41MywwLjYyLDEuMDgsMC44OSwxLjY0YzAuMjUsMC41LDAuNDcsMSwwLjY3LDEuNTJDNDEuMzQsMzIuMjUsNDEuNiwzMy4wNyw0MS44MiwzMy45MXoiLz48cGF0aCBmaWxsPSIjZmYxNzQ0IiBkPSJNNDAuMjgsMzcuNTljLTAuMTQsMC4yMS0wLjI5LDAuNDEtMC40NCwwLjZjLTAuNDQsMC41NS0wLjkyLDEuMDUtMS40NiwxLjQ5Yy0wLjQ3LDAuMzktMC45NywwLjc0LTEuNSwxLjA0IGMtMC4yLTAuMDUtMC40LTAuMTEtMC42MS0wLjE5Yy0wLjY2LTAuMjMtMS4zNS0wLjYxLTEuOTktMS4wMWMtMC45Ni0wLjYxLTEuNzktMS4yNy0yLjE2LTEuNTdjLTAuMTQtMC4xMi0wLjIxLTAuMTgtMC4yMS0wLjE4IGwtMS43LTAuMTVMMzAsMzcuNmwtMi4yLTAuMTlsLTIuMjgtMC4ybC0zLjM3LTAuM2wtNS4zNC0wLjQ3bC0wLjAyLTAuMDFsLTEuODgtMC45MWwtMS45LTAuOTJsLTEuNTMtMC43NGwtMC4zMy0wLjE2bC0wLjQxLTAuMiBsLTEuNDItMC42OUw3LjQzLDMxLjlsLTAuNTktMC4yOUw2LDMxLjM1di00LjQ3YzAuNDctMC41NiwwLjk3LTEuMDksMS41LTEuNmMwLjM0LTAuMzIsMC43LTAuNjQsMS4wNy0wLjk0IGMwLjA2LTAuMDUsMC4xMi0wLjEsMC4xOC0wLjE0YzAuMDQtMC4wNSwwLjA5LTAuMDgsMC4xMy0wLjFjMC41OS0wLjQ4LDEuMjEtMC45MSwxLjg1LTEuM2MwLjc0LTAuNDcsMS41Mi0wLjg5LDIuMzMtMS4yNCBjMC44Ny0wLjM5LDEuNzgtMC43MiwyLjcyLTAuOTdjMS42My0wLjQ2LDMuMzYtMC43LDUuMTQtMC43YzQuMDgsMCw3Ljg1LDEuMjQsMTAuOTYsMy4zN2MxLjk5LDEuMzYsMy43MSwzLjA4LDUuMDcsNS4wNyBjMC40NSwwLjY0LDAuODUsMS4zMiwxLjIyLDIuMDJjMC4xMywwLjI2LDAuMjYsMC41MiwwLjM3LDAuNzhjMC4xMiwwLjI1LDAuMjMsMC41LDAuMzQsMC43NWMwLjIxLDAuNTIsMC40LDEuMDQsMC41NywxLjU4IGMwLjMyLDEsMC41NiwyLjAyLDAuNzEsMy4wOEM0MC4yMSwzNi44OSw0MC4yNSwzNy4yNCw0MC4yOCwzNy41OXoiLz48cGF0aCBmaWxsPSIjZmY1NzIyIiBkPSJNMzguMzksMzkuNDJjMCwwLjA4LDAsMC4xNy0wLjAxLDAuMjZjLTAuNDcsMC4zOS0wLjk3LDAuNzQtMS41LDEuMDRjLTAuMjIsMC4xMi0wLjQ0LDAuMjQtMC42NywwLjM0IGMtMC4yMywwLjExLTAuNDYsMC4yMS0wLjcsMC4zYy0wLjM0LTAuMTgtMC44LTAuNC0xLjI5LTAuNjFjLTAuNjktMC4zMS0xLjQ0LTAuNTktMi4wMi0wLjY4Yy0wLjE0LTAuMDMtMC4yNy0wLjA0LTAuMzktMC4wNCBsLTEuNjQtMC4yMWgtMC4wMmwtMi4wNC0wLjI3bC0yLjA2LTAuMjdsLTAuOTYtMC4xMmwtNy41Ni0wLjk4Yy0wLjQ5LDAtMS4wMS0wLjAzLTEuNTUtMC4xYy0wLjY2LTAuMDYtMS4zNS0wLjE2LTIuMDQtMC4zIGMtMC42OC0wLjEyLTEuMzctMC4yOC0yLjAzLTAuNDVjLTAuNjktMC4xNi0xLjM3LTAuMzUtMi0wLjUzYy0wLjczLTAuMjItMS40MS0wLjQzLTEuOTgtMC42MmMtMC40Ny0wLjE1LTAuODctMC4yOS0xLjE4LTAuNCBjLTAuMTgtMC40My0wLjMzLTAuODgtMC40NC0xLjM0QzYuMSwzMy42Niw2LDMyLjg0LDYsMzJ2LTEuNjdjMC4zMi0wLjUzLDAuNjctMS4wNSwxLjA2LTEuNTRjMC43MS0wLjk0LDEuNTItMS44LDIuNC0yLjU2IGMwLjAzLTAuMDQsMC4wNy0wLjA3LDAuMS0wLjA5bDAuMDEtMC4wMWMwLjMxLTAuMjgsMC42My0wLjUzLDAuOTctMC43N2MwLjA0LTAuMDQsMC4wOC0wLjA3LDAuMTItMC4xIGMwLjE2LTAuMTIsMC4zMy0wLjI0LDAuNTEtMC4zNWMxLjQzLTAuOTcsMy4wMS0xLjczLDQuNy0yLjI0YzEuNi0wLjQ4LDMuMjktMC43Myw1LjA1LTAuNzNjMy40OSwwLDYuNzUsMS4wMyw5LjQ3LDIuNzkgYzIuMDEsMS4yOSwzLjc0LDIuOTksNS4wNiw0Ljk4YzAuMTYsMC4yMywwLjMxLDAuNDYsMC40NiwwLjdjMC42OSwxLjE3LDEuMjYsMi40MywxLjY4LDMuNzVjMC4wNSwwLjE1LDAuMDksMC4zLDAuMTMsMC40NiBjMC4wOCwwLjI3LDAuMTUsMC41NSwwLjIxLDAuODNjMC4wMiwwLjA3LDAuMDQsMC4xNCwwLjA2LDAuMjJjMC4xNCwwLjYzLDAuMjQsMS4yOSwwLjMxLDEuOTVjMCwwLjAxLDAsMC4wMSwwLDAuMDEgQzM4LjM2LDM4LjIyLDM4LjM5LDM4LjgyLDM4LjM5LDM5LjQyeiIvPjxwYXRoIGZpbGw9IiNmZjZmMDAiIGQ9Ik0zNi4zMywzOS40MmMwLDAuMzUtMC4wMiwwLjczLTAuMDYsMS4xMWMtMC4wMiwwLjE4LTAuMDQsMC4zNi0wLjA2LDAuNTNjLTAuMjMsMC4xMS0wLjQ2LDAuMjEtMC43LDAuMyBjLTAuNDUsMC4xNy0wLjkxLDAuMzEtMS4zOCwwLjQxYy0wLjMyLDAuMDctMC42NSwwLjEzLTAuOTgsMC4xNmgtMC4wMWMtMC4zMS0wLjE5LTAuNjctMC40Mi0xLjA0LTAuNjggYy0wLjY3LTAuNDctMS4zNy0xLTEuOTMtMS40M2MtMC4wMS0wLjAxLTAuMDEtMC4wMS0wLjAyLTAuMDJjLTAuNTktMC40NS0xLjAxLTAuNzktMS4wMS0wLjc5bC0xLjA2LDAuMDRsLTIuMDQsMC4wN2wtMC45NSwwLjA0IGwtMy44MiwwLjE0bC0zLjIzLDAuMTJjLTAuMjEsMC4wMS0wLjQ2LDAuMDEtMC43NywwaC0wLjAxYy0wLjQyLTAuMDEtMC45Mi0wLjA0LTEuNDctMC4wOWMtMC42NC0wLjA1LTEuMzQtMC4xMS0yLjA1LTAuMTggYy0wLjY5LTAuMDgtMS4zOS0wLjE2LTIuMDYtMC4yNGMtMC43NC0wLjA4LTEuNDQtMC4xNy0yLjA0LTAuMjVjLTAuNDctMC4wNi0wLjg4LTAuMTEtMS4yMS0wLjE1Yy0wLjI4LTAuMzItMC41My0wLjY1LTAuNzctMS4wMSBjLTAuMzYtMC41NC0wLjY3LTEuMTEtMC45MS0xLjcyYy0wLjE4LTAuNDMtMC4zMy0wLjg4LTAuNDQtMS4zNGMwLjI5LTAuODksMC42Ny0xLjczLDEuMTItMi41NGMwLjM2LTAuNjYsMC43OC0xLjI5LDEuMjQtMS44OSBjMC40NS0wLjU5LDAuOTQtMS4xNCwxLjQ3LTEuNjR2LTAuMDFjMC4xNS0wLjE1LDAuMy0wLjI5LDAuNDUtMC40MmMwLjI4LTAuMjYsMC41Ny0wLjUsMC44Ny0wLjczaDAuMDEgYzAuMDEtMC4wMiwwLjAyLTAuMDIsMC4wMy0wLjAzYzAuMjQtMC4xOSwwLjQ5LTAuMzYsMC43NC0wLjUzYzEuNDgtMS4wMSwzLjE1LTEuNzYsNC45NS0yLjJjMS4xOS0wLjI5LDIuNDQtMC40NSwzLjczLTAuNDUgYzIuNTQsMCw0Ljk0LDAuNjEsNy4wNSwxLjcxaDAuMDFjMS44MSwwLjkzLDMuNDEsMi4yMSw0LjcsMy43NWMwLjcxLDAuODIsMS4zMiwxLjcyLDEuODIsMi42N2MwLjM1LDAuNjQsMC42NSwxLjMxLDAuOSwxLjk5IGMwLjAyLDAuMDYsMC4wNCwwLjExLDAuMDYsMC4xNmMwLjE3LDAuNSwwLjMyLDEuMDIsMC40NSwxLjU0YzAuMDksMC4zNywwLjE2LDAuNzUsMC4yMiwxLjEzYzAuMDIsMC4xMiwwLjA0LDAuMjMsMC4wNSwwLjM1IEMzNi4yOCwzNy45OSwzNi4zMywzOC43LDM2LjMzLDM5LjQyeiIvPjxwYXRoIGZpbGw9IiNmZjk4MDAiIGQ9Ik0zNC4yOCwzOS40MnYwLjFjMCwwLjM0LTAuMDMsMC43Ny0wLjA2LDEuMjNjLTAuMDMsMC4zNC0wLjA2LDAuNjktMC4wOSwxLjAyYy0wLjMyLDAuMDctMC42NSwwLjEzLTAuOTgsMC4xNiBoLTAuMDFDMzIuNzYsNDEuOTgsMzIuMzksNDIsMzIsNDJoLTEuNzVsLTAuMzgtMC4xMWwtMS45Ny0wLjZsLTItMC42bC00LjYzLTEuMzlsLTItMC42YzAsMC0wLjgzLDAuMzMtMiwwLjcyaC0wLjAxIGMtMC40NSwwLjE1LTAuOTQsMC4zMS0xLjQ2LDAuNDdjLTAuNjUsMC4xOS0xLjM0LDAuMzgtMi4wMiwwLjUzYy0wLjcsMC4xNi0xLjM5LDAuMjgtMi4wMSwwLjMzYy0wLjE5LDAuMDItMC4zOCwwLjAzLTAuNTUsMC4wMyBjLTAuNTYtMC4zMS0xLjEtMC42OC0xLjU5LTEuMDljLTAuNDMtMC4zNi0wLjgzLTAuNzUtMS4yLTEuMThjLTAuMjgtMC4zMi0wLjUzLTAuNjUtMC43Ny0xLjAxYzAuMDctMC40NSwwLjE1LTAuODksMC4yNy0xLjMyIGMwLjMtMS4xOSwwLjc3LTIuMzMsMS4zOS0zLjM3YzAuMzQtMC41OSwwLjcyLTEuMTYsMS4xNi0xLjY5YzAuMDEtMC4wMywwLjA0LTAuMDYsMC4wNy0wLjA4Yy0wLjAxLTAuMDEsMC0wLjAxLDAtMC4wMSBjMC4xMy0wLjE3LDAuMjctMC4zMywwLjQxLTAuNDhjMC0wLjAxLDAtMC4wMSwwLTAuMDFjMC40MS0wLjQ0LDAuODMtMC44NiwxLjI5LTEuMjVjMC4xNi0wLjEzLDAuMzEtMC4yNiwwLjQ4LTAuMzkgYzAuMDMtMC4wMywwLjA2LTAuMDUsMC4xLTAuMDhjMi4yNS0xLjcyLDUuMDYtMi43Niw4LjA5LTIuNzZjMy40NCwwLDYuNTcsMS4yOSw4Ljk0LDMuNDFjMS4xNCwxLjAzLDIuMTEsMi4yNiwyLjg0LDMuNjMgYzAuMDYsMC4xLDAuMTIsMC4yMSwwLjE3LDAuMzJjMC4wOSwwLjE4LDAuMTgsMC4zNywwLjI2LDAuNTdjMC4zMywwLjcyLDAuNTksMS40OCwwLjc3LDIuMjZjMC4wMiwwLjA4LDAuMDQsMC4xNiwwLjA2LDAuMjQgYzAuMDgsMC4zNywwLjE1LDAuNzUsMC4yLDEuMTNDMzQuMjQsMzguMjEsMzQuMjgsMzguODEsMzQuMjgsMzkuNDJ6Ii8+PHBhdGggZmlsbD0iI2ZmYzEwNyIgZD0iTTMyLjIyLDM5LjQyYzAsMC4yLTAuMDEsMC40Mi0wLjAyLDAuNjVjLTAuMDIsMC4zNy0wLjA1LDAuNzctMC4xLDEuMThjLTAuMDIsMC4yNS0wLjA2LDAuNS0wLjEsMC43NWgtNS40OCBsLTEuMDYtMC4xN2wtNC4xNC0wLjY2bC0wLjU5LTAuMDlsLTEuMzUtMC4yMmMtMC41OSwwLTEuODcsMC4yNi0zLjIyLDAuNTFjLTAuNzEsMC4xMy0xLjQzLDAuMjctMi4wOCwwLjM2IGMtMC4wOCwwLjAxLTAuMTYsMC4wMi0wLjIzLDAuMDNoLTAuMDFjLTAuNy0wLjE1LTEuMzgtMC4zOC0yLjAyLTAuNjhjLTAuMi0wLjA5LTAuNC0wLjE5LTAuNi0wLjNjLTAuNTYtMC4zMS0xLjEtMC42OC0xLjU5LTEuMDkgYy0wLjAxLTAuMTItMC4wMi0wLjIyLTAuMDItMC4yN2MwLTAuMjYsMC4wMS0wLjUxLDAuMDMtMC43NmMwLjA0LTAuNjQsMC4xMy0xLjI2LDAuMjctMS44NmMwLjIyLTAuOTEsMC41NC0xLjc5LDAuOTctMi42IGMwLjA4LTAuMTcsMC4xNy0wLjM0LDAuMjctMC41YzAuMDQtMC4wOCwwLjA5LTAuMTUsMC4xMy0wLjIzYzAuMTgtMC4yOSwwLjM4LTAuNTcsMC41OC0wLjg1YzAuNDItMC41NSwwLjg5LTEuMDcsMS4zOS0xLjU0IGMwLjAxLDAsMC4wMSwwLDAuMDEsMGMwLjA0LTAuMDQsMC4wOC0wLjA4LDAuMTItMC4xMWMwLjA1LTAuMDQsMC4wOS0wLjA5LDAuMTQtMC4xMmMwLjItMC4xOCwwLjQtMC4zNCwwLjYxLTAuNDkgYzAtMC4wMSwwLjAxLTAuMDEsMC4wMS0wLjAxYzEuODktMS40MSw0LjIzLTIuMjQsNi43OC0yLjI0YzEuOTgsMCwzLjgyLDAuNSw1LjQzLDEuMzhoMC4wMWMxLjM4LDAuNzYsMi41OCwxLjc5LDMuNTMsMy4wMyBjMC4zNywwLjQ4LDAuNywwLjk5LDAuOTgsMS41M2gwLjAxYzAuMDUsMC4xLDAuMSwwLjIsMC4xNSwwLjNjMC4zLDAuNTksMC41NCwxLjIxLDAuNzIsMS44NWgwLjAxYzAuMDEsMC4wNSwwLjAzLDAuMSwwLjA0LDAuMTUgYzAuMTIsMC40MywwLjIyLDAuODcsMC4yOSwxLjMyYzAuMDEsMC4wOSwwLjAyLDAuMTksMC4wMywwLjI4QzMyLjE5LDM4LjQzLDMyLjIyLDM4LjkyLDMyLjIyLDM5LjQyeiIvPjxwYXRoIGZpbGw9IiNmZmQ1NGYiIGQ9Ik0zMC4xNywzOS4zMWMwLDAuMTYsMCwwLjMzLTAuMDIsMC40OXYwLjAxYzAsMC4wMSwwLDAuMDEsMCwwLjAxYy0wLjAyLDAuNzItMC4xMiwxLjQzLTAuMjgsMi4wNyBjMCwwLjA0LTAuMDEsMC4wNy0wLjAzLDAuMTFoLTQuNjdsLTMuODUtMC44M2wtMC41MS0wLjExbC0wLjA4LDAuMDJsLTQuMjcsMC44OEwxNi4yNyw0MkgxNmMtMC42NCwwLTEuMjctMC4wNi0xLjg4LTAuMTggYy0wLjA5LTAuMDItMC4xOC0wLjA0LTAuMjctMC4wNmgtMC4wMWMtMC43LTAuMTUtMS4zOC0wLjM4LTIuMDItMC42OGMtMC4wMi0wLjExLTAuMDQtMC4yMi0wLjA1LTAuMzMgYy0wLjA3LTAuNDMtMC4xLTAuODgtMC4xLTEuMzNjMC0wLjE3LDAtMC4zNCwwLjAxLTAuNTFjMC4wMy0wLjU0LDAuMTEtMS4wNywwLjIzLTEuNThjMC4wOC0wLjM4LDAuMTktMC43NSwwLjMyLTEuMSBjMC4xMS0wLjMxLDAuMjQtMC42MSwwLjM4LTAuOWMwLjEyLTAuMjUsMC4yNi0wLjQ5LDAuNC0wLjczYzAuMTQtMC4yMywwLjI5LTAuNDUsMC40NS0wLjY3YzAuNC0wLjU1LDAuODctMS4wNiwxLjM5LTEuNTEgYzAuMy0wLjI2LDAuNjMtMC41MSwwLjk3LTAuNzNjMS40Ni0wLjk2LDMuMjEtMS41Miw1LjEtMS41MmMwLjM3LDAsMC43MywwLjAyLDEuMDgsMC4wN2gwLjAyYzEuMDcsMC4xMiwyLjA3LDAuNDIsMi45OSwwLjg3IGMwLjAxLDAsMC4wMSwwLDAuMDEsMGMxLjQ1LDAuNzEsMi42OCwxLjc4LDMuNTgsMy4xYzAuMTUsMC4yMiwwLjMsMC40NiwwLjQzLDAuN2MwLjExLDAuMTksMC4yMSwwLjM5LDAuMywwLjU5IGMwLjE0LDAuMzEsMC4yNywwLjY0LDAuMzgsMC45N2gwLjAxYzAuMTEsMC4zNywwLjIxLDAuNzQsMC4yOCwxLjEzdjAuMDFDMzAuMTEsMzguMTYsMzAuMTcsMzguNzMsMzAuMTcsMzkuMzF6Ii8+PHBhdGggZmlsbD0iI2ZmZTA4MiIgZD0iTTI4LjExLDM5LjUydjAuMDNjMCwwLjU5LTAuMDcsMS4xNy0wLjIxLDEuNzRjLTAuMDUsMC4yNC0wLjEyLDAuNDgtMC4yMSwwLjcxaC00LjQ4bC0yLjI5LTAuNjNMMTguNjMsNDJIMTYgYy0wLjY0LDAtMS4yNy0wLjA2LTEuODgtMC4xOGMtMC4wMi0wLjAzLTAuMDMtMC4wNi0wLjA0LTAuMDljLTAuMTQtMC40My0wLjI1LTAuODYtMC4zLTEuMzFjLTAuMDQtMC4yOS0wLjA2LTAuNTktMC4wNi0wLjkgYzAtMC4xMiwwLTAuMjUsMC4wMi0wLjM3YzAuMDEtMC40NywwLjA4LTAuOTMsMC4yLTEuMzdjMC4wNi0wLjMsMC4xNS0wLjU5LDAuMjctMC44N2MwLjA0LTAuMTQsMC4xLTAuMjcsMC4xNy0wLjQgYzAuMTUtMC4zNCwwLjMzLTAuNjcsMC41My0wLjk5YzAuMjItMC4zMiwwLjQ2LTAuNjIsMC43My0wLjljMC4zMi0wLjM2LDAuNjgtMC42OSwxLjA5LTAuOTZjMC43LTAuNTEsMS41LTAuODksMi4zNy0xLjEgYzAuNTgtMC4xNiwxLjE5LTAuMjQsMS44Mi0wLjI0YzIsMCwzLjc5LDAuOCw1LjA5LDIuMDljMC4wNSwwLjA1LDAuMTEsMC4xMSwwLjE2LDAuMThoMC4wMWMwLjE0LDAuMTUsMC4yNywwLjMsMC40LDAuNDcgYzAuMzcsMC40NywwLjY4LDAuOTgsMC45MiwxLjU0YzAuMTIsMC4yNiwwLjIyLDAuNTMsMC4zLDAuODFjMC4wMSwwLjA0LDAuMDIsMC4wNywwLjAzLDAuMTFjMC4xNCwwLjQ5LDAuMjMsMSwwLjI1LDEuNTMgQzI4LjEsMzkuMiwyOC4xMSwzOS4zNiwyOC4xMSwzOS41MnoiLz48cGF0aCBmaWxsPSIjZmZlY2IzIiBkPSJNMjYuMDYsMzkuNTJjMCwwLjQxLTAuMDUsMC44LTAuMTYsMS4xN2MtMC4xLDAuNC0wLjI1LDAuNzgtMC40NCwxLjE0Yy0wLjAzLDAuMDYtMC4xLDAuMTctMC4xLDAuMTdoLTguODggYy0wLjAxLTAuMDEtMC4wMi0wLjAzLTAuMDItMC4wNGMtMC4xMi0wLjE5LTAuMjItMC4zOC0wLjMtMC41OWMtMC4yLTAuNDYtMC4zMi0wLjk2LTAuMzYtMS40OGMtMC4wMi0wLjEyLTAuMDItMC4yNS0wLjAyLTAuMzcgYzAtMC4wNiwwLTAuMTMsMC4wMS0wLjE5YzAuMDEtMC40NCwwLjA3LTAuODYsMC4xOS0xLjI1YzAuMS0wLjM2LDAuMjMtMC42OSwwLjQtMS4wMWMwLDAsMC4wMS0wLjAxLDAuMDEtMC4wMiBjMC4xMi0wLjIxLDAuMjUtMC40MiwwLjQtMC42MmMwLjQ5LTAuNjYsMS4xNC0xLjIsMS44OS0xLjU1YzAuMDEsMCwwLjAxLDAsMC4wMSwwYzAuMjQtMC4xMiwwLjQ5LTAuMjIsMC43NS0wLjI5YzAsMCwwLDAsMC4wMSwwIGMwLjQ2LTAuMTQsMC45Ni0wLjIxLDEuNDctMC4yMWMwLjU5LDAsMS4xNiwwLjA5LDEuNjgsMC4yOGMwLjE5LDAuMDUsMC4zNywwLjEzLDAuNTUsMC4yMmMwLDAsMCwwLDAuMDEsMCBjMC44NiwwLjQxLDEuNTksMS4wNSwyLjA5LDEuODVjMC4xLDAuMTUsMC4xOSwwLjMxLDAuMjcsMC40OGMwLjA0LDAuMDcsMC4wOCwwLjE1LDAuMTEsMC4yMmMwLjIzLDAuNTIsMC4zNywxLjA5LDAuNDEsMS42OSBjMC4wMSwwLjA1LDAuMDEsMC4xLDAuMDEsMC4xNkMyNi4wNiwzOS4zNiwyNi4wNiwzOS40NCwyNi4wNiwzOS41MnoiLz48Zz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zMCwxMUgxOGMtMy45LDAtNywzLjEtNyw3djEyYzAsMy45LDMuMSw3LDcsN2gxMmMzLjksMCw3LTMuMSw3LTdWMThDMzcsMTQuMSwzMy45LDExLDMwLDExeiIvPjxjaXJjbGUgY3g9IjMxIiBjeT0iMTYiIHI9IjEiIGZpbGw9IiNmZmYiLz48L2c+PGc+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==" className="w-fit"/>
          </div>
          <div className="w-[50%]">
            <form action="" method="post" className="flex flex-col gap-2">
              <input type="text" name="" id="" placeholder="Coloque seu nome" className="border-2 border-[#74726e] rounded-sm"/>
              <input type="email" name="" id="" placeholder="Coloque seu email" className="border-2 border-[#74726e] rounded-sm"/>
              <input type="tel" name="" id="" placeholder="Coloque seu telefone" className="border-2 border-[#74726e] rounded-sm"/>
              <textarea name="" id="" className="border-2 border-[#74726e] rounded-sm" placeholder="Coloque sua mensagem"></textarea>
            </form>
          </div>
        </div>
      </section>


      <footer className="bg-[#0a3062] py-6 text-center text-sm text-white">
        © 2025 Nó em Pingo d’Água. Todos os direitos reservados. Contato: (11) 91716-5721
      </footer>
    </div>
  );
}