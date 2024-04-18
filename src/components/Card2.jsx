export default function Card2({ color, children, title, ...props }) {
  return (
    <div className="relative md:w-[388px] w-[304px] h-[342px] flex-shrink-0">
      <div
        className="absolute top-0 w-full text-left pl-[26px] rounded-t-[20px] z-30 h-[54px] flex items-center"
        style={{ backgroundColor: color.trim() }}
      >
        <p className="md:*:text-[18px] font-semibold">{title}</p>
      </div>
      <div
        {...{ ...props, className: undefined }}
        className={
          "min-h-[65px] h-full bg-white rounded-[20px] shadow-[0_4px_17.1px_0_#00000021]"
        }
      >
        <div className={props.className + " " + "relative top-[54px]"}>
          {children}
        </div>
      </div>
    </div>
  );
}
