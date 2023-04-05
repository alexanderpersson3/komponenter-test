import React, { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        data-testid="toggle-switch"
      />
      {checked ? "ON" : "OFF"}
    </label>
  );
};

export default ToggleSwitch;
