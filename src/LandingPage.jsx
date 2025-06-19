import React from "react";
//import { Button } from "@/components/ui/button";
//import "@fontsource-variable/inter";

export default function LandingPage() {
  return (
    <div className="bg-[#dddddd] text-[#74726e] font-[Arial,sans-serif]">
      <header className="bg-[#0d68c9] py-16 px-6 text-center text-white">
        <img src="https://i.ibb.co/ynSmdp9T/Captura-de-tela-2025-06-18-214637.jpg" alt="" className="w-96 h-96" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>
          Evite prejuízos com infiltrações
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Consultoria técnica especializada com mais de 15 anos de experiência. Diagnóstico preciso, economia real, valorização do seu patrimônio.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          {/* <Button className="bg-[#0a3062] hover:bg-[#0d68c9] text-white"> */}
            <a href="tel:+5511917828711">Ligar para (11) 9 1782-8711</a>
          {/* </Button> */}
          {/* <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0a3062]">
            <a href="https://wa.me/5511917828711" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button> */}
        </div>
      </header>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Felix Titling, serif' }}>Sobre a Nó em Pingo d’Água</h2>
        <p className="text-lg">
          Somos uma consultoria técnica independente especializada em impermeabilização preventiva e corretiva. Atuamos com diagnóstico, laudos e fiscalização de obras, com foco em soluções duradouras, redução de custos e valorização de imóveis.
        </p>
      </section>

      <section className="bg-[#ffffff] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Felix Titling, serif' }}>Nossos Serviços</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <li>🔍 Vistoria técnica e diagnóstico</li>
            <li>🛠️ Desenvolvimento de soluções técnicas</li>
            <li>📊 Equalização técnica e econômica de propostas</li>
            <li>👷‍♀️ Acompanhamento e fiscalização de obras</li>
            <li>✅ Testes e garantias de desempenho</li>
          </ul>
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