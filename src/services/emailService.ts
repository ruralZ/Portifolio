import emailjs from '@emailjs/browser';
import type { ContactFormState } from '../types';
  
export const sendEmail = (formData: ContactFormState) => {

    const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
    };
    
    const serviceID = 'service_k0it0b9';
    const templateID = 'template_h1yapie';
    const publicKey = 'ZeGsKGfpPJPcIXEAM';

    return emailjs.send(serviceID, templateID, templateParams, publicKey);
}

