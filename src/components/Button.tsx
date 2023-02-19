interface ButtonProps {
  text: string;
  color: string;
}

export function Button({text, color}: ButtonProps) {
  return (
    <button className="rounded py-6 px-9 outline-none text-white font-bold hover:brightness-90" style={{backgroundColor: color}} >
      {text}
    </button>
  )
}