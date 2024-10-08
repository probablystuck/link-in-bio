import "./App.css"
import { BottomSection } from "./BottomSection"

function App() {
  const octoberEleventh =
    "https://secondcityus.my.salesforce-sites.com/ticket/#/instances/a0FTP0000008akf2AA"
  const octoberEighteenth =
    "https://secondcityus.my.salesforce-sites.com/ticket/#/instances/a0FTP000000fYfF2AU"
  const octoberTwentyThird =
    "https://secondcityus.my.salesforce-sites.com/ticket/#/instances/a0FTP000000dMlR2AU"
  return (
    <>
      <h1>These all take place at The Second City in Old Town</h1>
      <h2>These shows are $15, on Fridays, and run from 7pm to 8pm</h2>
      <h4>
        3 different groups will play, I will be in one of those groups. The
        shows on the 11th and 18th will be different than the stuff I've done
        previously!
      </h4>
      <div>
        <button
          style={{
            marginRight: "10%",
          }}
        >
          <a href={octoberEleventh}>October 11th</a>
        </button>
        <button>
          <a href={octoberEighteenth}>October 18th</a>
        </button>
      </div>
      <div style={{ marginBottom: "2%" }}>
        <h2>
          This show is $10, on a Wednesday, and it'll run from 8:30pm to 9:30pm
        </h2>
        <h4>
          This is an end of a class show! We've all been in classes together for
          a bit, and everyone is so so funny. I can't wait for this one!
        </h4>
        <button>
          <a href={octoberTwentyThird}>October 23rd</a>
        </button>
      </div>
      <BottomSection />
    </>
  )
}

export default App
