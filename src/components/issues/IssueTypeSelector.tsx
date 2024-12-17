import React from 'react';
import { issueTypes } from '../../data/issueTypes';
import { icons } from '../../utils/icons';

interface IssueTypeSelectorProps {
  selectedType: string;
  onTypeSelect: (typeId: string) => void;
}

export default function IssueTypeSelector({ selectedType, onTypeSelect }: IssueTypeSelectorProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Тип проблемы</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {issueTypes.map((type) => {
          const Icon = icons[type.icon as keyof typeof icons];
          return (
            <button
              key={type.id}
              type="button"
              className={`p-4 border rounded-lg text-left ${
                selectedType === type.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-green-200'
              }`}
              onClick={() => onTypeSelect(type.id)}
            >
              <div className="flex items-center">
                {Icon && <Icon className="w-6 h-6 text-green-600 mr-3" />}
                <div>
                  <h3 className="font-semibold">{type.label}</h3>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}