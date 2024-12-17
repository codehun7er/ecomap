import React from 'react';
import Button from '../ui/Button';

interface IssueFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export default function IssueForm({ onSubmit }: IssueFormProps) {
  return (
    <div>
      <div>
        <label className="block font-semibold mb-2">Заголовок</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Краткое описание проблемы"
        />
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-2">Описание</label>
        <textarea
          className="w-full p-2 border rounded-md h-32"
          placeholder="Подробно опишите проблему..."
        />
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-2">Местоположение</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Укажите адрес или описание места"
        />
      </div>

      <Button type="submit" className="w-full md:w-auto mt-6">
        Отправить сообщение
      </Button>
    </div>
  );
}