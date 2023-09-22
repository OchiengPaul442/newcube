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
      question: 'What is the company’s vision?',
      answer:
        'To be the leading Services Provider in the engineering sector with high focus on Customer Satisfaction',
    },
    {
      id: 2,
      question: "What is the company's mission?",
      answer: "To provide high-quality engineering services that meet our customers' needs",
    },
    {
      id: 3,
      question: 'What services does the company offer?',
      answer:
        'The company offers a wide range of engineering services, including design, construction, and maintenance',
    },
    {
      id: 4,
      question: "Who are the company's clients?",
      answer:
        'Our clients include both private and public sector organizations in various industries',
    },
    {
      id: 5,
      question: 'Where is the company located?',
      answer:
        'The company is headquartered in City, Country, with offices in several other locations',
    },
    {
      id: 6,
      question: 'How long has the company been in business?',
      answer: 'The company has been providing engineering services for over X years',
    },
    {
      id: 7,
      question: 'What sets the company apart from its competitors?',
      answer:
        'Our commitment to customer satisfaction and our expertise in the engineering sector set us apart from our competitors',
    },
    {
      id: 8,
      question: 'Does the company have any certifications or accreditations?',
      answer:
        'Yes, the company is certified by [Certification Body] and is a member of [Professional Association]',
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
