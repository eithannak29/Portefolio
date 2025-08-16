import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const timeline = [
    {
      year: '2025',
      title: 'ML Engineer Intern at Apple',
      description:
        "Moved to California for the integration of LLMs into Apple's ecosystem.",
    },
    {
      year: '2024',
      title: 'End-of-study Project at Thales',
      description:
        'Research project in Natural Language Processing focused on ontology learning and population.',
    },
    {
      year: '2024',
      title: 'PPAI Hackathon by Hugging Face, Zama & EF',
      description:
        'Developed ZAuth, an authentication system leveraging Fully Homomorphic Encryption and face recognition.',
    },
    {
      year: '2024',
      title: 'Third Prize at Mistral AI Hackathon',
      description:
        'Created a platform for specialized lightweight language models using Direct Preference Optimization.',
    },
    {
      year: '2024',
      title: 'First Prize at IADataHack',
      description:
        'Won a hackathon organized by the Ministry of French Armed Forces.',
    },
    {
      year: '2023',
      title: 'SWE Intern at DNCA Finance',
      description:
        'Created tools and APIs for data management for €30bn assets under management.',
    },
    {
      year: '2020-2025',
      title: "Master's in Computer Science at EPITA",
      description:
        'Specialization in Cognitive Science and Artificial Intelligence with focus on NLP.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Martin Natale</title>
        <meta name="description" content="Martin Natale - AI Engineer" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <Image
            src="/eithan.png"
            alt="Profile photo"
            width={128}
            height={128}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className="text-4xl font-semibold">Martin Natale</h1>
          <p className="text-gray-600 mt-2">
            I like to build AI solutions for real-world problems.🧠🤖💥
          </p>
          <div className="flex justify-center space-x-4 mt-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/martin-natale/"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/chuklee"
              aria-label="GitHub"
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="mailto:martin01.natale@gmail.com"
              aria-label="Email"
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </header>

        <section>
          {timeline.map((item, idx) => (
            <div key={idx} className="mb-10">
              <div className="text-sm text-gray-500">{item.year}</div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

