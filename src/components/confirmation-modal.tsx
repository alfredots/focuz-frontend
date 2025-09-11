import React from 'react';

type ConfirmationModalProps = {
  open: boolean;
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ open, text, onConfirm, onCancel }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <p className="text-white mb-6">{text}</p>
        <div className="flex gap-4 justify-center">
          <button onClick={onConfirm} className="px-4 py-2 bg-green-600 text-white rounded-md font-bold hover:bg-green-700">
            Confirmar
          </button>
          <button onClick={onCancel} className="px-4 py-2 bg-gray-400 text-gray-900 rounded-md font-bold hover:bg-gray-500">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
