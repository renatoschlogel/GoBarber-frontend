import React from 'react';

import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './ToastContainer.styles';

import { ToastMessage, useToast } from '../../hooks/toastContext';

interface ToastContainerData {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerData> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map(message => (
        <Toast
          key={message.id}
          type={message.type}
          hasDescription={!!message.description}
        >
          <FiAlertCircle size={20} />
          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>

          <button type="button" onClick={() => removeToast(message.id)}>
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
