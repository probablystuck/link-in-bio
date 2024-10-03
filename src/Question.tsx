interface Props {
  text: string
}
export const Question = ({ text }: Props) => {
  return (
    <li>
      <b>{text}</b>
    </li>
  )
}
