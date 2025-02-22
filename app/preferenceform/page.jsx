'use client'
import { useState } from 'react';

function UserForm() {
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({
    property: { location: '', size: '', price: '' },
    buyer: { preferredSize: '', maxBudget: '', preferredLocation: '' }
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    console.log({ userType, ...formData });
  };

  const updateField = (type, field, value) => {
    setFormData(prev => ({ ...prev, [type]: { ...prev[type], [field]: value } }));
  };

  return (
    <div className="min-h-screen bg-purple-50 p-4 sm:p-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-600 pb-10 mt-6">Welcome to RentoAI!</h1>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-200">
          <h2 className="text-lg font-semibold text-purple-600 mb-4">Your Role: </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {['seller', 'buyer'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setUserType(type)}
                className={`p-6 rounded-lg border-2 ${
                  userType === type ? 'border-purple-500 bg-purple-50' : 'border-purple-200'
                } transition-colors`}
              >
                <span className="block text-xl mb-2">{type === 'seller'}</span>
                <span className="text-purple-600 text-xl">{type}</span>
                <p className="text-sm text-purple-400 mt-1">
                  {type === 'seller' ? 'List your property' : 'Find your dream home'}
                </p>
              </button>
            ))}
          </div>
        </div>

        {userType && (
          <div className="bg-white p-6 rounded-lg border border-purple-200 space-y-4">
            <h2 className="text-lg font-semibold text-purple-600">
              {userType === 'seller' ? 'Property Details' : 'Buyer Preferences'}
            </h2>
            {userType === 'seller' ? (
              <>
                <Input label="Location" value={formData.property.location} 
                  onChange={(v) => updateField('property', 'location', v)} />
                <div className="grid gap-4 md:grid-cols-2">
                  <Select label="Property Size" options={['1 BHK', '2 BHK', '3 BHK', '4 BHK']}
                    value={formData.property.size} 
                    onChange={(v) => updateField('property', 'size', v)} />
                  <Input label="Expected Price" type="number" 
                    value={formData.property.price} 
                    onChange={(v) => updateField('property', 'price', v)} />
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2">
                  {['1 BHK', '2 BHK', '3 BHK', '4 BHK'].map(size => (
                    <label key={size} className={`p-2 rounded-lg border cursor-pointer ${
                      formData.buyer.preferredSize === size ? 'bg-purple-50 border-purple-500' : 'border-purple-200'
                    }`}>
                      <input type="radio" name="size" value={size} className="hidden"
                        onChange={() => updateField('buyer', 'preferredSize', size)} />
                      <span className="text-purple-600">{size}</span>
                    </label>
                  ))}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input label="Maximum Budget" type="number" 
                    value={formData.buyer.maxBudget} 
                    onChange={(v) => updateField('buyer', 'maxBudget', v)} />
                  <Input label="Preferred Location" 
                    value={formData.buyer.preferredLocation} 
                    onChange={(v) => updateField('buyer', 'preferredLocation', v)} />
                </div>
              </>
            )}
          </div>
        )}

        {userType && (
          <button type="submit" className="w-full bg-gradient-to-tr from-pink-500 to-purple-500 text-white font-bold text-xl rounded-full p-3 hover:opacity-90 transition-opacity">
            Submit Details
          </button>
        )}
      </form>

      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl border border-purple-100">
            <div className="text-center space-y-4">
              <div className="mx-auto bg-gradient-to-tr from-pink-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg 
                  className="w-8 h-8 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-600">
                Success!
              </h3>
              <p className="text-purple-500">
                {userType === 'seller' 
                  ? "Property details submitted successfully!" 
                  : "Buyer preferences submitted successfully!"}
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Input = ({ label, value, onChange, type = 'text' }) => (
  <div>
    <label className="text-sm font-medium text-purple-500 block mb-1">{label}</label>
    <input
      type={type}
      required
      className="w-full p-2 border border-purple-200 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Select = ({ label, options, value, onChange }) => (
  <div>
    <label className="text-sm font-medium text-purple-500 block mb-1">{label}</label>
    <select
      required
      className="w-full p-2 border border-purple-200 rounded-lg bg-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

export default UserForm;