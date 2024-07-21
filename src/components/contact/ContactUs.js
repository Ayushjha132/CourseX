export default function ContactUs() {
    return (
        <>
            <h1 id="contact"
                className="flex justify-center item-center text-blue-600 font-semibold text-4xl pt-10 pb-8">Contact
                Us</h1>
            <div className="text-black max-w-screen-xl flex justify-center mx-auto pb-20 ">
                <form
                    className="flex flex-col space-y-8 justify-center px-10 py-16 rounded-lg bg-white rounded-b-large border-t-4 border-blue-shadow">
                    <input
                        className="pl-5 p-2 rounded-lg w-80 bg-blue-50"
                        type="text"
                        name="name"
                        placeholder="Name"/>
                    <input
                        className="pl-5 p-2 rounded-lg w-80 bg-blue-50"
                        type="email"
                        placeholder="Email"
                        name="email"/>
                    <textarea
                        className="pl-5 p-2 rounded-lg w-80 bg-blue-50"
                        rows={6} cols={50}
                        placeholder="Message" name="message"/>
                    <input
                        className="text-white bg-blue-600 block px-5 py-2 rounded hover:bg-blue-700 hover:ring-2 hover:ring-blue-600 hover:ring-offset-2"
                        type="submit" value="Submit"/>
                </form>
            </div>
        </>
    )
}