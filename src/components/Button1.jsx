export default function Button1({ text, onClick = () => {} }) {
  return (
    <button
      className="bg-secondary px-[40px] py-[20px] w-fit rounded-[16px]"
      onClick={onClick}
    >
      <p className="custom-md-2:text-[24px] md:text-[19px] text-[14px] text-[#FFFFFF] font-semibold">
        {text}
      </p>
    </button>
  );
}
