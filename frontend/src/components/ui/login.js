import { useState } from "react";
import Modal from "./modal/modal";
import Button from "./button";
import { AiFillGoogleSquare } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const LoginButton = ({ text, buttonClass }) => {
    const [loginPage, setLoginPage] = useState(false);
    return (
        <>
            <Button
                name={text}
                className={`py-2 ${buttonClass}`}
                onClickHandler={() => {
                    setLoginPage(true);
                }}
            />
            {loginPage && (
                <Modal
                    bgOnClickHandler={() => {
                        setLoginPage(false);
                    }}
                >
                    <div className="bg-black py-8 px-12 rounded-xl justify-center items-center flex flex-col text-white">
                        <div className="w-full">
                            <button onClick={() => setLoginPage(false)}>
                                <RxCross1 />
                            </button>
                        </div>
                        <h2 className="text-4xl pt-4">Login</h2>
                        <h3 className="text-xl py-1 pb-8">
                            To create your Portflix portfolio
                        </h3>
                        <Button
                            name="Sign In With Google"
                            onClickHandler={() => {}}
                            icon={<AiFillGoogleSquare />}
                            className={`bg-white text-black text-xl font-bold hover:opacity-90
                                 mx-auto text-center my-3 flex justify-center relative`}
                        />
                        <h4 className="text-base">
                            Get your digital portflio ready in few minutes!
                        </h4>
                    </div>
                </Modal>
            )}
        </>
    );
};
export default LoginButton;
