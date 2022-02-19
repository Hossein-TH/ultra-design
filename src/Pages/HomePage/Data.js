import svg1 from '../../Assets/images/svg-1.svg';
import svg2 from '../../Assets/images/svg-2.svg';
import svg3 from '../../Assets/images/svg-3.svg';
import profile from '../../Assets/images/profile.jpg';

export const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Marketing Agency',
  headLine: 'Lead Generation Specialist for Online Businesses',
  description:
      'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
  buttonLabel: 'Get Started',
  imgStart: '',
  img: svg1,
  alt: 'Credit Card',
  start: ''
};

export const homeObjTwo = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Instant Setup',
    headLine: 'Extremely quick onboarding process',
    description:
        "Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",
    buttonLabel: 'Learn More',
    imgStart: '',
    img: svg2,
    alt: 'Vault',
    start: ''
};

export const homeObjThree = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Sarah Jeni',
    headLine:
        'Ultra helped me increase my revenue by over 3X in less than 3 months!',
    description:
        "Their team is wonderful! I can't believe I didn't start working with them earlier.",
    buttonLabel: 'View Case Study',
    imgStart: 'start',
    img: profile,
    alt: 'Vault',
    start: 'true'
};

export const homeObjFour = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Secure Database',
    headLine: 'All your data is stored on our secure server',
    description:
        'You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.',
    buttonLabel: 'Sign Up Now',
    imgStart: 'start',
    img: svg3,
    alt: 'Vault',
    start: 'true'
};

