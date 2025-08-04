import React, { useState } from 'react';

const UploadPrescription = () => {
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Prescription uploaded successfully!');
    setFile(null);
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
      <div className="mb-4">
        <label className="block mb-1">Upload Prescription</label>
        <input type="file" accept="image/*,application/pdf" onChange={handleFileChange} required className="w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Notes (optional)</label>
        <textarea value={notes} onChange={handleNotesChange} className="w-full border p-2 rounded h-24" />
      </div>
      <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition">
        Upload
      </button>
    </form>
  );
};

export default UploadPrescription;
