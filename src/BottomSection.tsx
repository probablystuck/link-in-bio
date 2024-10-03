import { Question } from "./Question"

export const BottomSection = () => {
  return (
    <details style={{ display: "flex", justifyContent: "flex-start" }}>
      <summary>Questions You Might Have</summary>
      <ol>
        <Question text="Will this be funny?" />
        Mildly
        <Question text="Will you hate me if I never come to one of these?" />
        No, I'm arguably funnier when I'm not doing this
        <Question text="Are you guys gonna make fun of the audience?" />
        No!!! Oh god I hate that stuff
        <Question text="Why doesnt this look like the other link in bio apps?" />
        I built it myself bc those cost money and it does not take much to put
        something like this together
        <Question text="Why did you use React?" />
        Don't ask me stuff like this
      </ol>
    </details>
  )
}
