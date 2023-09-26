// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const mapFAQs = (FAQS) => {
  return FAQS.map((FAQ) => {
    return (
      <Accordion style={{ marginTop: 15, marginBottom: 15 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{FAQ.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{FAQ.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
};

const FAQs = () => {
  const FAQS = [
    {
      id: 1,
      question: 'What services does your company offer?',
      answer:
        'Our company offers a wide range of engineering services including general supplies, project management, construction, and maintenance.',
    },
    {
      id: 2,
      question: 'Do you have experience in our specific industry?',
      answer:
        'Yes, we have extensive experience in various industries. We’ve worked with clients in sectors such as manufacturing, energy, technology, and more.',
    },
    {
      id: 3,
      question: 'What is your approach to project management?',
      answer:
        'We follow a systematic approach to project management which includes planning, organizing, securing, controlling, leading and managing resources to achieve specific goals.',
    },
    {
      id: 4,
      question: 'Can you handle projects of our size?',
      answer:
        'Absolutely. Our team has the capacity and resources to handle projects of various sizes and complexities.',
    },
    {
      id: 5,
      question: 'What is your pricing structure?',
      answer:
        'Our pricing structure depends on the scope and complexity of the project. We can provide a detailed quote after understanding your specific needs.',
    },
    {
      id: 6,
      question: 'How long has the company been in business?',
      answer: 'The company has been providing engineering services for over 3 years',
    },
    {
      id: 7,
      question: 'What sets the company apart from its competitors?',
      answer:
        'Our commitment to customer satisfaction and our expertise in the engineering sector set us apart from our competitors',
    },
    {
      id: 8,
      question: 'How do you communicate progress during a project?',
      answer:
        'We believe in maintaining open lines of communication with our clients. Regular updates are provided through meetings, reports, and digital platforms.',
    },
    {
      id: 9,
      question: "What is the company's approach to sustainability?",
      answer:
        'The company is committed to sustainable practices in all aspects of our work, from design to construction to maintenance',
    },
    {
      id: 10,
      question: 'How can I get in touch with the company?',
      answer: 'You can contact us via email at info@company.com or call us at (123)456-7890',
    },
  ];

  return (
    <section id="FAQs">
      <div className="faqs">
        <div className="container">
          <div className="section-header text-center">
            <p>Frequently Asked Question</p>
            <h2>You May Ask</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div id="accordion-1">{mapFAQs(FAQS.slice(0, 5))}</div>
            </div>
            <div className="col-md-6">
              <div id="accordion-2">{mapFAQs(FAQS.slice(5, 10))}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
