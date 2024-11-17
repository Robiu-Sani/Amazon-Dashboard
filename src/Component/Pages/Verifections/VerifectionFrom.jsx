import { useState } from "react";
import { useForm } from "react-hook-form";
import ImageUpload from "../../Shaire/ImageUpload";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function VerificationForm() {
  const [countryCode, setCountryCode] = useState("+880");
  const [images, setImages] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const handleVerification = (data) => {
    // Check if required images are uploaded
    if (!images.profileImage || !images.voterIdImage) {
      if (!images.profileImage) {
        setError("profileImage", {
          type: "manual",
          message: "Profile image is required",
        });
      }
      if (!images.voterIdImage) {
        setError("voterIdImage", {
          type: "manual",
          message: "Voter ID image is required",
        });
      }
      return;
    }

    const formData = {
      ...data,
      countryCode,
      images,
    };

    console.log("Verification Data:", formData);
  };

  const handleImageUpload = (field, url) => {
    setImages((prev) => ({ ...prev, [field]: url }));
  };

  return (
    <div className="container mx-auto p-5 bg-white rounded-md shadow-md ">
      <form
        onSubmit={handleSubmit(handleVerification)}
        className="flex flex-col gap-5"
      >
        <h1 className="text-center font-bold text-2xl sm:text-3xl">
          Account Verification
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* WhatsApp Number Field */}
          <div className="w-full ">
            <label>WhatsApp Number</label>
            <div className="grid grid-cols-4 gap-2">
              <select
                className="w-full my-1 rounded-md border outline-0 px-3 py-2"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value="+880">+880</option>
                <option value="+91">+91</option>
                <option value="+92">+92</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+966">+966</option>
                <option value="+971">+971</option>
                <option value="+974">+974</option>
              </select>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{8,15}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                className="w-full my-1 rounded-md border outline-0 px-3 py-2 col-span-3"
                placeholder="Enter Your Phone Number"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Bank Account Field */}
          <div className="w-full ">
            <label>Bank Account Number</label>
            <input
              type="text"
              {...register("bankAccount", {
                required: "Bank account number is required",
              })}
              className="w-full my-1 rounded-md border outline-0 px-3 py-2"
              placeholder="Enter Bank Account Number"
            />
            {errors.bankAccount && (
              <p className="text-red-500 text-sm">
                {errors.bankAccount.message}
              </p>
            )}
          </div>

          {/* Mobile Wallet Field */}
          <div className="w-full ">
            <label>Mobile wallet number</label>
            <input
              type="text"
              {...register("mobileWallet", {
                required: "Mobile wallet number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid mobile wallet number",
                },
              })}
              className="w-full my-1 rounded-md border outline-0 px-3 py-2"
              placeholder="Enter Mobile Wallet Number"
            />
            {errors.mobileWallet && (
              <p className="text-red-500 text-sm">
                {errors.mobileWallet.message}
              </p>
            )}
          </div>

          {/* Mobile Wallet Field */}
          <div className="w-full ">
            <label>bKash, Nagad, or Rocket Number (Optional)</label>
            <input
              type="text"
              {...register("mobileWallet", {
                required: false,
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid mobile wallet number",
                },
              })}
              className="w-full my-1 rounded-md border outline-0 px-3 py-2"
              placeholder="Enter bKash, Nagad, or Rocket Number"
            />
            {errors.mobileWallet && (
              <p className="text-red-500 text-sm">
                {errors.mobileWallet.message}
              </p>
            )}
          </div>

          {/* City Field */}
          <div className="w-full ">
            <label>City</label>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              className="w-full my-1 rounded-md border outline-0 px-3 py-2"
              placeholder="Enter City"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          {/* City Code Field */}
          <div className="w-full ">
            <label>City Code</label>
            <input
              type="text"
              {...register("cityCode", {
                required: "City code is required",
                pattern: {
                  value: /^[0-9]{1,6}$/,
                  message: "Enter a valid city code",
                },
              })}
              className="w-full my-1 rounded-md border outline-0 px-3 py-2"
              placeholder="Enter City Code"
            />
            {errors.cityCode && (
              <p className="text-red-500 text-sm">{errors.cityCode.message}</p>
            )}
          </div>
          {/* Full Address Field */}
          <div className="w-full col-span-1 md:col-span-2">
            <label>Full Address</label>
            <textarea
              {...register("fullAddress", {
                required: "Full address is required",
              })}
              className="w-full my-1 rounded-md border outline-0 px-3 py-2"
              placeholder="Enter Full Address"
              rows={3}
            ></textarea>
            {errors.fullAddress && (
              <p className="text-red-500 text-sm">
                {errors.fullAddress.message}
              </p>
            )}
          </div>
        </div>

        {/* Upload Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div className="w-full flex flex-col gap-3">
            <label>Your Profile Image</label>
            <div className="w-full relative flex-col cursor-pointer max-h-[200px] min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
              {(images.profileImage && (
                <img
                  src={images.profileImage}
                  alt="Profile Preview"
                  className="mt-2 w-full max-h-[200px] min-h-[150px] rounded-md border"
                />
              )) || (
                <div className="w-full max-h-[200px] min-h-[150px] flex flex-col justify-center items-center h-full">
                  <IoCloudUploadOutline className="text-2xl" />
                  <small>Upload Profile</small>
                </div>
              )}
              <ImageUpload
                onUpload={(url) => handleImageUpload("profileImage", url)}
              />
            </div>
            {errors.profileImage && (
              <p className="text-red-500 text-sm">
                {errors.profileImage.message}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-3">
            <label>Your Voter ID Image</label>
            <div className="w-full relative flex-col cursor-pointer max-h-[200px] min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
              {(images.voterIdImage && (
                <img
                  src={images.voterIdImage}
                  alt="Voter ID Preview"
                  className="mt-2 w-full h-auto rounded-md border"
                />
              )) || (
                <div className="w-full max-h-[200px] min-h-[150px] flex flex-col justify-center items-center h-full">
                  <IoCloudUploadOutline className="text-2xl" />
                  <small>Upload Voter ID</small>
                </div>
              )}
              <ImageUpload
                onUpload={(url) => handleImageUpload("voterIdImage", url)}
              />
            </div>
            {errors.voterIdImage && (
              <p className="text-red-500 text-sm">
                {errors.voterIdImage.message}
              </p>
            )}
          </div>

          {/* Optional Fields */}
          <div className="w-full flex flex-col gap-3">
            <label>Your Passport Image (Optional)</label>
            <div className="w-full relative flex-col cursor-pointer max-h-[200px] min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
              {(images.passportImage && (
                <img
                  src={images.passportImage}
                  alt="Passport Preview"
                  className="mt-2 w-full h-auto rounded-md border"
                />
              )) || (
                <div className="w-full max-h-[200px]  min-h-[150px] flex flex-col justify-center items-center h-full">
                  <IoCloudUploadOutline className="text-2xl" />
                  <small>Upload Passport</small>
                </div>
              )}
              <ImageUpload
                onUpload={(url) => handleImageUpload("passportImage", url)}
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <label>Your driving license (Optional)</label>
            <div className="w-full relative flex-col cursor-pointer max-h-[200px] min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
              {(images.drivingLicenseImage && (
                <img
                  src={images.drivingLicenseImage}
                  alt="Passport Preview"
                  className="mt-2 w-full h-auto rounded-md border"
                />
              )) || (
                <div className="w-full max-h-[200px]  min-h-[150px] flex flex-col justify-center items-center h-full">
                  <IoCloudUploadOutline className="text-2xl" />
                  <small>Upload driving license</small>
                </div>
              )}
              <ImageUpload
                onUpload={(url) =>
                  handleImageUpload("drivingLicenseImage", url)
                }
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Verify"
          className="w-full p-2 rounded-md font-semibold cursor-pointer text-white bg-gray-700"
        />
      </form>
    </div>
  );
}
