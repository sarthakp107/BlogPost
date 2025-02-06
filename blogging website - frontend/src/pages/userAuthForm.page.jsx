import { InputBox } from "../components/input.component";

const UserAuthForm = ({ type }) => {
    return (
        <section className="h-cover flex items-center justify-center">
            <form className="w-[80%] max-w-[400px]">
                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                    {type == "sign-in" ? "Welcome back" : "Join us Today"}
                </h1>

                {
                    type != "sign-in" ?
                        <InputBox
                            name="fullname"
                            type="text"
                            id=""
                            placeholder="Full Name"
                        />
                        : ""
                }

                <InputBox
                    name="email"
                    type="email"
                    id=""
                    placeholder="Email "
                />
                <InputBox
                    name="password"
                    type="password"
                    id=""
                    placeholder="Password"
                />
            </form>

        </section>
    )
}

export default UserAuthForm;