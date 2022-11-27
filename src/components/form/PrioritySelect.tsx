import React, { useState } from "react";

interface InputProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const PrioritySelect = ({ formData, setFormData }: InputProps) => {

    const [checked, setChecked] = useState()
  
};
export default PrioritySelect;
