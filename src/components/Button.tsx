interface ButtonProps {
  text: string
  color: string
  type?: string
}

export function Button ({ text, color, type = 'submit' }: ButtonProps) {
  return (
    <button className="rounded w-fit py-6 px-9 outline-none text-white font-bold hover:brightness-90" style={{ backgroundColor: color }} >
      {text}
    </button>
  )
}
