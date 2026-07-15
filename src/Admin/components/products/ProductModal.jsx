// src/admin/components/products/ProductModal.jsx
import { useState } from "react";
import { X, ImagePlus } from "lucide-react";

const emptyForm = {
  name: "",
  category: "Pizza",
  price: "",
  stock: "",
  image: "",
  status: "active",
};

const ProductModal = ({ isOpen, onClose, onSave, initialData, categories }) => {
  const [formData, setFormData] = useState(() => initialData || emptyForm);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, image: previewUrl, imageFile: file }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product name zaroori hai";
    if (!formData.price || Number(formData.price) <= 0)
      newErrors.price = "Sahi price likhein";
    if (formData.stock === "" || Number(formData.stock) < 0)
      newErrors.stock = "Sahi stock quantity likhein";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave({
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    });
  };

  // "All" filter option ko form ke dropdown mein exclude karo
  const selectableCategories = categories.filter((c) => c !== "All");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5">
          <h3 className="text-base font-bold text-slate-800">
            {initialData ? "Edit Product" : "Add New Product"}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 px-4 py-4">
          {/* Name */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Product Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="e.g. Pepperoni Feast"
              className={`
                w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.name ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            >
              {selectableCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Price + Stock (side by side) */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Price (Rs)
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                placeholder="0"
                className={`
                  w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-orange-100
                  ${errors.price ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                `}
              />
              {errors.price && (
                <p className="mt-1 text-xs text-red-500">{errors.price}</p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Stock Qty
              </label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => handleChange("stock", e.target.value)}
                placeholder="0"
                className={`
                  w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-orange-100
                  ${errors.stock ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                `}
              />
              {errors.stock && (
                <p className="mt-1 text-xs text-red-500">{errors.stock}</p>
              )}
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Product Image
            </label>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                {formData.image ? (
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ImagePlus size={20} className="text-slate-300" />
                )}
              </div>

              <label
                className="
                  flex cursor-pointer items-center justify-center gap-2 rounded-xl
                  border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-600
                  transition-all duration-300 hover:bg-slate-50
                "
              >
                <ImagePlus size={15} />
                Choose File
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2.5">
            <span className="text-sm font-medium text-slate-700">
              Active Status
            </span>
            <button
              type="button"
              onClick={() =>
                handleChange(
                  "status",
                  formData.status === "active" ? "inactive" : "active",
                )
              }
              className={`
                relative h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-300
                ${formData.status === "active" ? "bg-orange-600" : "bg-slate-300"}
              `}
            >
              <span
                className={`
                  absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300
                  ${formData.status === "active" ? "translate-x-5" : "translate-x-0.5"}
                `}
              />
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
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
              {initialData ? "Save Changes" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
