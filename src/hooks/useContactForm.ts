import { useState } from "react";
import type { ContactFormState } from "../types";
import { sendEmail } from "../services/emailService";

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormState>({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    sendEmail(formData)
      .then(() => {
        setIsSending(false);
        setShowModal(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Erro ao enviar email:', err);
        setIsSending(false);
        alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
      });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    showModal,
    setShowModal,
    isSending
  };
};