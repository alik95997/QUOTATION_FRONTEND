import React, { useState, useEffect } from "react";
import CustomerDetail from "../../components/NewInvoice/CustomerDetails";
import OrderSources from "../../components/NewInvoice/OrderSources";
import AddProduct from "../../components/NewInvoice/AddProduct";
import PriceSummary from "../../components/NewInvoice/PriceSummary";
import { validateStep } from "../../utils/validationStep";
import DashboardLayout from "../../components/dashboardLayout/DashboardLayout";
import Button from "../../components/CustomButton/Button";
import { Send, Save, EyeClosed, Eye } from "lucide-react";
import Logo from "../../assets/Vector.png";
const AdminQuotation = () => {
  const [showPreview, setShowPreview] = useState(true);

  const [step, setStep] = useState(0);

  const steps = [
    { title: "Customer Details", component: CustomerDetail },
    { title: "Order Sources", component: OrderSources },
    { title: "Add Product", component: AddProduct },
    { title: "Price Summary", component: PriceSummary },
  ];

  const StepComponent = steps[step].component;
  const isLastStep = step === steps.length - 1;

  const [formData, setFormData] = useState({
    // Step 0 fields
    customerName: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    phone: "",
    specialInstruction: "",

    // Step 1
    orderSource: "",
    orderDate: "",
    deliveryAddress: "",
    issueDate: "",
    dueDate: "",
    paymentMethod: "",
    advance: "",
    terms: "",

    // Step 2 fields
    productName: "",
    category: "",
    unitMeasure: "",
    quantity: "",
    cityProduct: "", // renamed to avoid clash with Step0 city
    phoneProduct: "",
    unitPrice: "",
    discountApplied: "",
    taxApplied: "",

    // step 3 fields
    subTotal: "",
    totalDiscount: "",
    totalTax: "",
    grandTotal: "",
  });

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const validateErrors = validateStep(step, formData);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    const validateErrors = validateStep(step, formData);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      // Final submission logic here
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };
  // Auto generate invoice number
  useEffect(() => {
    if (!formData.invoiceNumber) {
      const random = Math.floor(10000 + Math.random() * 90000);
      setFormData((prev) => ({ ...prev, invoiceNumber: `INV-${random}` }));
    }
  }, []);

  // Auto calculations
  useEffect(() => {
    const qty = Number(formData.quantity) || 0;
    const price = Number(formData.unitPrice) || 0;
    const discount = Number(formData.discountApplied) || 0;
    const tax = Number(formData.taxApplied) || 0;

    const subTotal = qty * price;
    const discountAmount = (subTotal * discount) / 100;
    const taxedAmount = ((subTotal - discountAmount) * tax) / 100;
    const grandTotal = subTotal - discountAmount + taxedAmount;

    setFormData((prev) => ({
      ...prev,
      subTotal: subTotal.toFixed(2),
      totalDiscount: discountAmount.toFixed(2),
      totalTax: taxedAmount.toFixed(2),
      grandTotal: grandTotal.toFixed(2),
    }));
  }, [
    formData.quantity,
    formData.unitPrice,
    formData.discountApplied,
    formData.taxApplied,
  ]);

  return (
    <DashboardLayout>
      <div className="w-full lg:h-[calc(100vh-64px)] max-h-max  bg-white ">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-semibold">New Invoice</h1>

          <div className="flex gap-3">
            <Button
              variant="gray"
              onClick={() => setShowPreview(!showPreview)}
              icon={showPreview ? <Eye /> : <EyeClosed />}
              title={showPreview ? "Hide Preview" : "Show Preview"}
            />
            <Button title="Save as Draft" icon={<Save />} variant="gray" />
            <Button icon={<Send />} title="Send Invoice" variant="gray" />
          </div>
        </div>

        <div className="flex w-full lg:flex-row flex-col lg:h-[calc(100%-53px)] h-full gap-3">
          <div
            className={`bg-[#F9F9F9]  w-full  border-2 border-[#C2C2C21F] lg:h-full shadow p-5 overflow-y-auto transition-all duration-300 ${
              showPreview ? "w-1/2 lg:w-1/2" : "w-full"
            }`}
          >
            <div className="flex gap-3 mb-5">
              {steps.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={`px-2 py-1.5 text-[12px] rounded-full border-2 shadow-sm font-medium 
                ${
                  step === i
                    ? "border-blue-600 text-white bg-blue-600"
                    : "border-blue-600 text-blue-600  hover:bg-gray-100"
                }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <StepComponent
              formData={formData}
              setFormData={setFormData}
              setErrors={setErrors}
              errors={errors}
            />

            {/* Next / Preview Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => (isLastStep ? handleSubmit() : handleNext())}
                className="px-8 w-[45%] py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800"
              >
                {isLastStep ? "Submit" : "Next"}
              </button>
              <button className="px-8 w-[45%] py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800">
                Preview
              </button>
            </div>
          </div>

          {showPreview && (
            <div className="relative bg-[#F9F9F9] w-full lg:w-1/2 lg:h-full rounded-xl shadow p-6 overflow-y-auto">
              {/* HEADER */}
              <div className="flex items-start justify-between">
                <div>
                  <img src={Logo} className="w-20 h-20 mb-3" alt="Logo" />

                  <p className="font-semibold">
                    Invoice Number :
                    <span className="font-normal ml-1">
                      {formData.invoiceNumber || "—"}
                    </span>
                  </p>

                  <p className="font-semibold">
                    Date Issued :
                    <span className="font-normal ml-1">
                      {formData.issueDate || "—"}
                    </span>
                  </p>

                  <p className="font-semibold">
                    Due Date :
                    <span className="font-normal ml-1">
                      {formData.dueDate || "—"}
                    </span>
                  </p>
                </div>

                {/* CUSTOMER INFO */}
                <div className="text-right text-sm space-y-1">
                  <p>{formData.customerName || "—"}</p>
                  <p>{formData.email || "—"}</p>
                  <p>{formData.phone || "—"}</p>
                  <p>{formData.address || "—"}</p>
                  <p>{formData.city || "—"}</p>
                  <p>{formData.state || "—"}</p>
                  <p>{formData.postalCode || "—"}</p>
                </div>
              </div>

              <hr className="my-4" />

              {/* ORDER INFO */}
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Order Source:</p>
                  <p className="text-gray-600">{formData.orderSource || "—"}</p>
                </div>

                <div>
                  <p className="font-semibold">Delivery Address:</p>
                  <p className="text-gray-600">
                    {formData.deliveryAddress || "—"}
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Payment Method:</p>
                  <p className="text-gray-600">
                    {formData.paymentMethod || "—"}
                  </p>
                </div>
              </div>

              <hr className="my-4" />

              {/* PRODUCT TABLE */}
              <h3 className="font-semibold mb-2">Products</h3>
              <table className="w-full text-sm border">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-2 border">Product</th>
                    <th className="p-2 border">Qty</th>
                    <th className="p-2 border">Price</th>
                    <th className="p-2 border">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">
                      {formData.productName || "—"}
                    </td>
                    <td className="p-2 border">{formData.quantity || "—"}</td>
                    <td className="p-2 border">{formData.unitPrice || "—"}</td>
                    <td className="p-2 border">
                      {formData.subTotal || "0.00"}
                    </td>
                  </tr>
                </tbody>
              </table>

              <hr className="my-4" />

              {/* PRICE SUMMARY */}
              <div className="text-sm space-y-2">
                <p className="font-semibold">
                  Subtotal:
                  <span className="font-normal ml-2">{formData.subTotal}</span>
                </p>

                <p className="font-semibold">
                  Discount ({formData.discountApplied || 0}%):
                  <span className="font-normal ml-2">
                    {formData.totalDiscount}
                  </span>
                </p>

                <p className="font-semibold">
                  Tax ({formData.taxApplied || 0}%):
                  <span className="font-normal ml-2">{formData.totalTax}</span>
                </p>

                <p className="font-semibold text-lg mt-3">
                  Grand Total:
                  <span className="font-normal ml-2">
                    {formData.grandTotal}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-2 right-2">
        <img src="/aiIcon.svg" alt="AI Icon" />
      </div>
    </DashboardLayout>
  );
};

export default AdminQuotation;
