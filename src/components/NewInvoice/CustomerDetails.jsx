import React from "react";
import { AlertCircle } from "lucide-react";
import Label from "../label/Label";
import Input from "../Input/Input";
import BasicSelect from "../BasicSelect/BasicSelect";
import ErrorMessage from "../Error/ErrorMessage";
const CustomerDetail = ({ formData, setFormData, errors, setErrors }) => {
  return (
    <form className="space-y-4">
      {/* Customer + Company */}
      <div className="grid grid-cols-2 gap-2">
        {/* Customer Name */}
        <div className="relative">
          <Label labelTitle="Customer Name" />
          <Input
            placeholder="Brown Martin"
            type="text"
            value={formData.customerName}
            onChange={(e) => {
              setFormData({ ...formData, customerName: e.target.value });
              if (errors.customerName)
                setErrors({ ...errors, customerName: "" });
            }}
            error={!!errors.customerName}
          />
          {errors.customerName && (
            <ErrorMessage message={errors.customerName} />
          )}
        </div>

        {/* Company Name */}
        <div className="relative">
          <Label labelTitle="Company Name" />
          <Input
            type="text"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={(e) => {
              setFormData({ ...formData, companyName: e.target.value });
              if (errors.companyName) setErrors({ ...errors, companyName: "" });
            }}
            error={!!errors.companyName}
          />
          {errors.companyName && <ErrorMessage message={errors.companyName} />}
        </div>
      </div>

      {/* Delivery Address */}
      <div className="relative">
        <Label labelTitle="Delivery Address" />
        <Input
          type="text"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
            if (errors.address) setErrors({ ...errors, address: "" });
          }}
          error={!!errors.address}
        />
        {errors.address && (
          <>
            <ErrorMessage message={errors.address} />
          </>
        )}
      </div>

      {/* â­ City + State + Postal Code */}
      <div className="grid grid-cols-3 gap-3">
        {/* City */}
        <div className="relative">
          <Label labelTitle="City" />
          <BasicSelect
            label="City"
            value={formData.city}
            options={[
              "Karachi",
              "Lahore",
              "Islamabad",
              "Multan",
              "Faisalabad",
              "Hyderabad",
              "Quetta",
              "Peshawar",
              "Rawalpindi",
              "Sialkot",
            ]}
            onChange={(value) => {
              setFormData({ ...formData, city: value });
              if (errors.city) setErrors({ ...errors, city: "" });
            }}
            error={!!errors.city}
          />

          {errors.city && <ErrorMessage message={errors.city} />}
        </div>

        {/* State */}
        <div className="relative">
          <Label labelTitle="State" />
          <BasicSelect
            label="State"
            value={formData.state}
            options={[
              "Sindh",
              "Punjab",
              "Balochistan",
              "Khyber Pakhtunkhwa",
              "Gilgit-Baltistan",
              "Azad Kashmir",
            ]}
            onChange={(value) => {
              setFormData({ ...formData, state: value });
              if (errors.state) setErrors({ ...errors, state: "" });
            }}
            error={!!errors.state}
          />

          {errors.state && <ErrorMessage message={errors.state} />}
        </div>

        {/* Postal Code */}
        <div className="relative">
          <Label labelTitle="Postal Code" />

          <Input
            placeholder="Postal Code"
            type="text"
            value={formData.postalCode}
            onChange={(e) => {
              setFormData({ ...formData, postalCode: e.target.value });
              if (errors.postalCode) setErrors({ ...errors, postalCode: "" });
            }}
            error={!!errors.postalCode}
          />
          {errors.postalCode && <ErrorMessage message={errors.postalCode} />}
        </div>
      </div>

      {/* Email / Phone */}
      <div className="grid grid-cols-2 gap-3">
        {/* Email */}
        <div className="relative">
          <Label labelTitle="Email" />
          <Input
            type="email"
            placeholder="thomasshelby@gmail.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
            error={!!errors.email}
          />
          {errors.email && <ErrorMessage message={errors.email} />}
        </div>

        {/* Phone */}
        <div className="relative">
          <Label labelTitle="Phone Number" />
          <Input
            placeholder="+92 12345678"
            type="text"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: "" });
            }}
            error={!!errors.phone}
          />

          {errors.phone && <ErrorMessage message={errors.phone} />}
        </div>
      </div>

      {/* Special Instructions */}
      <div className="relative">
        <Label labelTitle="Special Instruction" />
        <Input
          placeholder="e.g Send product pictures"
          type="text"
          value={formData.specialInstruction}
          onChange={(e) => {
            setFormData({
              ...formData,
              specialInstruction: e.target.value,
            });
            if (errors.specialInstruction)
              setErrors({ ...errors, specialInstruction: "" });
          }}
          error={!!errors.specialInstruction}
        />
        {errors.specialInstruction && (
          <ErrorMessage message={errors.specialInstruction} />
        )}
      </div>
    </form>
  );
};

export default CustomerDetail;
