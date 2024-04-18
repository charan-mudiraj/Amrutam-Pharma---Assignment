export default function Button2({ text, onClick = () => {} }) {
  return (
    <button
      className="bg-primary px-[40px] py-[20px] w-fit rounded-[16px] border-[1px] border-secondary"
      onClick={onClick}
    >
      <p className="custom-md-2:text-[24px] md:text-[19px] text-[14px] text-secondary font-semibold">
        {text}
      </p>
    </button>
  );
}
