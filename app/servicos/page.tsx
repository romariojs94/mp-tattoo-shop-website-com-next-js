export default function Servicos() {

  const services = [
    {
      title: 'Tatuagens Personalizadas',
      description: 'Oferecemos a criação de tatuagens personalizadas, onde cada design é desenvolvido em colaboração direta com o cliente. A partir de uma ideia inicial, trabalhamos juntos para criar uma obra de arte única que reflete sua personalidade e sentimentos.'
    },
    {
      title: 'Cover-Up',
      description: 'Especializamo-nos em transformar tatuagens antigas ou indesejadas em novas obras de arte. Se você tem uma tatuagem que não representa mais quem você é, nós podemos ajudá-lo a reformulá-la com um design criativo e original.'
    },
    {
      title: 'Restauração',
      description: 'Com o tempo, algumas tatuagens podem desbotar ou perder a definição. Oferecemos serviços de restauração para revitalizar sua tatuagem antiga, realçando as cores e contornos para que ela volte a ter a aparência de quando foi feita pela primeira vez.'
    },
    {
      title: 'Henna',
      description: 'Para aqueles que não estão prontos para um compromisso permanente ou desejam testar um design antes de tatuá-lo definitivamente, oferecemos tatuagens temporárias de alta qualidade que duram de algumas semanas a alguns meses.'
    },
  ]
  return (
    <main>
      <h1 className="font-black text-3xl text-yellow-300 mt-12">Servicos</h1>
      <section className="flex gap-12 mt-16">
        {services.map((service, index) => (
          <article key={index}>
            <h2 className="font-black text-white text-lg mb-4">{service.title}</h2>
            <p className="text-sm font-extralight text-zinc-400">{service.description}</p>
          </article>
        ))} 
      </section>
    </main>
  );
}
