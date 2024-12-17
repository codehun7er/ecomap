import React, { useState } from 'react';
import IssueTypeSelector from '../components/issues/IssueTypeSelector';
import ImageUploader from '../components/issues/ImageUploader';
import IssueForm from '../components/issues/IssueForm';
import { useImageUpload } from '../hooks/useImageUpload';

export default function ReportIssuePage() {
  const [selectedType, setSelectedType] = useState('');
  const { images, handleImageUpload, handleImageRemove } = useImageUpload();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Сообщить о проблеме</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <IssueTypeSelector
          selectedType={selectedType}
          onTypeSelect={setSelectedType}
        />

        <IssueForm onSubmit={handleSubmit} />

        <ImageUploader
          images={images}
          onImageUpload={handleImageUpload}
          onImageRemove={handleImageRemove}
        />
      </form>
    </div>
  );
}