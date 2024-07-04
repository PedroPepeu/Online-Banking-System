import Image from "next/image";
import { useState } from "react";

const url = "";

export default function Login() {
    const [count, setCount] = useState(0);

    function handleClick() {
        const alert = document.getElementById('button-alert-div');
        alert!.innerHTML = "";

        if(count == 0) {
            checkForEmail();
            setCount(count + 1);
        }
        else {
            if(checkPasswordByEmail()) {
                window.open(url);
            } else {
                alert!.innerHTML+="Wrong password!";
            }
        }
    }

    return (
        <main>
            <div>
                <form>
                    <div id="input-div">
                        <input type="text" placeholder="Email..." id="input_email"/>

                        {/* <input type="text" placeholder="Password..." id="input_password"/> */}
                    </div>
                    <div id="button-alert-div">
                        <button onClick={handleClick}>
                            Submit!
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

function checkForEmail() {

}

function checkPasswordByEmail() {
    return true;
}