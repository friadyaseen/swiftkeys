import { useState } from "react";

export default function Main() {
    let t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    let temp = t.split("")
    const [tt, settt] = useState("");
    let text = tt.split("");
    let [time, settime] = useState(5)
    let w = 0;
    let hh = null;
    document.getElementById("root").addEventListener("click", async () => {
        if (document.activeElement.tagName === "INPUT") {
            hid(true)
            hh = setInterval(() => ff(), 1000)
        } else {
            hid(false)
        }
    })
    function ff() {
        if (w === time) {
            endgame()
            clearInterval(hh)
        } else {
            w++
        }
    }

    function endgame() {
        let charec = 0;
        let error = 0;
        console.log(temp)
        console.log(text)
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== temp[i]) {
                error++;
            }
            charec++;
        }

        console.log(error, charec)
        console.log(((charec - error) / charec) * 100)
    }
    //correct charectur = charrectur typed- error
    //accurscy = (correct charectur / charectur typed) * 100
    return (
        <div className='main'>
            <h6>Test your typing SPEED</h6>
            <p id="n" className="focus">Focus to start test</p>
            <div onClick={() => document.getElementById("ff").focus()} className='type-c'>
                <p>{
                    temp.map((t, i) => {
                        return <span key={i}>{t}</span>
                    })
                }</p>
                <div className='type-b'>
                    <p>{
                        temp.map((t, i) => {
                            if (i < text.length) {
                                return <span key={i} className={t === text[i] ? "correct" : t === ' ' ? "incorrect-f" : "incorrect"}>{t}</span>
                            }
                            else {
                                return <></>
                            }
                        })
                    }</p>
                </div>
            </div>
            <input onChange={e => settt(e.target.value)} className="in" type="text" id="ff"></input>
        </div>
    )
}



function hid(i) {
    if (i) {
        let r = document.querySelector(':root');
        r.style.setProperty('--n', '0px');
        document.getElementById("n").style.display = "none"
    } else {
        let r = document.querySelector(':root');
        r.style.setProperty('--n', '5px');
        document.getElementById("n").style.display = "block"
    }
}