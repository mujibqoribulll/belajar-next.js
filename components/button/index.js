export default function ButtonIcon(props) {
  const { label, styleContainer, onClick, type = 'button' } = props;
  return (
    <button
      className={`bg-red-600  ${styleContainer} px-4 py-1 rounded-md text-white text-base`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}
