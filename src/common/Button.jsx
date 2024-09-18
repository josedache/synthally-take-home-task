function Button({ startIcon, endIcon, children }) {
  return (
    <button className="flex items-center gap-3 border border-[#787486] rounded-md px-3 py-2 text-[#787486]">
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </button>
  );
}

export default Button;
