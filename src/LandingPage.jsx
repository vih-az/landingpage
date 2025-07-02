import React from "react";
//import { Button } from "@/components/ui/button";
//import "@fontsource-variable/inter";

export default function LandingPage() {
  return (
    <div className="bg-[#dddddd] text-[#74726e] font-[Arial,sans-serif]">
      <header className="bg-[#ffffff] relative w-full h-[500px] text-center text-white justify-center flex flex-col items-center gap-2">
        <img src="https://i.ibb.co/HpR6Nj0Q/png1.png" alt="" className="object-cover w-full h-full" />
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
            <a href="tel:+5511917828711">Ligar para (11) 9 1782-8711</a>
          </button>
          {/* <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0a3062]">
            <a href="https://wa.me/5511917828711" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button> */}
        </div>
      </header>

      <section className="py-12 px-6 mx-auto bg-[#0a3062] text-white w-ful flex flex-col justify-center items-center">
        <div>
          <div>
            <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>Por que</h2>
            <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>Impermeabilização</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>importa?</h2>
            <div>
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

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>Diferenciais</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Mais de 15 anos de experiência técnica</li>
          <li>Participação ativa em normas da ABNT e do IBI</li>
          <li>Atuação estratégica com foco em prevenção e valorização</li>
          <li>Consultoria 100% independente e especializada</li>
          <li>Transparência e compromisso com o cliente</li>
        </ul>
      </section>

      <section className="bg-[#ffffff] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Felix Titling, serif' }}>Quem atendemos</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <li>🏢 Síndicos</li>
            <li>🏗️ Administradoras de condomínios</li>
            <li>🏘️ Incorporadoras</li>
            <li>📐 Escritórios de arquitetura e engenharia</li>
            <li>🏠 Proprietários de imóveis de médio e alto padrão</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>Fale com a gente</h2>
        <p className="text-lg mb-6">
          Atendimento no RJ e MG | Mais de 80 projetos com excelência
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* <Button className="bg-[#0a3062] hover:bg-[#0d68c9] text-white">
            <a href="tel:+5511917828711">Ligar para (11) 9 1782-8711</a>
          </Button>
          <Button variant="outline" className="border-[#0a3062] text-[#0a3062] hover:bg-[#0a3062] hover:text-white">
            <a href="https://wa.me/5511917828711" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button> */}
        </div>
      </section>

      <footer className="bg-[#0a3062] py-6 text-center text-sm text-white">
        © 2025 Nó em Pingo d’Água. Todos os direitos reservados. Contato: (11) 9 1782-8711
      </footer>
    </div>
  );
}