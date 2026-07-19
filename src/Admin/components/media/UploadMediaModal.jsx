// src/admin/components/media/UploadMediaModal.jsx
import { useState } from "react";
import { X, UploadCloud } from "lucide-react";
import { mediaTypes } from "../../constants/mediaData";

const UploadMediaModal = ({ isOpen, onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [type, setType] = useState("General");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Pehle koi file select karein");
      return;
    }
    onUpload({
      name: selectedFile.name,
      url: preview,
      type,
      size: `${Math.round(selectedFile.size / 1024)} KB`,
    });
    setSelectedFile(null);
    setPreview(null);
    setType("General");
  };

  const selectableTypes = mediaTypes.filter((t) => t !== "All");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-2xl bg-white shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5">
          <h3 className="text-base font-bold text-slate-800">Upload Media</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 px-4 py-4">
          {/* Upload area */}
          <label
            className="
              flex cursor-pointer flex-col items-center justify-center gap-2
              rounded-xl border-2 border-dashed border-slate-200 bg-slate-50
              p-6 text-center transition-all duration-300 hover:border-orange-300 hover:bg-orange-50/30
            "
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="h-20 w-20 rounded-lg object-cover"
              />
            ) : (
              <>
                <UploadCloud size={28} className="text-slate-400" />
                <p className="text-sm font-medium text-slate-600">
                  Click to upload an image
                </p>
                <p className="text-xs text-slate-400">PNG, JPG up to 5MB</p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {error && <p className="text-xs text-red-500">{error}</p>}

          {/* Type */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Media Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            >
              {selectableTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="
                flex-1 rounded-xl border border-slate-200 py-2 text-sm font-semibold
                text-slate-600 transition-all duration-300 hover:bg-slate-50
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="
                flex-1 rounded-xl bg-orange-600 py-2 text-sm font-semibold text-white
                shadow-sm transition-all duration-300 hover:bg-orange-700
              "
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadMediaModal;
