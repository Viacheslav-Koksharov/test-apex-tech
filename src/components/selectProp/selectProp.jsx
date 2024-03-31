/* eslint-disable react/prop-types */
const SelectProp = ({ evt, val, inits }) => {
  return (
    <select onChange={evt} value={val}>
      {inits.map((init, i) => (
        <option key={i}>{init}</option>
      ))}
    </select>
  );
};
export default SelectProp;
