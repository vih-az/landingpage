import React from "react";
//import { Button } from "@/components/ui/button";
//import "@fontsource-variable/inter";

export default function LandingPage() {
  return (
    <div className="bg-[#dddddd] text-[#74726e] font-[Arial,sans-serif]">
      <header className="bg-[#ffffff] relative w-full h-[500px] text-center text-white justify-center flex flex-col items-center gap-2">
        <img src="https://i.postimg.cc/cJgJHX9K/logo-04l.png" alt="" className="object-cover w-full h-full" />
        {/* <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>
          Evite prejuízos com infiltrações
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Consultoria técnica especializada com mais de 15 anos de experiência. Diagnóstico preciso, economia real, valorização do seu patrimônio.
        </p> */}
        <div className="text-[#ffffff] ml-10 w-fit justify-center flex-col self-center flex items-center gap-2 pl-2 pr-2">
          <h1 className="bg-[#0a3062] pl-2 pr-2">Soluções inteligentes, seguras e eficazes para condomínios</h1>
          <h1 className="bg-[#0d68c9] pl-2 pr-2">que buscam proteger e valorizar seus imóveis</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 text-[#0d68c9] mb-16">
          <button className="bg-[#0a3062] hover:bg-[#0d68c9] text-white rounded-sm w-fit self-center pl-2 pr-2">
            <a href="tel:015 11 91716-5721">Ligar para (11) 91716-5721</a>
          </button>
          {/* <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0a3062]">
            <a href="https://wa.me/5511917828711" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button> */}
        </div>
      </header>

      <section className="py-12 px-6 mx-auto bg-[#0a3062] text-white w-ful flex flex-col justify-center items-center">
        <div>
          <div>
            <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>Por que Impermeabilização importa?</h2>
          </div>
          <div className="flex gap-2">
            <ul className="gap-2 flex flex-col">
            <div className="flex items-center gap-2">
              <li>
                <img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" />
              </li>
              <li>
                80% das patologias em edificações têm origem na umidade.
              </li>
            </div>
            <div className="flex items-center gap-2">
              <li>
                <img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" />
              </li>
              <li>
                Falhas de impermeabilização podem custar até 5x mais se não forem tratadas a tempo.
              </li>
            </div>
            <div className="flex items-center gap-2">
              <li>
                <img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" />
              </li>
              <li>
                90% dos problemas são causados por erros de aplicação, não de produto.
              </li>
            </div>
            <div className="flex items-center gap-2">
              <li>
                <img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" />
              </li>
              <li>
                Condomínios com impermeabilização correta podem valorizar até 15% no mercado.
              </li>
            </div>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] py-12 px-6">
        <div className="max-w-4xl mx-auto">
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
        <div className="w-[70%]">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9]" style={{ fontFamily: 'Felix Titling, serif' }}>Fundadora</h2>
            <h2 className="text-[#0a3062]">Engª Esp. Giseli Azevedo</h2>
            <h2>Especialista em patologias da construção, com sólida atuação em consultorias, desenvolvimento de soluções técnicas e participação ativa em normas da ABNT e do IBI.</h2>
          </div>
          <div className="flex gap-2">
            <ul className="gap-2 flex flex-col">
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" /></li>
                <li>+15 anos de experiência técnica</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" /></li>
                <li>Referência nacional em impermeabilização condominial</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" /></li>
                <li>Participação em estudos, publicações e desenvolvimento de tecnologias</li>
              </div>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 mx-auto bg-[#ffffff] w-full flex flex-col justify-center items-center">
       <div className="w-[70%]">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0d68c9] justify-self-start" style={{ fontFamily: 'Felix Titling, serif' }}>Nossa estrutura</h2>
            <h2 className="justify-self-center">Nosso modelo de atuação é colaborativo e estratégico. Trabalhamos com os melhores especialistas do setor, combinando know-how técnico com execução eficaz.</h2>
          </div>
          <div className="flex gap-2">
            <ul className="gap-2 flex flex-col justify-self-end">
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" /></li>
                <li>Parcerias de confiança</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" /></li>
                <li>Atendimento consultivo personalizado</li>
              </div>
              <div className="flex items-center gap-2">
                <li><img src="https://i.ibb.co/5XBgqTfM/icons8-ok-24-2.png" alt="" /></li>
                <li>Flexibilidade e excelência operacional</li>
              </div>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 mx-auto bg-[#0a3062] text-white w-ful flex flex-col justify-center items-center">
        <div>
          <div className="flex gap-2">
            <h2 style={{ fontFamily: 'Felix Titling, serif' }} className="text-lg">O que oferecemos</h2>
            <h2>Oferecemos um processo consultivo completo em impermeabilização:</h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-lg" style={{ fontFamily: 'Felix Titling, serif' }}>1.</h2>
            <h2>Vistoria técnica detalhada</h2>
            <h2 className="text-lg" style={{ fontFamily: 'Felix Titling, serif' }}>2.</h2>
            <h2>Diagnóstico e recomendações estratégicas</h2>
          </div>
            <div className="flex justify-center items-center gap-2">
              <h2 className="text-lg" style={{ fontFamily: 'Felix Titling, serif' }}>3.</h2>
              <h2>Equalização técnica e econômica de propostas</h2>
              <h2 className="text-lg" style={{ fontFamily: 'Felix Titling, serif' }}>4.</h2>
            <h2>Fiscalização até a entrega final da obra</h2>
            </div>
          <h1 className="bg-[#0d68c9] pl-2 pr-2">Tudo para garantir a melhor relação custo-benefício e a máxima durabilidade das soluções</h1>
        </div>
      </section>

      <footer className="bg-[#0a3062] py-6 text-center text-sm text-white">
        © 2025 Nó em Pingo d’Água. Todos os direitos reservados. Contato: (11) 91716-5721
      </footer>
    </div>
  );
}