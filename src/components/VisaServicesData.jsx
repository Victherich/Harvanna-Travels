
// visaServicesData.js
import h1 from '../Images2/h1.jpg';
import h2 from '../Images2/h2.jpg';
import h3 from '../Images2/h3.jpg';
import h4 from '../Images2/h4.jpg';
import h5 from '../Images2/h5.jpg';
import h6 from '../Images2/h6.jpg';
import h7 from '../Images2/h7.jpg';
import h8 from '../Images2/h8.jpg';
import h9 from '../Images2/h9.jpg';
import h10 from '../Images2/h10.jpg';
import h11 from '../Images2/h11.jpg';
import h12 from '../Images2/h12.jpg';





export const visaServices = [
  {
    id: 1,
    title: 'UK Visit Visa Application Process',
    image: h1,
    summary: 'We process both study and visit visas to the United Kingdom with about 80% success rates.',
    details: {
      requirements: ['International Passport', '6-month statement of account', 'Introduction letter', 'Work ID card', 'CAC registration certificate (if business is registered)'],
      fees: {
        harvannaProcessing: {
          adult: '₦360,000',
          child: '₦185,000'
        },
        embassy: {
          fee_type: '6 month visa application fee',
          price_vi: '$180 + ₦195,000 (Victoria Island submission)',
          price_others: '$180 (Ikeja or Abuja submission)'
        }
      },
      processingTime: 'From 15 working days after submission.',
      notes: ['₦195,000 charged extra for VI is for the center service fee.', 'Fast track option also available for 5 working days.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  },
  {
    id: 2,
    title: 'USA Visit Visa Application Form',
    image: h2,
    summary: 'The US Visa application is interview-based. We can help you secure an earlier interview date.',
    details: {
      requirements: ['International Passport', 'Work Information', '2 Passport Photographs'],
      fees: {
        harvannaProcessing: {
          adult: '₦390,000',
          child: '₦195,000'
        },
        embassy: {
          fee_type: 'Embassy Visa Fee',
          price: '₦330,000'
        },
        extra: 'Early interview date: from ₦250,000 and above (not guaranteed).'
      },
      processingTime: 'Interview-based, subject to embassy availability.',
      notes: ['USA gives a minimum of 5 years visa.', 'Fast track option also available for 5 working days.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  },
  {
    id: 3,
    title: 'Canada Visit/Conference Visa Application',
    image: h3,
    summary: 'We assist with Canada Visit and Conference visa applications, including hotel and flight bookings.',
    details: {
      requirements: ['International Passport', '6 months bank statements', 'Work details'],
      fees: {
        harvannaProcessing: {
          adult: '₦390,000',
          child: '₦195,000'
        },
        embassy: {
          fee_type: 'Embassy Visa Fee',
          price: '$185 CAD (Adult), $100 CAD (Child)'
        }
      },
      processingTime: 'Subject to embassy timeline.',
      notes: ['Visa validity ranges from 1 to 4 years.', 'Documents are submitted online and biometrics done after submission.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  },
  {
    id: 4,
    title: 'South Africa Visa Application Form',
    image: h4,
    summary: 'Choose between E-Visa Online or Physical Submission for your South Africa visa application.',
    details: {
      requirements: ['International passport', '6 months bank statement', '2 passport photographs', 'Yellow fever card', 'Work details'],
      fees: {
        harvannaProcessing: {
          adult: '₦390,000',
          child: '₦195,000'
        },
        physicalSubmission: {
          embassy_fee: '₦37,700 (payable at VFS)',
          notes: 'Physical submission is done only in Abuja and Lagos.'
        }
      },
      processingTime: '21 minimum working days after submission.',
      notes: ['Fast track option also available for 5 working days.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  },
  {
    id: 5,
    title: 'Australia Visa Application Form',
    image: h5,
    summary: 'Harvanna Travels can help you with your Australia visa application. We handle all documentation and payment processes.',
    details: {
      requirements: ['International Passport', 'Work information', '6 months statement of account', 'Polio Vaccination Card', 'Passport photograph (Front and back)'],
      fees: {
        harvannaProcessing: {
          adult: '₦390,000',
          child: '₦195,000'
        },
        embassy: {
          price: '$147 USD'
        },
        extra: 'Service charge of about ₦12,000 to be paid at the biometrics centre.'
      },
      processingTime: '60 working days.',
      notes: ['Fast track option also available for 5 working days.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  },
  {
    id: 6,
    title: 'Schengen Visa Application Form',
    image: h6,
    summary: 'We assist with Schengen visa applications for France, Netherlands, and Spain. Choose your destination and let us handle the rest.',
    details: {
      requirements: ['International Passport', '6 Months Bank Statement', 'Work Information', '2 Passport Photographs'],
      fees: {
        harvannaProcessing: {
          adult: '₦390,000',
          child: '₦195,000'
        },
        franceNetherlands: {
          biometricsAndInsurance: '₦98,500 Per Person',
          totalHarvannaAdult: '₦458,500',
          totalHarvannaChild: '₦278,500',
          embassyFee: '£90 (payable to TLS)'
        },
        spain: {
          biometricsAndInsurance: '₦98,500 Per Person',
          totalHarvannaAdult: '₦458,500',
          totalHarvannaChild: '₦278,500',
          embassyFee: '£80 (payable to BLS)'
        }
      },
      processingTime: 'Booking of biometrics is based on the next available date on the embassy’s website.',
      notes: ['Fast track option also available for 5 working days.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  },
  {
    id: 7,
    title: 'Turkey Visa Application Form',
    image: h7,
    summary: 'We offer assistance for the Turkey visa application process, ensuring all documents are in order for a smooth submission.',
    details: {
      requirements: ['International Passport', 'Work Information', '6-Month Statement of Account', 'Birth Certificate', '2 passport photographs'],
      fees: {
        harvannaProcessing: {
          adult: '₦390,000',
          child: '₦195,000'
        },
        embassy: {
          lagos: '$320 (VIP service)',
          abuja: '$160'
        }
      },
      processingTime: 'From 15 working days.',
      notes: ['First-timer visa duration: 3 months; others subject to embassy.', 'Fast track option also available for 5 working days.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  },
  {
    id: 8,
    title: 'Saint Kitts & Nevis Visa Application Form',
    image: h8,
    summary: 'Get your visa for the beautiful islands of Saint Kitts & Nevis. We simplify the process for you.',
    details: {
      requirements: [], // No specific documents listed, so an empty array
      fees: {
        uk: '$162 (Visa Fee) + Processing fee',
        usa: '₦583,000 (Adult), ₦458,000 (Child)'
      },
      processingTime: 'Maximum of 3 weeks from payment confirmation date.',
      notes: ['Fees above cover both visa and processing fees.', 'Fast track option also available for 5 working days.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  },
  {
    id: 9,
    title: 'Brazil Visit Visa Application Form',
    image: h9,
    summary: 'We assist with the Brazil visit visa application, managing all document and fee processes for a hassle-free experience.',
    details: {
      requirements: ['International statement', '6 months bank statements', '2 passport photograph', 'Work details'],
      fees: {
        harvannaProcessing: {
          adult: '₦390,000',
          child: '₦195,000'
        },
        embassy: {
          price: '₦144,100'
        }
      },
      processingTime: 'From 30 working days after submission.',
      notes: ['Fast track option also available for 5 working days.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  },
  {
    id: 10,
    title: 'Ireland Visa Application Form',
    image: h10,
    summary: 'We process Ireland visa applications for single entry, multiple entry, and transit.',
    details: {
      requirements: ['International passport', '5X5 white background passport photograph', '6 months statement of account', 'Work details'],
      fees: {
        harvannaProcessing: {
          adult: '₦390,000',
          child: '₦195,000'
        },
        embassyService: '₦125,000 (payable before biometrics date)',
        embassyVisaFee: {
          singleEntry: '£60',
          multipleEntry: '£100',
          transit: '£25'
        }
      },
      processingTime: 'From 8 weeks after submission.',
      notes: ['Fast track option also available for 5 working days.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  },
  {
    id: 11,
    title: 'Mexico Visa Application Form',
    image: h11,
    summary: 'Need a visa for Mexico? We provide full assistance to ensure your application is successful.',
    details: {
      requirements: ['Six months valid international passport', 'Passport photograph', 'Work details'],
      fees: {
        harvannaProcessing: {
          adult: '₦390,000',
          child: '₦195,000'
        },
        embassy: {
          price: '$53 (to be paid at the embassy)'
        }
      },
      processingTime: '15-21 working days.',
      notes: ['Fast track option also available for 5 working days.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  },
  {
    id: 12,
    title: 'Malaysia Visa Application Form',
    image: h12,
    summary: 'Our visa services include handling the Malaysia visa application process, from document preparation to submission.',
    details: {
      requirements: ['International Passport', '6 months bank statements', 'Work details', 'N.D.L.E.A certificate', 'white background passport photograph (35mm by 50mm)'],
      fees: {
        harvannaProcessing: '₦390,000',
        vfsServiceCharge: '₦12,000'
      },
      processingTime: '10 minimum working days after submission.',
      notes: ['Submission is only available in Abuja.', 'Fast track option also available for 5 working days.'],
      processFlow: ['Make payments to Harvanna.', 'Payment confirmation and review officer assigned within 24hrs.', 'Harvanna processing takes a maximum of 3 weeks from payment confirmation.']
    }
  }
];