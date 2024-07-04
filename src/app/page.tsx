import Image from "next/image";
import {BrowserRouter as Router, Route} from "react-router-dom";

export default function Home() {
    return (
        <main>
            <div>
                <p>
                    Welcome to banking online!
                </p>

                <p>
                    Description of the bank...
                </p>
            </div>

            <div>
                <a
                    href="./login-page/index.tsx"
                    target="_blank"
                >
                    Login
                </a>

                <a
                    href=""
                    target="_blank"
                >
                    Logon
                </a>
            </div>
        </main>
    );
}