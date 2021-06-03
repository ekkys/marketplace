export default function AtomParagraph({
  value,
  size,
  color,
  customClass,
  margin,
  lineHeight,
  weight,

}) {
  return ( <
    >
    <p className = {customClass}
    style = {
      {
        fontSize: size,
        color: color,
        margin: margin,
        lineHeight: lineHeight,
        fontWeight : weight,
      }
    } > {
      value
    } < /p> <
    />
  );
}
