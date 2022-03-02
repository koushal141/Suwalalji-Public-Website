import styled from "styled-components";

const Checkbox = ({ type, label, name, onChange }) => (
  <Label htmlFor={label + "-" + name}>
    <input
      name={name}
      onChange={onChange}
      type="checkbox"
      id={label + "-" + name}
    />
    <p>{label}</p>
  </Label>
);

const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export default Checkbox;
