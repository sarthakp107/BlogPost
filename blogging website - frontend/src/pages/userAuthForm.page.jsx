import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { InputBox } from "../components/input.component";

const UserAuthForm = ({ type }) => {
    return (
        <section className="h-cover flex items-center justify-center">
            <form className="w-[80%] max-w-[400px]">
                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                    {type === "sign-in" ? "Welcome back" : "Join us Today"}
                </h1>

                {type !== "sign-in" && (
                    <>
                        <div className="relative">
                            <InputBox
                                name="fullname"
                                type="text"
                                id=""
                                placeholder="Full Name"
                            />
                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
                        </div>
                    </>
                )}

                <div className="relative">
                    <InputBox
                        name="email"
                        type="email"
                        id=""
                        placeholder="Email"
                    />
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
                </div>

                <div className="relative">
                    <InputBox
                        name="password"
                        type="password"
                        id=""
                        placeholder="Password"
                    />
                    <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
                </div>
            </form>
        </section>
    );
}

export default UserAuthForm;
