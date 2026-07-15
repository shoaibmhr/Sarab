// src/admin/pages/Products.jsx
import { useState, useMemo } from "react";
import { PackageSearch } from "lucide-react";

import ProductsToolbar from "../components/products/ProductsToolbar";
import ProductCard from "../components/products/ProductCard";
import ProductModal from "../components/products/ProductModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { productsData, productCategories } from "../constants/productsData";

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(term);
      const matchesCategory =
        categoryFilter === "All" || p.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, categoryFilter]);

  const handleAddClick = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleSave = (formData) => {
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id ? { ...p, ...formData } : p,
        ),
      );
    } else {
      const newProduct = {
        ...formData,
        id: Date.now(),
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      };
      setProducts((prev) => [newProduct, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteClick = (product) => {
    setDeletingProduct(product);
  };

  const handleConfirmDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== deletingProduct.id));
    setDeletingProduct(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Products</h1>
        <p className="mt-1 text-sm text-slate-500">
          Apne menu ke products manage karein.
        </p>
      </div>

      <ProductsToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        categories={productCategories}
        onAddClick={handleAddClick}
      />

      {filteredProducts.length > 0 ? (
        <div
          className="
            grid grid-cols-1 gap-3.5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-5
          "
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <PackageSearch size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi product nahi mila
          </p>
        </div>
      )}

      <ProductModal
        key={editingProduct?.id ?? "new"}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        initialData={editingProduct}
        categories={productCategories}
      />

      <ConfirmDeleteModal
        isOpen={!!deletingProduct}
        onClose={() => setDeletingProduct(null)}
        onConfirm={handleConfirmDelete}
        itemName={deletingProduct?.name}
      />
    </div>
  );
};

export default Products;
