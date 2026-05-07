import axiosInstance from "./axiosInstance";

export const saveBasicInfo = (data) => axiosInstance.post("/onboarding/basic-info/", data);
export const saveContactInfo = (data) => axiosInstance.post("/onboarding/contact/", data);
export const saveMedicalInfo = (data) => axiosInstance.post("/onboarding/medical/", data);
export const saveEmergencyContact = (data) => axiosInstance.post("/onboarding/emergency-contact/", data);
