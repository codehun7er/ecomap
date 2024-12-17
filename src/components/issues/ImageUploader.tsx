import React from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  images: string[];
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageRemove: (index: number) => void;
}

export default function ImageUploader({ images, onImageUpload, onImageRemove }: ImageUploaderProps) {
  return (
    <div>
      <label className="block font-semibold mb-4">Фотографии</label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`Uploaded ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg"
            />
            <button
              type="button"
              className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white"
              onClick={() => onImageRemove(index)}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        {images.length < 4 && (
          <label className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer h-24">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={onImageUpload}
            />
            <Upload className="w-6 h-6 text-gray-400" />
          </label>
        )}
      </div>
    </div>
  );
}