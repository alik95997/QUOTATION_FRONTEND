import React from "react";

import Label from "../label/Label";
import Input from "../Input/Input";
import ErrorMessage from "../Error/ErrorMessage";
const AddProduct = ({ formData, setFormData, errors, setErrors }) => {
  return (
    <form className="space-y-4">
      {/* Product Name / Category */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <Label labelTitle="Product Name" />
          <Input
            type="text"
            placeholder="Mixing Paddles"
            value={formData.productName}
            onChange={(e) => {
              setFormData({ ...formData, productName: e.target.value });
              if (errors.productName) setErrors({ ...errors, productName: "" });
            }}
            error={!!errors.productName}
          />
          {errors.productName && <ErrorMessage message={errors.productName} />}
        </div>

        <div className="relative">
          <Label labelTitle="Category" />
          <input
            type="text"
            value={formData.category}
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
              if (errors.category) setErrors({ ...errors, category: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.category ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="Construction"
          />
          {errors.category && <ErrorMessage message={errors.category} />}
        </div>
      </div>

      {/* Unit Measure / Quantity */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <Label labelTitle="Unit Measure" />
          <input
            type="text"
            value={formData.unitMeasure}
            onChange={(e) => {
              setFormData({ ...formData, unitMeasure: e.target.value });
              if (errors.unitMeasure) setErrors({ ...errors, unitMeasure: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.unitMeasure ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="Pcs"
          />
          {errors.unitMeasure && <ErrorMessage message={errors.unitMeasure} />}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Quantity</label>
          <input
            type="number"
            value={formData.quantity}
            onChange={(e) => {
              setFormData({ ...formData, quantity: e.target.value });
              if (errors.quantity) setErrors({ ...errors, quantity: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.quantity ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="15"
          />
          {errors.quantity && <ErrorMessage message={errors.quantity} />}
        </div>
      </div>

      {/* City / Phone Number */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="font-medium text-sm">City</label>
          <input
            type="text"
            value={formData.cityProduct}
            onChange={(e) => {
              setFormData({ ...formData, cityProduct: e.target.value });
              if (errors.cityProduct) setErrors({ ...errors, cityProduct: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.cityProduct ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="Houston"
          />
          {errors.cityProduct && <ErrorMessage message={errors.cityProduct} />}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Phone Number</label>
          <input
            type="text"
            value={formData.phoneProduct}
            onChange={(e) => {
              setFormData({ ...formData, phoneProduct: e.target.value });
              if (errors.phoneProduct)
                setErrors({ ...errors, phoneProduct: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.phoneProduct ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="+1-281-658-5421"
          />
          {errors.phoneProduct && (
            <ErrorMessage message={errors.phoneProduct} />
          )}
        </div>
      </div>

      {/* Unit Price / Discount Applied */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="font-medium text-sm">Unit Price</label>
          <input
            type="number"
            value={formData.unitPrice}
            onChange={(e) => {
              setFormData({ ...formData, unitPrice: e.target.value });
              if (errors.unitPrice) setErrors({ ...errors, unitPrice: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.unitPrice ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="15.00$"
          />
          {errors.unitPrice && <ErrorMessage message={errors.unitPrice} />}
        </div>

        <div className="relative">
          <label className="font-medium text-sm">Discount Applied</label>
          <input
            type="text"
            value={formData.discountApplied}
            onChange={(e) => {
              setFormData({ ...formData, discountApplied: e.target.value });
              if (errors.discountApplied)
                setErrors({ ...errors, discountApplied: "" });
            }}
            className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
              ${errors.discountApplied ? "border-red-500" : "border-gray-300"}
            `}
            placeholder="8%"
          />
          {errors.discountApplied && (
            <ErrorMessage message={errors.discountApplied} />
          )}
        </div>
      </div>

      {/* Tax Applied */}
      <div className="relative max-w-[calc(50%-8px)]">
        <label className="font-medium text-sm">Tax Applied</label>
        <input
          type="text"
          value={formData.taxApplied}
          onChange={(e) => {
            setFormData({ ...formData, taxApplied: e.target.value });
            if (errors.taxApplied) setErrors({ ...errors, taxApplied: "" });
          }}
          className={`w-full mt-1 px-3 py-1.5 border-2 rounded-lg bg-gray-50 
            ${errors.taxApplied ? "border-red-500" : "border-gray-300"}
          `}
          placeholder="2%"
        />
        {errors.taxApplied && <ErrorMessage message={errors.taxApplied} />}
      </div>
    </form>
  );
};

export default AddProduct;
