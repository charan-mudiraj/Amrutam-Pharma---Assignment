export default function Card1({ children, ...props }) {
  return (
    <div className="relative">
      <div className="absolute bg-secondary w-full h-[45px] z-20 top-0 rounded-[20px]"></div>
      <div
        {...props}
        className={
          props.className +
          " " +
          "relative z-30 top-[4px] rounded-[20px] min-h-[50px] md:shadow-[0_4px_9px_0px_#0000001C] shadow-[0_4px_16.6px_0px_#0000001C]"
        }
      >
        {children}
      </div>
    </div>
  );
}
