import React from "react";
import { AlertCircle } from "lucide-react";
import Label from "../label/Label";
import Input from "../Input/Input";
import ErrorMessage from "../Error/ErrorMessage";
import BasicSelect from "../BasicSelect/BasicSelect";
const OrderSources = ({ formData, setFormData, errors, setErrors }) => {
  const commonClass =
    "w-full mt-1 px-3 py-1.5 border-2 border-gray-300 rounded-lg bg-gray-50 outline-none";
  return (
    <form className="space-y-3">
      {/* Order Source + Order Date */}
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <Label labelTitle="Order Sources" />
          <Input
            type="text"
            placeholder="Website"
            value={formData.orderSource || ""}
            onChange={(e) => {
              setFormData({ ...formData, orderSource: e.target.value });
              if (errors.orderSource) setErrors({ ...errors, orderSource: "" });
            }}
            error={!!errors.orderSource}
          />
          {errors.orderSource && <ErrorMessage message={errors.orderSource} />}
        </div>

        <div className="relative">
          <Label labelTitle="Order Date" />
          <Input
            type="date"
            value={formData.orderDate || "2025-11-01"}
            onChange={(e) => {
              setFormData({ ...formData, orderDate: e.target.value });
              if (errors.orderDate) setErrors({ ...errors, orderDate: "" });
            }}
            error={!!errors.orderDate}
          />
          {errors.orderDate && <ErrorMessage message={errors.orderDate} />}
        </div>
      </div>

      {/* Delivery Address */}
      <div className="relative">
        <Label labelTitle="Delivery Address" />
        <Input
          type="text"
          placeholder="Ex. 123 901 Bagby, between McKinney and Walker, Houston Street, Los Angeles, USA"
          value={formData.deliveryAddress || ""}
          onChange={(e) => {
            setFormData({ ...formData, deliveryAddress: e.target.value });
            if (errors.deliveryAddress)
              setErrors({ ...errors, deliveryAddress: "" });
          }}
          error={!!errors.deliveryAddress}
        />
        {errors.deliveryAddress && (
          <ErrorMessage message={errors.deliveryAddress} />
        )}
      </div>

      {/* Issue Date + Due Date */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <Label labelTitle="Issue Date" />
          <Input
            type="date"
            value={formData.issueDate || "2025-11-01"}
            onChange={(e) => {
              setFormData({ ...formData, issueDate: e.target.value });
              if (errors.issueDate) setErrors({ ...errors, issueDate: "" });
            }}
            error={!!errors.issueDate}
          />
          {errors.issueDate && <ErrorMessage message={errors.issueDate} />}
        </div>

        <div className="relative">
          <Label labelTitle="Due Date" />
          <Input
            type="date"
            value={formData.dueDate || "2025-11-10"}
            onChange={(e) => {
              setFormData({ ...formData, dueDate: e.target.value });
              if (errors.dueDate) setErrors({ ...errors, dueDate: "" });
            }}
            error={!!errors.dueDate}
          />
          {errors.dueDate && <ErrorMessage message={errors.dueDate} />}
        </div>
      </div>

      {/* Payment Method + Advance */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <Label labelTitle="Payment Method" />
          <BasicSelect
            options={["Cheque", "Cash", "Bank Transfer"]}
            label="Payment Method"
            value={formData.paymentMethod}
            onChange={(value) => {
              setFormData({ ...formData, paymentMethod: value });
              if (errors.paymentMethod) {
                setErrors({ ...errors, paymentMethod: "" });
              }
            }}
            error={!!errors.paymentMethod}
          />

          {errors.paymentMethod && (
            <ErrorMessage message={errors.paymentMethod} />
          )}
        </div>

        <div className="relative">
          <Label labelTitle="Advance" />
          <Input
            type="text"
            placeholder="30% Mandatory"
            value={formData.advance || ""}
            onChange={(e) => {
              setFormData({ ...formData, advance: e.target.value });
              if (errors.advance) setErrors({ ...errors, advance: "" });
            }}
            error={!!errors.advance}
          />
          {errors.advance && <ErrorMessage message={errors.advance} />}
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="relative">
        <Label labelTitle="Terms & Condition" />
        <Input
          type="text"
          placeholder="Type Special Note"
          value={formData.terms || ""}
          onChange={(e) => {
            setFormData({ ...formData, terms: e.target.value });
            if (errors.terms) setErrors({ ...errors, terms: "" });
          }}
          error={!!errors.terms}
        />
        {errors.terms && <ErrorMessage message={errors.terms} />}
      </div>
    </form>
  );
};

export default OrderSources;
