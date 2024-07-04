import Image from "next/image";

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