import { useState, useMemo } from "react";
import { LayoutGrid } from "lucide-react";

import CategoriesToolbar from "../components/categories/CategoriesToolbar";
import CategoryCard from "../components/categories/CategoryCard";
import CategoryModal from "../components/categories/CategoryModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { categoriesData } from "../constants/categoriesData";

const Categories = () => {
  const [categories, setCategories] = useState(categoriesData);
  const [searchTerm, setSearchTerm] = useState("");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deletingCategory, setDeletingCategory] = useState(null);

  const filteredCategories = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return categories.filter(
      (cat) =>
        cat.name.toLowerCase().includes(term) ||
        cat.description.toLowerCase().includes(term),
    );
  }, [categories, searchTerm]);

  const handleAddClick = () => {
    setEditingCategory(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (category) => {
    setEditingCategory(category);
    setIsFormOpen(true);
  };

  const handleSave = (formData) => {
    if (editingCategory) {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === editingCategory.id ? { ...cat, ...formData } : cat,
        ),
      );
    } else {
      const newCategory = {
        ...formData,
        id: Date.now(),
        itemsCount: 0,
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      };
      setCategories((prev) => [newCategory, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteClick = (category) => {
    setDeletingCategory(category);
  };

  const handleConfirmDelete = () => {
    setCategories((prev) =>
      prev.filter((cat) => cat.id !== deletingCategory.id),
    );
    setDeletingCategory(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Categories</h1>
        <p className="mt-1 text-sm text-slate-500">
          Apne menu ki categories manage karein.
        </p>
      </div>

      <CategoriesToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onAddClick={handleAddClick}
      />

      {filteredCategories.length > 0 ? (
        <div
          className="
            grid grid-cols-1 gap-3.5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-5
          "
        >
          {filteredCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <LayoutGrid size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi category nahi mili
          </p>
        </div>
      )}

      <CategoryModal
        key={editingCategory?.id ?? "new"}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        initialData={editingCategory}
      />

      <ConfirmDeleteModal
        isOpen={!!deletingCategory}
        onClose={() => setDeletingCategory(null)}
        onConfirm={handleConfirmDelete}
        itemName={deletingCategory?.name}
      />
    </div>
  );
};

export default Categories;
