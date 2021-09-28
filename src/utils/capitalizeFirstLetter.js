export default function capitalizeFirstLetter(str) {
  const strArr = str.split(" ");
  const strFormatted = strArr
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
  return strFormatted;
}
