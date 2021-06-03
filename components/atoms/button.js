export default function button({
  value,
  background,
  color,
  margin,
  border,
  padding,
  radius,
  customClass

}) {
  return ( <
    >
    <button

    className={customClass}
    style = {
      {
        background: background,
        color: color,
        margin: margin,
        border: border,
        padding: padding,
        borderRadius : radius
      }
    }
    > {value} </button>
    </>
  );
}
